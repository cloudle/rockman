interface Engine {
  hello: () => void;
}

export const engine: Engine = global.engine;
