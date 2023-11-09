import type { StorybookConfig } from "@storybook/react-webpack5";
import path from 'path';
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/preset-scss",
    ({
        name: "@storybook/addon-styling-webpack",

        options: {
          rules: [
            {
              test: /\.s?css$/,
              sideEffects: true,
              use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {},
                },
                'sass-loader'
              ],
            },
          ],
        }
    })
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  
};
export default config;
