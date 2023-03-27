<template>
    <div class="sliderCom">
        <div flex="cross:center">
            <div>当前值：{{initVal}}</div>
            <my-slider :if-preview="false"
                       :init-val="initVal"
                       @getNewValueFn="val=>initVal=val"
                       :marks="marks"
                       :step-color="stepColor"
                       class="sliderStyle"
                       :max="5"/>
        </div>
    </div>
</template>

<script>
import MySlider from '@/components/element/MySlider.vue';

export default {
    name: 'SliderCom',
    components: {
        MySlider
    },
    data() {
        return {
            initVal: 0,
            marks: {
                0: '0',
                1: '1',
                2: '2',
                3: '3',
                4: '4',
                5: '5'
            },
            stepColor: ['#409eff', '#409eff', '#6383f6', '#7568ee', '#8147e5', '#870fdc']
        }
    }
}
</script>

<style lang="scss" scoped>
.sliderCom {
    padding: 16px;
    .sliderStyle {
        margin-left: 24px;
        width: 300px;
    }
}
</style>