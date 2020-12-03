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
            title: 'routes.dashboard.dashboard',
        },
    },

    routes: [
        {
            path: '/welcome',
            name: 'Welcome',
            component: () => import('/@/views/dashboard/welcome/index.vue'),
            meta: {
                title: 'routes.dashboard.welcome',
                affix: true,
                icon: 'ant-design:home-outlined',
            },
        },
        {
            path: '/ceshi',
            name: 'Ceshi',
            component: () => import('/@/views/dashboard/ces/index.vue'),
            meta: {
                title: '测试菜单',
                icon: 'ant-design:home-outlined',
            },
        },
        {
            path: '/ceshi2',
            name: 'Ceshi2',
            meta: {
                title: '测试菜单2',
            },
            children: [
                {
                    path: 'basic',
                    name: 'Basic',
                    component: () => import('/@/views/dashboard/ces/index.vue'),
                    meta: {
                        title: '三级菜单',
                    },
                },
            ],
        },
    ],
};

export default dashboard;
