<template>
    <div class="sliderCom">
        <div flex="cross:center">
            <div>当前值：{{initVal}}</div>
            <slider-component :if-preview="false"
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
import SliderComponent from '@/components/element/SliderComponent.vue';

export default {
    name: 'SliderCom',
    components: {
        SliderComponent
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
    .sliderStyle {
        margin-left: 24px;
        width: 300px;
    }
}
</style>