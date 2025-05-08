<template>
    <div class="navigation-by">
        <div class="navigation-container">
            <template v-for="item in menus">
                <ul class="navigation-item">
                    <div class="navigation-item_icon">
                        <IconVue :icon="item.icon" />
                    </div>
                    <div class="navigation-item_dialog">
                        <div class="navigation-item_dialog-content">
                            <div class="navigation-item_dialog-title">{{ item.title }}</div>
                            <div class="navigation-item_dialog-description" v-if="item.description">
                                {{ item.description }}
                            </div>
                            <div class="navigation-item_dialog-email" v-if="item.email">
                                <a :href="`mailto:${item.email}`" target="_blank">{{ item.email }}</a>
                                <button class="copy" @click="onHandleCopy(item.email)">
                                    <img lazyload="auto" :src="IconCopy">
                                </button>
                            </div>
                            <div class="navigation-item_dialog-qrcode" v-else-if="item.qrcode">
                                <img lazyload="auto" :src="item.qrcode" alt="">
                            </div>
                            <div class="navigation-item_dialog-wechat" v-else-if="item.isWechatAndQq">
                                <div class="navigation-item_dialog-title">
                                    QQ互助交流群
                                </div>
                                <div class="navigation-item_dialog-description">
                                    仅玩家互助交流，<br />无客服及技术人员常驻
                                </div>
                                <div class="navigation-item_dialog-qrcode">
                                    <img lazyload="auto" :src="QqQrcode" alt="">
                                </div>
                                <div class="" style="margin-top: 24px;"></div>
                                <div class="navigation-item_dialog-title">
                                    微信群<span>（仅对付费用户开放）</span>
                                </div>
                                <div class="navigation-item_dialog-description">
                                    最新优惠活动、功能试用第一时间会在微信群发布，有技术人员在群内解答问题
                                </div>
                                <div class="navigation-item_dialog-join">
                                    <a href="https://www.linkease.com/about/" target="_blank"
                                        rel="noopener noreferrer">点击查看加入方式</a>
                                </div>
                            </div>
                            <div class="navigation-item_dialog-text" v-else-if="item.text">
                                {{ item.text }}
                            </div>
                            <div class="navigation-item_dialog-wechat" v-else-if="item.isFeedback">
                                <div class="navigation-item_dialog-title">
                                    意见反馈
                                </div>
                                <div class="navigation-item_dialog-description">
                                    有任何对我们产品的问题或建议，欢迎大家来反馈。
                                </div>
                                <div class="navigation-item_dialog-join">
                                    <a :href="item.feedbackTarget" target="_blank" rel="noopener noreferrer">立即反馈</a>
                                </div>
                            </div>
                            <div class="navigation-item_dialog-msg" v-show="msg != null">
                                {{ msg }}
                            </div>
                        </div>
                        <div class="navigation-item_dialog-transparent"></div>
                    </div>
                </ul>
            </template>
        </div>
        <div class="navigation-container navigation_top">
            <ul class="navigation-item">
                <div class="navigation-item_icon" @click="onHandleTop">
                    <IconVue icon="top" />
                </div>
            </ul>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import {
    IconCopy,
    WehctaQrcode08301330,
    WehctaQrcode13301800,
    WehctaQrcode18002030,
    QqQrcode,
} from "./assets"
import IconVue from "./components/icon/index.vue"
const msg = ref<any>(null)
const getKfData = (): MenuItem => {
    let description = ""
    let qrcode = null
    const d = new Date();
    const h = d.getHours()
    const m = d.getMinutes()
    // 0- 13:30
    if (h < 14 && m <= 30) {
        qrcode = WehctaQrcode08301330
        description = "在线时间：工作日00:00～13:30"
    } else if (h <= 18) {
        qrcode = WehctaQrcode13301800
        description = "在线时间：工作日13:30～18:00"
    } else {
        qrcode = WehctaQrcode18002030
        description = "在线时间：工作日18:00～00:00"
    }

    return {
        icon: "kf",
        title: "在线微信客服",
        description: description,
        qrcode: qrcode,
        email: "",
        text: ""
    }
}

const getWechatOrFeedback = (): MenuItem => {
    switch (location.hostname) {
        case "www.asusgo.com":
        case "asusgo.com":
            return {
                icon: "feedback",
                isFeedback: true,
                feedbackTarget: "https://www.linkease.com/rd/asusgo-report/",
            }
    }
    return {
        icon: "wechat",
        isWechatAndQq: true,
    }
}

const menus = computed((): MenuItem[] => [
    getKfData(),
    getWechatOrFeedback(),
    {
        icon: "email",
        title: "商务合作邮箱",
        qrcode: "",
        email: "admin@linkease.com",
        text: ""
    }
])
const onHandleToast = (v: string) => {
    msg.value = v
    setTimeout(() => {
        msg.value = null
    }, 2000)
}
const onHandleCopy = (v?: string) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(`${v}`).then(() => {
            onHandleToast("复制成功")
        }).catch((error) => {
            onHandleToast(error)
        })
    } else {
        onHandleToast("当前环境不支持复制")

    }
}
const onHandleTop = () => {
    document.body.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    })
}
</script>
<style lang="scss" scoped>
// 每个元素的大小
$ItemWidth : 48px;

.navigation-by {

    &,
    * {
        -webkit-box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        box-sizing: border-box;
        word-wrap: break-word;
    }
}

.navigation-by {
    position: fixed;
    z-index: 9999;
    right: 24px;
    bottom: 32px;
    transition: 0.3s;



    .navigation-container {
        background: linear-gradient(232deg, #046bb6, #031a6c 57%, #030b33);
        border-radius: 56px;
        padding: 6px 0;
        margin-bottom: 10px;

        &:hover {
            transform: scale (1.2);
            -webkit-transform: scale(1.2);
            -moz-transform: scale(1.2);
            transition: 0.3s;
        }

        ul.navigation-item {
            margin: 0;
            padding: 0;
            margin-bottom: 10px;
            position: relative;

            &:last-child {
                margin-bottom: 0;
            }

            .navigation-item_icon {
                width: $ItemWidth;
                cursor: pointer;
                text-align: center;

                img {
                    width: 36px;
                    height: 36px;
                    background: rgba(255, 255, 255, 0.3);
                    border-radius: 50%;
                    vertical-align: middle;
                }

                :deep(img.icon-top) {
                    width: 18px;
                    height: 21px;
                    background: none;
                }
            }

            &:hover {
                .navigation-item_dialog {
                    display: flex;
                    transition: 0.3s;
                }
            }

            .navigation-item_dialog {
                position: absolute;
                bottom: -48px;
                right: 46px;
                // background-color: #fff;
                // box-shadow: 0 0 32px 0 rgb(0 0 0 / 20%);
                // border-radius: 8px;
                display: none;

                // padding: 24px;
                // min-height: 116px;
                // width: 256px;
                transition: 0.3s;

                .navigation-item_dialog-transparent {
                    width: 24px;
                    position: relative;

                    &::after {
                        content: "";
                        position: absolute;
                        bottom: 46px;
                        right: 5px;
                        border-left: 20px solid #fff;
                        border-top: 20px solid transparent;
                        border-bottom: 20px solid transparent;
                    }
                }

                .navigation-item_dialog-content {
                    background-color: #fff;
                    -webkit-box-shadow: 0 0 32px 0 rgb(0 0 0 / 20%);
                    box-shadow: 0 0 32px 0 rgb(0 0 0 / 20%);
                    border-radius: 8px;
                    display: none;
                    padding: 24px;
                    min-height: 116px;
                    width: 250px;
                    display: block;
                    position: relative;
                    padding-top: 16px;

                    .navigation-item_dialog-msg {
                        width: 100px;
                        background-color: #00000091;
                        color: #fff;
                        text-align: center;
                        font-size: 16px;
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                        line-height: 26px;
                        padding: 4px;
                    }
                }

                .navigation-item_dialog-wechat {
                    width: 100%;
                }

                .navigation-item_dialog-title {
                    text-align: center;
                    width: 100%;
                    font-size: 18px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #0060FF;
                    line-height: 25px;
                    margin-bottom: 8px;

                    span {
                        display: block;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #0060FF;
                        line-height: 25px;
                    }
                }

                .navigation-item_dialog-description {
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: rgba(0, 0, 0, 0.8);
                    line-height: 20px;
                    width: 100%;
                    margin-bottom: 12px;
                    text-align: center;
                    white-space: pre-wrap;
                }

                .navigation-item_dialog-join {
                    width: 100%;
                    height: 56px;
                    background: #EBEBEB;
                    border-radius: 8px;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;

                    a {
                        width: 100%;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #000000;
                        line-height: 20px;
                        text-align: center;
                    }
                }

                .navigation-item_dialog-qrcode {
                    width: 100%;
                    text-align: center;

                    img {
                        display: block;
                        width: 162px;
                        height: 162px;
                        background: #EAEAEA;
                        border-radius: 16px;
                        margin: 0 auto;
                    }
                }

                .navigation-item_dialog-email {
                    width: 100%;
                    height: 56px;
                    background: #EBEBEB;
                    border-radius: 8px;
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;

                    a {
                        height: 20px;
                        font-size: 14px;
                        font-family: PingFangSC-Medium, PingFang SC;
                        font-weight: 500;
                        color: #000000;
                        line-height: 20px;
                    }

                    button.copy {
                        cursor: pointer;
                        margin-left: 13px;
                        background: none;
                        padding: 0;
                        border: none;
                        vertical-align: bottom;
                        display: flex;
                        align-items: center;
                    }
                }

                .navigation-item_dialog-text {
                    font-size: 16px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #000000;
                    line-height: 22px;
                    width: 100%;
                }
            }
        }
    }

    .navigation_top {
        padding: 0;
        margin-bottom: 0;


        ul.navigation-item {
            height: $ItemWidth;
            line-height: $ItemWidth;
        }
    }
}



@media screen and (max-width: 680px) {
    .navigation-by {
        display: none;
    }
}
</style>