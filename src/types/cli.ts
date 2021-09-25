import type { Chalk } from 'chalk';
import type { Express } from 'express';
import type { RockLogger } from 'types/logger';
import type { WebpackPluginFunction } from 'webpack';

export interface ModuleAlias {
  global: Record<string, string>;
  web: Record<string, string>;
  node: Record<string, string>;
}

type AnyConfig = Record<string, never>;
type RockMiddleware = (configs: AnyConfig) => AnyConfig;

export interface HotOptions {
  reload: boolean;
  quiet: boolean;
  path: string;
  dynamicPublicPath: boolean;
}

export interface RockConfigs {
  env?: () => string;
  isProduction?: (env: string) => boolean;
  publicPath?: (isProd: boolean, env: string) => string;
  staticPath?: (isProd: boolean, env: string) => string;
  host?: (cliDefault: string) => string;
  port?: (cliDefault: string) => string | number;
  serverPort?: (cliDefault: string) => string | number;
  optimizeMode?: (env: string) => boolean;
  keepPreviousBuild?: (isProd: boolean) => boolean;
  buildCleanUp?: (idProd: boolean) => void;
  buildId?: () => string;
  webpackConfigs?: RockMiddleware[];
  devConfigs?: RockMiddleware[];
  hotOptions?: HotOptions;
  htmlTemplate?: string;
  htmlOptions?: Record<string, never>;
  moduleAlias?: ModuleAlias;
  resolves?: Record<string, string>;
}

export interface RockDynamicConfig {
  env: string;
  isProduction: boolean;
  publicPath: string;
  staticPath: string;
  host: string;
  port: string | number;
  serverPort: string | number;
  optimizeMode: boolean;
  keepPreviousBuild: boolean;
}

export interface RockModules {
  chalk?: Chalk;
  webpack?: WebpackPluginFunction;
  express?: Express;
  ProgressBarPlugin?: never;
  HtmlPlugin?: never;
  DevServer?: never;
  logger?: RockLogger;
}

export interface RockInternals {
  configs: RockConfigs;
  modules: RockModules;
}
