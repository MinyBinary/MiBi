import react from '@vitejs/plugin-react-swc';
import * as path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      pages: path.resolve(__dirname, 'src/pages'),
      shared: path.resolve(__dirname, 'src/shared'),
      features: path.resolve(__dirname, 'src/features'),
      widgets: path.resolve(__dirname, 'src/widgets'),
      entities: path.resolve(__dirname, 'src/entities'),
      configs: path.resolve(__dirname, 'src/configs'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
});
