import type { IsPluginEnabled, Plugin, ResolveConfig } from '#p/types/plugins.js';
import { hasDependency } from '#p/util/plugin.js';
import type { CapacitorConfig } from './types.js';

// https://capacitorjs.com/docs/config

const title = 'Capacitor';

const enablers = [/^@capacitor\//];

const isEnabled: IsPluginEnabled = ({ dependencies }) => hasDependency(dependencies, enablers);

const config = ['capacitor.config.{json,ts}'];

const resolveConfig: ResolveConfig<CapacitorConfig> = config => {
  return config.includePlugins ?? [];
};

export default {
  title,
  enablers,
  isEnabled,
  config,
  resolveConfig,
} satisfies Plugin;
