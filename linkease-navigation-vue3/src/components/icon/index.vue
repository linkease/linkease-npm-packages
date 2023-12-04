<template>
    <img lazyload="auto" :src="imageUrl" :class="`icon-${icon}`">
</template>
<script setup lang="ts">
import { computed } from 'vue';
import {
    IconQQ, IconCopy, IconEmail, IconWechat,
  QqQrcode, IconTop, IconServeUser, IconServeLive
    
} from "../..//assets"
const props = defineProps<{
    icon?: MenusIcon
}>()
const imageUrl = computed(() => {
    switch (props.icon) {
        case "kf":
           return IconServeUser
         break
        case "live":
          return IconServeLive
          break
        case "qq":
            return IconQQ
            break
        case "email":
            return IconEmail
            break
        case "wechat":
            return IconWechat
            break
        case "top":
            return IconTop
    }
})
</script>
<style lang="scss" scoped></style>