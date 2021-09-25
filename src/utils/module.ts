import { access, constants } from 'fs';
import { resolve } from 'path';

type RequireId = string | string[];

const nodeRequire = global.nodeRequire;

export const wrapArray = (value: RequireId): string[] =>
  value?.length ? [value as string] : (value as string[]);

export const exists = (id: string): Promise<boolean> =>
  new Promise((resolve) => {
    access(id, constants.F_OK, (error) => resolve(!error));
  });

export const crossRequire = async (
  id: RequireId,
  req: NodeRequire | RequireResolve = nodeRequire,
): Promise<string> => {
  const moduleIds: [string, string][] = wrapArray(id).map((relativeId) => [
    resolve(process.cwd(), relativeId),
    resolve(__dirname, relativeId),
  ]);

  for (const [projectId, rockId] of moduleIds) {
    if (await exists(projectId)) {
      return req(projectId);
    } else if (await exists(rockId)) {
      return req(rockId);
    }
  }
};

export const crossResolve = async (id: string): Promise<string> =>
  crossRequire(id, nodeRequire.resolve);
