import type { Preview } from "@storybook/react";
import { decoratorStyle } from "./decorators/decoratorStyle";

const preview: Preview = {
  parameters: {
    decorators: [
      (Story) => (
        decoratorStyle(Story)
      )
    ],
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
