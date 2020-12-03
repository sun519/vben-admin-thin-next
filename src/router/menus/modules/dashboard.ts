import type { MenuModule } from '/@/router/types.d';

const menu: MenuModule = {
    orderNo: 0,
    menu: {
        path: '/dashboard',
        // name: 'routes.dashboard.welcome',
        name: '首页',
        children: [
            {
                path: 'welcome',
                name: '落地页',
            },
            {
                path: 'ceshi',
                name: '测试菜单',
            },
            {
                path: 'ceshi2',
                name: '测试菜单2',
                children: [
                    {
                        path: 'basic',
                        name: '三级菜单',
                    },
                ],
            },
        ],
    },
};
export default menu;
