import { compileUiExtensions } from '@vendure/ui-devkit/compiler';
import path from 'path';

if (require.main === module) {
    customAdminUi({ recompile: true, devMode: false })
        .compile?.()
        .then(() => {
            process.exit(0);
        });
}

export function customAdminUi(options: { recompile: boolean; devMode: boolean }) {
    if (options.recompile) {
        return compileUiExtensions({
            outputPath: path.join(__dirname, 'admin-ui'),
            extensions: [],
            devMode: options.devMode,
        });
    } else {
        return {
            path: process.env.ADMIN_UI_PATH || path.join(__dirname, './admin-ui/dist'),
        };
    }
}
