import { defineConfig } from '@umijs/max';

export default defineConfig({
  outputPath: '../../dist/microApp1/',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  qiankun: {
    slave: {},
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
      layout: false,
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      layout: false,
    },
  ],
  npmClient: 'pnpm',
});
