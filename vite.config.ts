import { PluginOption, defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as fs from 'fs';

function integratedDevServer(mode: string): PluginOption {
  return {
    name: 'integrate-dev-server',
    enforce: 'post',
    apply: 'serve',
    buildStart() {
      const pathFile = '../backend-kalla-employee-management/public/hot';
      const hostDevServer = 'http://localhost:3000';
      if (mode !== 'production') {
        fs.writeFileSync(pathFile, hostDevServer);
      } else {
        if (fs.existsSync(pathFile)) {
          fs.unlinkSync(pathFile);
        }
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), integratedDevServer('dev')],
  server: { port: 3000, origin: 'http://localhost:3000' },
});
