import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const cli = yargs(hideBin(process.argv))
const commandOptions = []

cli.alias('h', 'help')
cli.alias('v', 'version')
commandOptions.forEach(cli.command)

cli.help().argv
