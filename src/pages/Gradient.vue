<template>
    <div class="gradient-colorStop">
        <div class="result">
            <div class="display" :style="gradientStyle"></div>
        </div>
        <div class="control">
            <div v-for="i in contorlNum">
                <input type="color" @change="onColorChange($event, i)">
                <input type="range" @change="onRangeChange($event, i)" min="0" max="100" step="1">
                <button @click="add" v-if="i == 1">+</button>
            </div>
        </div>
        <div class="code">
            <pre>
&lt;div&gt;&lt;/div&gt;
{
    background-image: {{gradientStyle['background-image']}}
}
            </pre>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            contorlNum: 2,
            gradientStyle: {
                'background-image': 'linear-gradient(#000 50%, #000 0)'
            }
        }
    },

    methods: {
        createVal () {
            let i = 1;
            while (i <= this.contorlNum) {
                this['rangeVal' + i] = this['rangeVal' + i] || 50;
                this['colorVal' + i] = this['colorVal' + i] || '#000';
                i ++;
            }
        },

        add () {
            this.contorlNum ++;
            this.createVal();
            this.createStyle();
        },

        onRangeChange ($event, index) {
            this['rangeVal' + index] = $event.target.value;
            this.createStyle();
        },

        onColorChange ($event, index) {
            this['colorVal' + index] = $event.target.value;
            this.createStyle();
        },

        createStyle () {
            let i = 1,
                styleArr = [],
                styleStr = 'linear-gradient(';
            while (i <= this.contorlNum) {
                styleArr.push(this['colorVal' + i] + ' ' + this['rangeVal' + i] + '%')
                i ++;
            }
            styleStr = styleStr + styleArr.join(', ') + ')';
            this.gradientStyle =  {
                'background-image': styleStr
            };
            console.log(styleStr)
        }
    },

    created () {
        this.createVal();
    }
}
</script>

<style scoped>
    .gradient-colorStop {
        width: 800px;
        margin: 20px auto;;
    }
    .result,
    .control {
        display: inline-block;
        width: 350px;
        height: 300px;
        border: 1px solid #ccc;
        margin-right: 10px;
        box-sizing: border-box;
    }
    .result {
        position: relative;
    }
    .result .display {
        position: absolute;
        width: 95%;
        height: 95%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #ccc;
    }
    .control {
        overflow: auto;
        padding: 10px;
    }
    .control div {
        margin-top: 10px;
    }
    .control button {
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 20px;
        cursor: pointer;
    }
    .code pre {
        background-color: #ccc;
        width: 695px;
        padding: 10px;
        white-space: pre-wrap;
    }
    input[type=range] {
        width: 250px;
        cursor: pointer;
    }
</style>
