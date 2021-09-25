import type { RockDynamicConfig } from 'types/cli';

export interface RockLogger {
  greeting: (version: string) => void;
  noEntry: (availableEntries: string) => void;
  nodeDetected: (entry: string, configs: RockDynamicConfig) => void;
  launchNodeServer: (configs: RockDynamicConfig) => void;
  launchNodeFailure: (entry: string, configs: RockDynamicConfig) => void;
}
