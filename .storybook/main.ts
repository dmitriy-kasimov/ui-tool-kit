import type { StorybookConfig } from "@storybook/react-webpack5";
import path from 'path';
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    if(config.resolve)
    {
      config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, "..", "src"),
      ];
    }
    return config;
  },
};
export default config;
