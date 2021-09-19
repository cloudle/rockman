import type { Options } from 'yargs'

export const options: Record<string, Options> = {
  p: {
    desc: 'Development server port',
    alias: 'port',
    type: 'number',
    default: 3000,
  },
}
