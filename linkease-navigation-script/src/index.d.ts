

declare namespace LinkeaseNavigationNamespace {
    interface MenuType {
        icon?: "qq" | "wechat" | "email" | string,
        title?: string,
        qrcode?: string,
        email?: string,
        text?: string,
    }

    class LinkeaseNavigationClass {
        menus: MenuType[]
        node: HTMLDivElement
        allButtonOnClick: () => void
        createNavigatioToast(value?: string): HTMLDivElement
        createNavigationMenu(menu: MenuType): string
        createNavigationMenus(menus: MenuType[]): string
        createNavigation: () => void
        getWindowLinkeaseNavigationMenus: () => MenuType[]
    }
}
declare interface LinkeaseNavigationProps {
    menus: LinkeaseNavigationNamespace.MenuType[]
}
declare interface Window {
    NewLinkeaseNavigation: (obj: LinkeaseNavigationProps) => LinkeaseNavigationNamespace.LinkeaseNavigationClass
    getWindowLinkeaseNavigationMenus?: () => LinkeaseNavigationNamespace.MenuType[]
}
