import type { CommandModule } from 'yargs';
import { engine } from 'utils/global';

const module: CommandModule = {
  command: 'bundle',
  describe: 'Bundle/compile source code for release',
  handler: () => {
    engine.greet('Cloud');
    console.log('coming soon..');
  },
};

export default module;
