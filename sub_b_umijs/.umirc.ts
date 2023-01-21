import { defineConfig } from "umi";

export default defineConfig({ 
  npmClient: 'pnpm',
  plugins: [
    '@umijs/plugins/dist/locale',
    '@umijs/plugins/dist/model',
    '@umijs/plugins/dist/request',
    '@umijs/plugins/dist/qiankun',
  ],
  qiankun: {
    slave: {},
  },
});
