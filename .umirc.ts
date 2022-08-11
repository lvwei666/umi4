import { defineConfig } from '@umijs/max';

const path = require('path');

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  chainWebpack(config) {
    config.resolve.modules.merge([
      path.resolve(__dirname, 'src/components'),
      path.resolve(__dirname, 'src/pages'),
      path.resolve(__dirname, 'src'),
      'node_modules'
    ])
    // config.resolve.alias.set('utils/format', '@/utils/format')
  },
  // mfsu: false,
  // mfsu: {
  //   chainWebpack(config) {
  //     config.resolve.modules.merge([
  //       path.resolve(__dirname, 'src/components'),
  //       path.resolve(__dirname, 'src/pages'),
  //       path.resolve(__dirname, 'src'),
  //       'node_modules'
  //     ])
  //     // config.resolve.alias.set('utils/format', '@/utils/format')

  //     return config
  //   }
  // },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
    },
  ],
  npmClient: 'yarn',
});

