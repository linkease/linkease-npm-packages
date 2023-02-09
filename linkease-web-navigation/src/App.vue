<template>
    <div class="navigation-container" v-if="menus && menus.length > 0">
        <MenuItem v-for="(item, i) in menus" :key="i" :menu="item">
        </MenuItem>
    </div>
</template>
<script  >
import MenuItem from "./NavigationMenu.vue";
export default {
    name: "NavigationMenus",
    props: {
        menus: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    components: {
        MenuItem
    },
}
</script>
<style lang="scss" scoped>
.navigation-container {
    background: linear-gradient(232deg, #046bb6, #031a6c 57%, #030b33);
    border-radius: 56px;
    position: fixed;
    z-index: 9999;
    right: 20px;
    top: 50%;
    padding: 10px 0;
}

* {
    -webkit-box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    word-wrap: break-word;
}
</style>
