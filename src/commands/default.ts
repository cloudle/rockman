import type { CommandModule } from 'yargs'

export const sum = (a: number, b: number): number => a + b

const commandOptions: CommandModule = {
  command: 'run',
  aliases: ['dev'],
  describe: 'Launch development environment',
  handler: async () => {
    console.log('hmm, well.. preparing!')
  },
}

export default commandOptions
