import type { RockLogger } from 'types/logger';
import { guessEntry, nodeEntries, webEntries } from 'utils/cli';

interface RunEntries {
  nodeEntry?: string;
  webEntry?: string;
}

const packageJson = global.packageJson;

export const guessEntries = async (logger: RockLogger): Promise<RunEntries> => {
  const webEntry = await guessEntry(webEntries);
  const nodeEntry = await guessEntry(nodeEntries);

  logger.greeting(packageJson.version);

  if (!webEntry && !nodeEntry) {
    logger.noEntry([...webEntries, ...nodeEntries].join(', '));
  }

  return { nodeEntry, webEntry };
};
