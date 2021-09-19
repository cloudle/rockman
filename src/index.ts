import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import defaultCommand from 'commands/default'
import { options } from 'utils/global'

export const cliInstance = yargs(hideBin(process.argv))
const commands = [defaultCommand]
commands.forEach((options) => cliInstance.command(options))

cliInstance
  .options(options)
  .alias('h', 'help')
  .alias('v', 'version')
  .demandCommand(1, 'You need at least one command before moving on')
  .parse()
