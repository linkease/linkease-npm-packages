<template>
    <ul class="navigation-item">
        <div class="navigation-item_icon">
            <img :src="menu.icon">
        </div>
        <div class="navigation-item_dialog">
            <div class="navigation-item_dialog-content">
                <div class="navigation-item_dialog-title">{{ menu.title }}</div>
                <div class="navigation-item_dialog-qrcode" v-if="menu.qrcode">
                    <img :src="menu.qrcode" alt="">
                </div>
                <div class="navigation-item_dialog-email" v-if="menu.email">
                    <a :href="`mailto:${menu.email}`" target="_blank">{{ menu.email }}</a>
                    <button class="copy" @click="onHandleCopy(menu.email)">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADqADAAQAAAABAAAADgAAAAC98Dn6AAAAnUlEQVQoFWNgQABxIPMLEP8ngD8A5VMZgQQycAZyuJEFsLA9gGLRLECCH4hVoApApoEwOngFFHgMFQTpyQQRl4BYDiqIi/oHlNAC4pswBSCNIE3eQHwcJoiFfgEUkwViFI0gdZ+B+D2IgQOAAgwFMKHwSOCMasQeWB+Bwh9B8QgCJkDMDmZhJ5ADcS9QiTRIGYhBKGGDEoAkSDEMAADqwyVFULQPngAAAABJRU5ErkJggg==">
                    </button>
                </div>
                <div class="navigation-item_dialog-text" v-if="menu.text">
                    {{ menu.text }}
                </div>
                <div class="navigation-item_dialog-msg" v-if="msgText">
                    {{ msgText }}
                </div>
            </div>
            <div class="navigation-item_dialog-transparent"></div>
        </div>
    </ul>
</template>
<script >
export default {
    name: "NavigationMenu",
    props: {
        menu: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            msgText: null,
        }
    },
    methods: {
        async onHandleCopy(text) {
            if (text == null) {
                return
            }
            try {
                await navigator.clipboard.writeText(`${text}`)
                this.msgText = "复制成功"
            } catch (error) {
                this.msgText = `${error}`
            }
            setTimeout(() => {
                this.msgText = ""
            }, 2000);
        }
    }
}
</script>
<style lang="scss" scoped>
ul.navigation-item {
    margin-bottom: 24px;
    position: relative;
    padding: 0 10px;

    &:last-child {
        margin-bottom: 0;
    }

    .navigation-item_icon {
        width: 100%;
        cursor: pointer;

        img {
            width: 50px;
            height: 50px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
        }
    }

    &:hover {
        .navigation-item_dialog {
            display: flex;
        }
    }

    .navigation-item_dialog {
        position: absolute;
        top: -33px;
        right: 70px;
        // background-color: #fff;
        // box-shadow: 0 0 32px 0 rgb(0 0 0 / 20%);
        // border-radius: 8px;
        display: none;
        // padding: 24px;
        // min-height: 116px;
        // width: 256px;

        .navigation-item_dialog-content {
            background-color: #fff;
            -webkit-box-shadow: 0 0 32px 0 rgb(0 0 0 / 20%);
            box-shadow: 0 0 32px 0 rgb(0 0 0 / 20%);
            border-radius: 8px;
            display: none;
            padding: 24px;
            min-height: 116px;
            width: 256px;
            display: block;
            position: relative;

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

        .navigation-item_dialog-transparent {
            width: 24px;
            position: relative;

            &::after {
                content: "";
                position: absolute;
                top: 46px;
                right: 0;
                border-left: 24px solid #fff;
                border-top: 24px solid transparent;
                border-bottom: 24px solid transparent;
            }
        }


        .navigation-item_dialog-title {
            width: 100%;
            font-size: 22px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #0060FF;
            line-height: 30px;
            margin-bottom: 16px;
        }

        .navigation-item_dialog-qrcode {
            width: 200px;
            height: 200px;
            background: #D8D8D8;
            border: 1px solid #979797;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .navigation-item_dialog-email {
            width: 100%;

            a {
                font-size: 16px;
                font-family: PingFangSC-Medium, PingFang SC;
                color: #000;
                line-height: 22px;
            }

            button.copy {
                cursor: pointer;
                margin-left: 1rem;
                background: none;
                padding: 0;
                border: none;
                vertical-align: bottom;
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
</style>