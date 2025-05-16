import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
import path from 'path';

console.log('adcas', __dirname);

const env = dotenv.config({ path: path.resolve(__dirname, '.env')}).parsed || {}

const buildEnv = {
  STORE_HASH: process.env.STORE_HASH
}

export default defineConfig({
  plugins: [react()],
  define: {
    env: JSON.stringify(buildEnv)
  }
});
