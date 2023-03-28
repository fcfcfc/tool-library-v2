<template>
    <div id="app" flex="dir:top box:first">
        <el-menu :default-active="$route.path"
                 class="el-menu-demo"
                 mode="horizontal"
                 :router="true">
            <el-submenu index="/element">
                <template slot="title">element-ui</template>
                <el-menu-item index="/element/slider">Slider</el-menu-item>
            </el-submenu>
            <el-submenu index="/testPinia">
                <template slot="title">测试pinia</template>
                <el-menu-item index="/testPinia/piniaPage1">页面1</el-menu-item>
                <el-menu-item index="/testPinia/piniaPage2">页面2</el-menu-item>
            </el-submenu>
        </el-menu>
        <router-view class="content"/>
    </div>
</template>

<style lang="scss">
html, body, #app {
    height: 100%;
    .content {
        padding: 16px;
    }
}
</style>
