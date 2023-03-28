<template>
    <div>
        <div flex="cross:center">
            <div>页面1：</div>
            <el-input-number controls-position="right"
                             v-model="num"
                             :min="0"
                             @change="changeNumFn"/>
        </div>
    </div>
</template>

<script>
import {useMyStore} from '@/store/index';

const testStore = useMyStore()

export default {
    name: 'PiniaPage1',
    data() {
        return {
            num: testStore.testStore
        }
    },
    methods: {
        changeNumFn(val) {
            testStore.changeNumFn(val)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>