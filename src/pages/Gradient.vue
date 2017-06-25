<template>
    <div class="gradient-colorStop">
        <div class="result">
            <div class="display" :style="gradientStyle"></div>
        </div>
        <div class="control">
            <div>
                <input type="color" value="#000000" @change="onColorChange($event, 1)">
                <input type="range" @change="onRangeChange($event, 1)" min="0" max="100" step="1">
            </div>
            <div>
                <input type="color" value="#ff0000" @change="onColorChange($event, 2)">
                <input type="range" @change="onRangeChange($event, 2)" min="0" max="100" step="1">
            </div>
            <div v-for="i in contorlNum - 2">
                <input type="color" @change="onColorChange($event, i + 2)">
                <input type="range" @change="onRangeChange($event, i + 2)" min="0" max="100" step="1">
            </div>
        </div>
        <div class="edit">
            style： <br>
            <input type="radio" id="r1" name="type" value="linear-gradient" v-model="gradientType" @change="onGradientTypeChange">
            <label for="r1">linear-gradient</label>
            <input type="radio" id="r2" name="type" value="repeating-linear-gradient" v-model="gradientType" @change="onGradientTypeChange">
            <label for="r2">repeating-linear-gradient</label>
            <input type="radio" id="r3" name="type" value="radial-gradient" v-model="gradientType" @change="onGradientTypeChange">
            <label for="r3">radial-gradient</label>
            <br>
            <button class="add" @click="add">+</button>
            <button class="minus" @click="minus">-</button>
            <button class="toRight" @click="toRight">横向</button>
            <button class="toBottom" @click="toBottom">竖向</button>
            <button class="deg45" @click="deg45">45deg</button>
            <br>
            自定义角度:
            <input class="angle" type="text" @change="onDirectionChange">
            background-size:
            <input class="backgroundSize1" type="number" @change="onBackgroundSizeChange1">
            px,
            <input class="backgroundSize2" type="number" @change="onBackgroundSizeChange2">
            px
        </div>
        <div class="code">
            <pre>
&lt;div&gt;&lt;/div&gt;
{
    background-image: {{gradientStyle['background-image'].replace(/\,/g, ', \n\t\t\t\t &nbsp;&nbsp;&nbsp;&nbsp;')}}
    background-size: {{gradientStyle['background-size']}}
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
            gradientType: 'linear-gradient',
            angle: '',
            backgroundSize1: '100%',
            backgroundSize2: '100%',
            rangeVal1: '50',
            colorVal1: '#000',
            rangeVal2: '50',
            colorVal2: '#f00',
            gradientStyle: {
                'background-image': 'linear-gradient(#000 50%, #f00 0)',
                'background-size' : '100% 100%'
            }
        }
    },

    methods: {
        createVal () {
            let i = 1;
            while (i <= this.contorlNum - 2) {
                this['rangeVal' + (i + 2)] = this['rangeVal' + (i + 2)] || 50;
                this['colorVal' + (i + 2)] = this['colorVal' + (i + 2)] || '#000';
                i ++;
            }
        },

        add () {
            this.contorlNum ++;
            this.createVal();
            this.createStyle();
        },

        minus () {
            if(this.contorlNum <= 2) {
                return;
            }
            this.contorlNum --;
            this.createVal();
            this.createStyle();
        },

        toRight () {
            this.angle = 'to right, ';
            this.createVal();
            this.createStyle();
        },

        toBottom () {
            this.angle = 'to bottom, ';
            this.createVal();
            this.createStyle();
        },

        deg45 () {
            this.angle = '45deg, ';
            this.createVal();
            this.createStyle();
        },

        onDirectionChange (e) {
            this.angle = e.target.value + ', ';
            this.createVal();
            this.createStyle();
        },

        onBackgroundSizeChange1 (e) {
            this.backgroundSize1 = e.target.value + 'px';
            this.createVal();
            this.createStyle();
        },

        onBackgroundSizeChange2 (e) {
            this.backgroundSize2 = e.target.value + 'px';
            this.createVal();
            this.createStyle();
        },

        onRangeChange ($event, index) {
            this['rangeVal' + index] = $event.target.value;
            this.createVal();
            this.createStyle();
        },

        onColorChange ($event, index) {
            this['colorVal' + index] = $event.target.value;
            this.createVal();
            this.createStyle();
        },

        onGradientTypeChange () {
            console.log(this.gradientType)
            this.createStyle();
        },

        createStyle () {
            let i = 1,
                styleArr = [],
                styleStr = this.gradientType + '(' + this.angle;
            while (i <= this.contorlNum) {
                styleArr.push(this['colorVal' + i] + ' ' + this['rangeVal' + i] + '%')
                i ++;
            }
            styleStr = styleStr + styleArr.join(', ') + ')';
            this.gradientStyle =  {
                'background-image': styleStr,
                'background-size' : this.backgroundSize1 + ' ' + this.backgroundSize2
            };
            console.log(this.gradientStyle['background-image'])
        }
    },

    created () {
        this.createVal();
        this.createStyle();
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
        height: 350px;
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
    .edit {
        width: 693px;
        margin: 10px 0;
        border: 1px solid #ccc;
        padding: 10px;
    }
    .edit button,
    .edit input {
        font-size: 20px;
        cursor: pointer;
        padding: 0 5px;
    }
    .edit button {
        width: 80px;
        height: 28px;
        margin-bottom: 5px;
    }
    .edit input.angle,
    .edit input.backgroundSize1,
    .edit input.backgroundSize2 {
        width: 60px;
    }
    input[type=range] {
        width: 265px;
        cursor: pointer;
    }
    pre {
        margin: 0;
        width: 693px;
    }
</style>
