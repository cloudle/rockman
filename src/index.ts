import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import bundleCommand from 'commands/bundle';
import extendsCommand from 'commands/extends';
import initCommand from 'commands/init';
import runCommand from 'commands/run';
import { options } from 'utils/configs';

export const cliInstance = yargs(hideBin(process.argv));
const commands = [runCommand, initCommand, extendsCommand, bundleCommand];
commands.forEach((options) => cliInstance.command(options));

cliInstance
  .options(options)
  .alias('h', 'help')
  .alias('v', 'version')
  .demandCommand(1, 'You need at least one command before moving on')
  .help()
  .parse();
