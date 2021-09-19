import type { CommandModule } from 'yargs'

const module: CommandModule = {
  command: 'bundle',
  describe: 'Bundle/compile source code for release',
  handler: () => {
    console.log('coming soon..')
  },
}

export default module
