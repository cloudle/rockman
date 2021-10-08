import type { Chalk } from 'chalk';
import type { RockDynamicConfig } from 'types/cli';
import type { RockLogger } from 'types/logger';

export const defaultLogger = (chalk: Chalk): RockLogger => {
	const { gray, red, green, blue, yellow, magenta } = chalk;
	const mark = '｢rockman｣';
	const serverAddress = (configs: RockDynamicConfig) =>
		blue(`http://${configs.host}:${configs.serverPort}`);

	return {
		greeting: (version) =>
			console.log(gray(`${mark} cli`), magenta(`@${version}`)),
		noEntry: (allEntries) => {
			console.log(
				red('No entry found! ') +
					'you need at least one entry on the following list:\n' +
					gray('[') +
					green(allEntries) +
					gray(']'),
			);
		},
		nodeDetected: (entry) => {
			console.log(
				gray(mark) +
					gray(' • ') +
					yellow('node entry ') +
					green(entry) +
					gray(' detected'),
			);
		},
		launchNodeServer: (configs) => {
			console.log(
				gray('          • ') + yellow('launching ') + serverAddress(configs),
			);
		},
		launchNodeFailure: (entry: string) => {
			console.log(gray(mark) + red(' error launching server ') + green(entry));
		},
	};
};
