import { fork } from 'child_process';
import { resolve } from 'path';

import type { RockDynamicConfig } from 'types/cli';
import type { RockLogger } from 'types/logger';

export const launchNode = async (
	logger: RockLogger,
	dynamicConfigs?: RockDynamicConfig,
	entry?: string,
): Promise<void> => {
	if (!entry) return;

	logger.nodeDetected(entry, dynamicConfigs);
	logger.launchNodeServer(dynamicConfigs);

	try {
		fork(resolve(__dirname, 'server.js'), [entry], {
			cwd: process.cwd(),
			stdio: 'inherit',
		});
	} catch (e) {
		logger.launchNodeFailure(entry, dynamicConfigs);
	}
};

export const launchDevelopment = async (): Promise<void> => {
	console.log('coming soon!');
};
