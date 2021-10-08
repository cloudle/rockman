import type { CommandModule } from 'yargs';
import { launchNode } from 'commands/run/launcher';
import { guessEntries } from 'commands/run/util';
import { extractInternals, fetchDynamicConfigs } from 'utils/cli';

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
		const { nodeEntry } = await guessEntries(logger);

		await launchNode(logger, dynamicConfigs, nodeEntry);
	},
};

export default module;
