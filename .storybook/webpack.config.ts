import webpack from 'webpack';
import path from 'path';

export default ({ config }: {config: webpack.Configuration }) => {
	const paths = {
        src: path.resolve(__dirname, '..', 'src'),
    };
    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');
	return config;
}