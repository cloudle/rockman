interface MergeResult {
  success: boolean;
  value: string;
}

interface Engine {
  hello: (name: string) => string;
  merge: (origin: string, current: string, remote: string) => MergeResult;
}

export const engine: Engine = global.engine;
