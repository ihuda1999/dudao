import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    base: process.env.BASE_URL || '/dudao/',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      // 代码分割策略
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
              return 'react-vendor';
            }
            if (id.includes('node_modules/lucide-react')) {
              return 'lucide';
            }
            if (id.includes('node_modules/')) {
              return 'vendor';
            }
          },
        },
      },
      // 启用压缩
      minify: 'terser',
      terserOptions: {
        compress: {
          // 移除 console.log
          drop_console: true,
          // 移除 debugger
          drop_debugger: true,
        },
        format: {
          // 移除注释
          comments: false,
        },
      },
      // 小于 4KB 的资源内联为 base64
      assetsInlineLimit: 4096,
      // CSS 代码分割
      cssCodeSplit: true,
      // 使用 ES 模块，支持 tree-shaking
      modulePreload: {
        polyfill: false,
      },
      // 生成 sourcemap 用于调试（生产可关闭）
      sourcemap: false,
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
