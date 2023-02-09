import NavigationComponent from "./App.vue";
import { MenuType } from "./types"

export const IconQQ = "data:image/png;base64,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"
export const IconWechat = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAk1BMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9+NLwPAAAAMHRSTlNNAMkHSTkxK/tUi6JPQyUhGxjXxMDuxqeYkH11bWlkXFj267m1sfDehHhgPOXQnfLWus9NAAACHElEQVRIx6WW15aCMBBAZxORakEQUIrYy65u/v/rNjiBYAjL8XhfwGMuk5lU+OpA56YxGQGMJoY5p93/VYXODHjBmNF/FToGDWPaq1BzBFpGJtUrPgp6ydcpU/iXaVcZwwBjVfmGQb6losQYjANqHvbFPQT7eLXR5SMVH2rSaMsEi1XX8WuF1tUtAtbmvO7UmgrFBOR6Yq9YD9UxUamDOBbrsNeEgaZaKRoKbqdqXKH4vlkyHZaaD+XKDF8PTM+P96rMuGJgsSzWg1Jr4wuoEqQbRu0ZzPFlx3rJoQ0XcFAy1k+QrNa2VEzAVFZikhzP2OpwksqOEBIljWTABCpcbAng3THj22+jnEjFvkCDCzj0R1ZRjYHDmFXVNWyULXkS4txGoVEcAEj4s+TPu6qQI7zgYj0LyKtJENo8WMOSCFJoxxEtrJ34cCXK9AUuCiL9G+vnXCuBh+kb8OTcr8RFTML8wp0Si2yi8ug1TimsiQt2RMgNh3KOSvnbpywOlz2JHJdH8XDCUECSHmNJGnCJ0nryg7fQGtZdKskzFbnEwNUaC2lEm3qJUUDSAQODAG1tF2XX2IVEEtnAGctNCZeM1R71bWzbsVRCsSnJrc8jzCK5dwks0aXHs+vXI6mInZAUcuvDMLlzFavoljrrrISaTXbN+S87yzCIso0P4SuHxTDT94+k9w++z4/X4UP886vC8IXk7WvPx5er969wf8AcgyqjLRO/AAAAAElFTkSuQmCC"
export const IconEmail = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAb1BMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+hBK93AAAAJHRSTlNNANS3q88ESDkxJwnkXZtDLSEbGPLLvdrDdfz3POl5b6eIZ6DfONvqAAABgUlEQVRIx6XW2XaDIBAG4ImURTRV45qtTdO8/zOWQ0AydWPa/3jhwud2YAB2k4hDqQoJIAtVHsT0+m+SVQpQVJWtkiyFmaTZIhEaFqLFPKklLEbWc0TDavSEiBQ2kgpMxAU2cxGIpBCR9JVoiIoOpIbI1J4IGUukcERDdPSTZPbgs03W82abZYb4v9U8ttK5vwb+IY/N5M/HGFLZvWMsqQxRNKJ2IIBGDDgQiQElkRigwObebBIONgoKsNmz5LwKrsM72BQgPWGsX0bNwJgjBgTCuv40D1rGRgKIGJRP0ZkzhohEhA1Jg8EpHxgiMny+Bdx02b55AVdzgj/R+PkqkM4Am/56tu2b3J3gXSAKSk86PGD6Hh22nSel7zB3B7jd5tJ++w4jwObDAQT5uIVhacBOjYTHjGRlh5gn+NXwLbgn1TiQj7g1fjNcL3y52LfJVr5cuQhF6fa2mpsVkNFL318KLL2M0ycL+pREn/jo0yt5EqcvFegLEvKy59+LK/oS7gfvfEqLzqMg9AAAAABJRU5ErkJggg=="

export const ObjectQQ = {
    icon: IconQQ,
    title: "QQ交流群",
    qrcode: "https://assets.koolcenter.com/linkease/linkease_qq_qrcode.png",
    email: "",
    text: ""
}
export const ObjectWechat = {
    icon: IconWechat,
    title: "微信扫码，立即咨询",
    qrcode: "https://assets.koolcenter.com/linkease/linkease_wechat_qrcode.png",
    email: "",
    text: ""
}
export const ObjectWechatConsult = {
    icon: IconWechat,
    title: "付费用户微信交流群",
    qrcode: "",
    email: "",
    text: "打开易有云APP，在“我的”-“联系我们”中查看二维码。"
}
export const ObjectEmail = {
    icon: IconEmail,
    title: "商务合作邮箱",
    qrcode: "",
    email: "admin@linkease.com",
    text: ""
}
export {
    NavigationComponent,
    MenuType
}
export default {
    NavigationComponent,
    ObjectWechatConsult,
    ObjectEmail,
    ObjectWechat,
    ObjectQQ,
    IconQQ,
    IconWechat,
    IconEmail,
}