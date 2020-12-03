import type { ProjectConfig } from '/@/types/config';

import { MenuTypeEnum, MenuModeEnum, TriggerEnum } from '/@/enums/menuEnum';
import { CacheTypeEnum } from '/@/enums/cacheEnum';
import { ContentEnum, PermissionModeEnum, ThemeEnum, RouterTransitionEnum } from '/@/enums/appEnum';
import { primaryColor } from '../../build/config/lessModifyVars';

// ! 改动后需要清空浏览器缓存
const setting: ProjectConfig = {
    // 是否显示SettingButton
    showSettingButton: true,

    // 权限模式
    permissionMode: PermissionModeEnum.ROLE,

    // Permission-related cache is stored in sessionStorage or localStorage
    permissionCacheType: CacheTypeEnum.LOCAL,

    // color
    // TODO Theme color
    themeColor: primaryColor,

    // 网站灰色模式，用于可能悼念的日期开启
    grayMode: false,

    // 色弱模式
    colorWeak: false,

    // 是否取消菜单,顶部,多标签页显示, 用于可能内嵌在别的系统内
    fullContent: false,

    // 主题内容宽度
    contentMode: ContentEnum.FULL,

    // 是否显示logo
    showLogo: true,

    // Whether to show footer
    showFooter: true,

    // locale setting
    locale: {
        show: true,
        // Locale
        lang: 'zh_CN',
        // Default locale
        fallback: 'zh_CN',
        // available Locales
        availableLocales: ['zh_CN', 'en'],
    },

    // 头部配置
    headerSetting: {
        // header bg color
        bgColor: '#ffffff',
        // 固定头部
        fixed: true,
        // 是否显示顶部
        show: true,
        // 主题
        theme: ThemeEnum.LIGHT,
        // 开启锁屏功能
        useLockPage: true,
        // 显示刷新按钮
        showRedo: true,
        // 显示全屏按钮
        showFullScreen: true,
        // 显示文档按钮
        showDoc: false,
        // 显示消息中心按钮
        showNotice: false,
    },

    // Menu configuration
    menuSetting: {
        // sidebar menu bg color
        bgColor: '#273352',
        //  Whether to fix the left menu
        fixed: true,
        // 菜单折叠
        collapsed: false,
        // 折叠菜单时候是否显示菜单名
        collapsedShowTitle: false,
        // 是否可拖拽
        canDrag: false,
        // 是否显示
        show: true,
        // Whether to show dom
        hidden: true,
        // 是否显示搜索框
        showSearch: true,
        // 菜单宽度
        menuWidth: 210,
        // 菜单模式
        mode: MenuModeEnum.INLINE,
        // 菜单类型
        type: MenuTypeEnum.SIDEBAR,
        // 菜单主题
        theme: ThemeEnum.DARK,
        // 分割菜单
        split: false,
        // 顶部菜单布局
        topMenuAlign: 'center',
        // 折叠菜单时候隐藏搜索框
        collapsedShowSearch: false,
        // 折叠触发器的位置
        trigger: TriggerEnum.HEADER,
        // Turn on accordion mode, only show a menu
        accordion: true,
    },

    // 多标签
    multiTabsSetting: {
        // 开启
        show: true,
        // 开启快速操作
        canDrag: true,
        // 显示icon
        showQuick: true,
        // 标签页缓存最大数量
        max: 12,
    },

    // Transition Setting
    transitionSetting: {
        //  Whether to open the page switching animation
        // The disabled state will also disable pageLoadinng
        enable: true,

        // Route basic switching animation
        basicTransition: RouterTransitionEnum.FADE_SIDE,

        // 是否开启页面切换loading
        // Only open when enable=true
        openPageLoading: true,

        // 开启顶部进度条
        openNProgress: false,
    },
    // 是否开启KeepAlive缓存  开发时候最好关闭,不然每次都需要清除缓存
    openKeepAlive: true,

    // 自动锁屏时间，为0不锁屏。 单位分钟 默认1个小时
    lockTime: 0,

    // 显示面包屑
    showBreadCrumb: true,

    // 显示面包屑图标
    showBreadCrumbIcon: false,

    // Use error-handler-plugin
    useErrorHandle: false,

    // 是否开启回到顶部
    useOpenBackTop: true,

    //  是否可以嵌入iframe页面
    canEmbedIFramePage: true,

    // 切换界面的时候是否删除未关闭的message及notify
    closeMessageOnSwitch: true,

    // 切换界面的时候是否取消已经发送但是未响应的http请求。
    // 如果开启,想对单独接口覆盖。可以在单独接口设置
    removeAllHttpPending: true,
};

export default setting;
