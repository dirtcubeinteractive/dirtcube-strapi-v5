import { mergeConfig, type UserConfig } from 'vite';

export default (config: UserConfig) => {
    // Important: always return the modified config
    return mergeConfig(config, {
        server: {
            port: 5174,
            strictPort: false// Replace with your desired port number
        },
        resolve: {
            alias: {
                '@': '/src',
            },
        },
    });
};
