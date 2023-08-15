<template>
    <Transition name="dialog">
        <div class="dialog" v-if="enable">
            <div class="dialog-bg"></div>
            <div class="dialog-container">
                <div class="dialog-container-main">
                    <div class="diglog-container_title">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 0.515625C5.65734 0.515625 0.515625 5.65734 0.515625 12C0.515625 18.3427 5.65734 23.4844 12 23.4844C18.3427 23.4844 23.4844 18.3427 23.4844 12C23.4844 5.65734 18.3427 0.515625 12 0.515625ZM16.6434 13.2035L12.5677 17.2795C12.5494 17.303 12.5299 17.3257 12.5084 17.347C12.368 17.4874 12.184 17.5568 12 17.5559C11.8162 17.557 11.632 17.4874 11.4916 17.347C11.4701 17.3255 11.4504 17.303 11.4323 17.2795L7.35656 13.2037C7.07812 12.9253 7.07812 12.4739 7.35656 12.1955C7.635 11.917 8.08641 11.917 8.36508 12.1955L11.287 15.1172V7.15711C11.287 6.76336 11.6062 6.44414 12 6.44414C12.3938 6.44414 12.713 6.76336 12.713 7.15711V15.1172L15.6352 12.1952C15.9136 11.9168 16.365 11.9168 16.6437 12.1952C16.9221 12.4737 16.9221 12.9251 16.6434 13.2035Z"
                                fill="#02B31E" />
                        </svg>

                        固件下载中...
                    </div>
                    <div class="dialog-container_desc">如下载失败请尝试备用地址：</div>
                    <div class="dialog-container_targets">
                        <template v-for="item, i in mirrors.mirrors" :key="i">
                            <a target="_blank" rel="noopener noreferrer" v-if="item" :href="getTargetUrl(item)">
                                备用地址{{ i + 1 }}
                            </a>
                        </template>
                        <a target="_blank" rel="noopener noreferrer" :href="getTargetUrl(mirrors.origin)"
                            v-if="mirrors.origin">原始地址</a>
                    </div>
                    <div class="line"></div>
                    <div class="dialog-container_subtitle">微信扫码关注iStoreOS以获取最新资讯</div>
                    <div class="dialog-container_qrcode">
                        <img src="https://assets.koolcenter.com/istoreos/istoreos_mp.jpg">
                    </div>
                    <template v-if="groupons && groupons.length > 0">
                        <div class="dialog-container_subtitle">最新团购</div>
                        <div class="dialog-container_groupons">
                            <a :href="item.link" target="_blank" rel="noopener noreferrer" v-for="item in grouponsValue"
                                :title="item.title">
                                <img :src="item.cover">
                                <div class="group_tag" v-if="item.ongoing">
                                    进行中
                                </div>
                                <div class="group_title">{{ item.title }}</div>
                            </a>
                        </div>
                    </template>
                </div>
                <div class="dialog-container-footer">
                    <button @click="onHandleClose" title="关闭">关闭</button>
                </div>
            </div>
        </div>
    </Transition>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
const enable = ref(false)
const target = ref("")
interface GrouponType {
    index?: number
    cover?: string
    link?: string
    ongoing?: boolean
    title?: string
}
interface MirrorType {
    origin?: string
    mirrors?: string[]
}
const groupons = ref<GrouponType[]>([])
const grouponsValue = computed(() => groupons.value.sort((a, b) => {
    return (a.index || 0) - (b.index || 0)
}))
const mirrors = ref<MirrorType>({})
const getData = async () => {
    try {
        const resp = await Promise.all([
            fetch("https://assets.koolcenter.com/koolcenter/groupon/groupon.json", {
                "method": "GET",
            }),
            fetch("https://fw0.koolcenter.com/mirrors", {
                "method": "GET",
            }),
        ])
        if (resp[0]) {
            const res = resp[0]
            const value = await res.json()
            if (value) {
                groupons.value = value
            }

        }
        if (resp[1]) {
            const res = resp[1]
            const value = await res.json()
            if (value) {
                mirrors.value = value
            }


        }
    } catch (error) {
        console.log(error);
    }
}
const getTargetUrl = (url: string) => {
    return `${location.protocol}//${url}` + (target.value || "")
}
const onHandleClose = () => {
    enable.value = false
}
const onHandleOpen = async () => {
    try {
        await getData()
    } catch (error) {
        console.log(error);
    } finally {
        enable.value = true
    }
}
window.$openDownloadDialog = (v: string) => {
    target.value = v
    onHandleOpen()
}

</script>
<style lang="scss" scoped>
.dialog {

    &,
    * {
        -webkit-box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        box-sizing: border-box;
        word-wrap: break-word;
    }
}

.dialog {
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .dialog-bg {
        position: absolute;
        z-index: 1;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }

    .dialog-container {
        display: block;
        z-index: 2;
        width: 100%;
        max-width: 572px;
        position: relative;
        background: rgba(255, 255, 255, 1);


        .dialog-container-main {
            width: 100%;
            padding: 32px;
            display: block;

            >.diglog-container_title {
                width: 100%;
                text-align: center;
                font-family: PingFang SC;
                font-size: 24px;
                font-weight: 500;
                line-height: 24px;
                letter-spacing: 0em;
                color: rgba(0, 0, 0, 0.8);
                margin-top: 18px;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;

                svg {
                    width: 24px;
                    height: 24px;
                    margin-right: 8px;
                }
            }

            >.dialog-container_desc {
                width: 100%;
                text-align: center;
                font-family: PingFang SC;
                font-size: 14px;
                font-weight: 400;
                line-height: 24px;
                letter-spacing: 0em;
                color: rgba(0, 0, 0, 1);
                margin-top: 24px;

            }

            >.line {
                width: 100%;
                height: 1px;
                background-color: rgba(217, 217, 217, 1);
                display: block;
                margin-top: 24px;
                margin-bottom: 16px;
            }

            >.dialog-container_targets {
                width: 100%;
                margin-top: 8px;
                display: flex;
                flex-wrap: wrap;
                grid-gap: 0.5rem;
                justify-content: center;
                align-items: center;

                a {
                    color: rgb(255, 164, 27);
                    border: 1px solid rgb(255, 164, 27);
                    height: 28px;
                    border-radius: 4px;
                    line-height: 28px;
                    background-color: #fff;
                    cursor: pointer;
                    padding: 0 1rem;
                    display: inline-block;
                    font-family: PingFang SC;
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 0em;
                    text-align: center;


                }
            }

            >.dialog-container_subtitle {
                width: 100%;
                text-align: center;
                font-family: PingFang SC;
                font-size: 14px;
                font-weight: 500;
                line-height: 24px;
                letter-spacing: 0em;
                color: rgba(0, 0, 0, 1);
            }

            .dialog-container_qrcode {
                width: 100%;
                margin-top: 8px;

                img {
                    width: 200px;
                    height: 200px;
                    margin: 0 auto;
                    display: block;
                    margin-bottom: 10px;
                    border-radius: 16px;
                    background: rgba(217, 217, 217, 1);

                }
            }

            .dialog-container_groupons {
                width: 100%;
                display: flex;
                flex-wrap: nowrap;
                overflow: auto;
                margin-top: 8px;

                a {
                    display: block;
                    flex: 0 0 100%;
                    max-width: calc(33.333% - 10px);
                    min-width: 168px;
                    margin-right: 10px;
                    border-radius: 4px;
                    overflow: hidden;
                    position: relative;

                    img {
                        display: block;
                        width: 100%;
                        height: 72px;
                        background: rgba(217, 217, 217, 1);
                    }

                    .group_tag {
                        position: absolute;
                        top: 0;
                        right: 1rem;
                        background-color: #fe0137;
                        font-size: 12px;
                        color: #fff;
                        padding: 0 8px;
                        border-bottom-left-radius: 4px;
                        border-bottom-right-radius: 4px;

                    }

                    .group_title {
                        width: 100%;
                        background-color: #f9f9f9;
                        color: #000;
                        font-size: 12px;
                        word-break: break-all;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        padding: 8px;
                        height: 52px;
                        line-height: 20px;
                    }
                }
            }






        }

        .dialog-container-footer {
            border-top: 1px solid rgba(217, 217, 217, 1);
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            padding: 1rem;

            >button {
                display: block;
                width: 65px;
                height: 32px;
                padding: 4px 15px 4px 15px;
                border-radius: 2px;
                background: rgba(255, 154, 27, 1);
                border: 1px solid rgba(255, 154, 27, 1);
                box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.043);
                font-family: PingFang SC;
                font-size: 14px;
                font-weight: 500;
                line-height: 22px;
                letter-spacing: 0em;
                text-align: center;
                color: rgba(255, 255, 255, 1);
                outline: none;
                cursor: pointer;
                opacity: 1;

                &:hover {
                    transition: 0.3s;
                    border: none;
                    opacity: 0.9;
                }

            }
        }

    }
}
</style>