/**
 * 侧边导航栏
 */

import type { MenuModule } from '/@/router/types.d';
import { t } from '/@/hooks/web/useI18n';

const menu: MenuModule = {
    orderNo: 0,
    menu: {
        path: '/home',
        name: t('routes.dashboard.dashboard'),
        // name: '首页',
        children: [
            {
                path: 'welcome',
                name: t('routes.dashboard.welcome'),
            },
            {
                path: 'ceshi',
                name: t('routes.dashboard.test'),
            },
            {
                path: 'ceshi2',
                name: t('routes.dashboard.test2'),
                children: [
                    {
                        path: 'basic',
                        name: t('routes.dashboard.test3'),
                    },
                ],
            },
        ],
    },

    // orderNo: 0,
    // menu: {
    //     path: '/home/welcome',
    //     name: t('routes.dashboard.welcome'),
    // },
};
export default menu;
