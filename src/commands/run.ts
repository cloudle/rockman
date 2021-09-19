import type { CommandModule } from 'yargs'

export const sum = (a: number, b: number): number => a + b

const module: CommandModule = {
  command: '$0',
  aliases: ['run'],
  describe: 'Launch development environment',
  builder: (yargs) => yargs.default('p', 2000),
  handler: async (args) => {
    console.log(args)
    console.log('hmm, well.. preparing!')
  },
}

export default module
