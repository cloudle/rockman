import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const commandOptions = []
export const cli = yargs(hideBin(process.argv))

cli.alias('h', 'help')
cli.alias('v', 'version')
commandOptions.forEach(cli.command)

cli.help().argv
