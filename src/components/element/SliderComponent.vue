<template>
    <el-slider v-model="sliderVal"
               :step="1"
               :style="{'--step-color': stepColor[sliderVal]}"
               :show-tooltip="false"
               :max="max"
               class="sliderComponent"
               :disabled="ifPreview"
               show-stops
               :marks="marks"/>
</template>

<script>
export default {
    name: 'SliderComponent',
    props: {
        /**
         * 初始值
         */
        initVal: {
            type: Number,
            default: 0
        },
        /**
         * 是否禁用
         */
        ifPreview: {
            type: Boolean,
            default: false
        },
        /**
         * 间断的颜色数组，长度为marks的key数量
         */
        stepColor: {
            type: Array,
            default() {
                return []
            }
        },
        /**
         * 最大值
         */
        max: {
            type: Number,
            default: 100
        },
        /**
         * 标记，key的类型必须为number且取值在闭区间[0, max]内，每个标记可以单独设置样式
         */
        marks: null
    },
    emits: [
        /**
         * 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）
         * 回调参数：val：绑定值
         */
        'getNewValueFn'
    ],
    data() {
        return {
            /**
             * 绑定值
             */
            sliderVal: this.initVal
        }
    },
    watch: {
        /**
         * 绑定值改变时触发getNewValueFn
         * @param val
         */
        sliderVal(val) {
            this.$emit('getNewValueFn', val)
        },
        /**
         * 初始值改变时，同步改变绑定值
         * @param val
         */
        initVal(val) {
            this.sliderVal = val
        }
    }
}
</script>

<style lang="scss" scoped>
.sliderComponent {
    ::v-deep .el-slider__stop:first-child, ::v-deep .el-slider__stop:last-child {
        display: none;
    }
    
    ::v-deep .el-slider__marks-text {
        font-size: 12px;
        color: #cfcfcf;
    }
    
    ::v-deep .el-slider__bar {
        background-color: var(--step-color);
    }
    
    ::v-deep .el-slider__button {
        border-color: var(--step-color);
    }
}
</style>