import webpack from 'webpack';
import path from 'path';

import { BuildPaths } from '../config/build/types/config';
import { buildCssLoaders } from '../config/build/loaders/buildCssLoaders';

export default ({ config }: {config: webpack.Configuration }) => {
	const paths: BuildPaths = {
        entry: '',
        build: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    if (config.module?.rules) {
        // eslint-disable-next-line no-param-reassign
        config.module.rules = config?.module?.rules?.map((rule) => {
            if (rule && typeof rule !== 'string') {
                if (/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i };
                }
            }
            return rule;
        });
    }

    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config.module?.rules?.push(buildCssLoaders(true));
	return config;
}