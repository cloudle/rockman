import type { CommandModule } from 'yargs';
import {
  extractInternals,
  fetchDynamicConfigs,
  guessEntry,
  nodeEntries,
  webEntries,
} from 'utils/cli';

const packageJson = global.packageJson;
export const sum = (a: number, b: number): number => a + b;

const module: CommandModule = {
  command: '$0',
  aliases: ['run'],
  describe: 'Launch development environment',
  builder: (yargs) => yargs.default('p', 2000),
  handler: async () => {
    const { configs, modules } = await extractInternals();
    const { logger } = modules;
    const dynamicConfigs = fetchDynamicConfigs(configs);
    const webEntry = await guessEntry(webEntries);
    const nodeEntry = await guessEntry(nodeEntries);

    logger.greeting(packageJson.version);

    if (!webEntry && !nodeEntry) {
      logger.noEntry([...webEntries, ...nodeEntries].join(', '));
    }

    if (nodeEntry) {
      logger.nodeDetected(nodeEntry, dynamicConfigs);
      logger.launchNodeServer(dynamicConfigs);
    }
  },
};

export default module;
