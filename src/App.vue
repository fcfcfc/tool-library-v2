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
        </el-menu>
        <router-view/>
    </div>
</template>

<style lang="scss">
html, body, #app {
    height: 100%;
}
</style>
