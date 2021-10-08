import type { CommandModule } from 'yargs';
import { engine } from 'utils/global';

const module: CommandModule = {
	command: 'bundle',
	describe: 'Bundle/compile source code for release',
	handler: () => {
		const merged = engine.merge(
			'origin version',
			'origin updated!',
			'origin version',
		);
		console.log(merged.success, merged.value, '<--');
		console.log('Coming soon..');
	},
};

export default module;
