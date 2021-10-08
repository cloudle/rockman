import type { CommandModule } from 'yargs';

const module: CommandModule = {
	command: 'init',
	describe: 'Initialize project with boilerplate code',
	handler: () => {
		console.log('coming soon..');
	},
};

export default module;
