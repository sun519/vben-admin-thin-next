/**
 * 顶部标签模块
 */

import type { AppRouteModule } from '/@/router/types';

import { PAGE_LAYOUT_COMPONENT } from '/@/router/constant';

const dashboard: AppRouteModule = {
    layout: {
        path: '/dashboard',
        name: 'Dashboard',
        component: PAGE_LAYOUT_COMPONENT,
        redirect: '/dashboard/welcome',
        meta: {
            icon: 'ant-design:home-outlined',
            title: '首页',
        },
    },

    routes: [
        {
            path: '/welcome',
            name: 'Welcome',
            component: () => import('/@/views/dashboard/welcome/index.vue'),
            meta: {
                title: 'routes.dashboard.welcome', // 国际化用法
                // title: '落地页',
                affix: true,
                icon: 'ant-design:home-outlined',
            },
        },
        {
            path: '/ceshi',
            name: 'Ceshi',
            component: () => import('/@/views/dashboard/ces/index.vue'),
            meta: {
                title: 'routes.dashboard.test',
                icon: 'ant-design:home-outlined',
            },
        },
        {
            path: '/ceshi2',
            name: 'Ceshi2',
            meta: {
                title: 'routes.dashboard.test2',
            },
            children: [
                {
                    path: 'basic',
                    name: 'Basic',
                    component: () => import('/@/views/dashboard/ces/index.vue'),
                    meta: {
                        title: 'routes.dashboard.test3',
                    },
                },
            ],
        },
    ],
};

export default dashboard;
