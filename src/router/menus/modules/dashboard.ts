import type { MenuModule } from '/@/router/types.d';

const menu: MenuModule = {
    orderNo: 0,
    menu: {
        path: '/dashboard',
        name: 'routes.dashboard.dashboard',
        // name: '首页',
        children: [
            {
                path: 'welcome',
                name: 'routes.dashboard.welcome',
            },
            {
                path: 'ceshi',
                name: 'routes.dashboard.test',
            },
            {
                path: 'ceshi2',
                name: 'routes.dashboard.test2',
                children: [
                    {
                        path: 'basic',
                        name: 'routes.dashboard.test3',
                    },
                ],
            },
        ],
    },
};
export default menu;
