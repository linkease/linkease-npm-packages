
export declare interface MenuType {
    icon?: string,
    title?: string,
    qrcode?: string,
    email?: string,
    text?: string,
}

export declare type IconQQ = string
export declare type IconWechat = string
export declare type IconEmail = string
export declare type MenuObjectQQ = MenuType
export declare type MenuObjectWechat = MenuType
export declare type MenuObjectWechatConsult = MenuType
export declare type MenuObjectEmail = MenuType
export declare type NavigationMenus = any
export declare type createMenuObject = (icon: string, title: string, qrcode: string, email: string, text: string) => MenuType
