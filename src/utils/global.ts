interface MergeResult {
  success: boolean;
  value: string;
}

interface Engine {
  greet: (name: string) => void;
  merge: (origin: string, current: string, remote: string) => MergeResult;
}

export const engine: Engine = global.engine;
