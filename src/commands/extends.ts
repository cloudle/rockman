import type { CommandModule } from 'yargs'

const module: CommandModule = {
  command: 'extends',
  describe: 'Inject/install new feature for existing project',
  handler: () => {
    console.log('coming soon..')
  },
}

export default module
