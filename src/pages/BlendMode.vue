<template>
    <div class="blend-mode">
        <div class="demo demo1">
            <div class="code">
                <div class="control">
                    mix-blend-mode:
                    <select v-model="mixBlendMode">
                        <option value="normal">normal</option>
                        <option value="multiply">multiply</option>
                        <option value="screen">screen</option>
                        <option value="overlay">overlay</option>
                        <option value="darken">darken</option>
                        <option value="lighten">lighten</option>
                        <option value="color-dodge">color-dodge</option>
                        <option value="color-burn">color-burn</option>
                        <option value="hard-light">hard-light</option>
                        <option value="soft-light">soft-light</option>
                        <option value="difference">difference</option>
                        <option value="exclusion">exclusion</option>
                        <option value="hue">hue</option>
                        <option value="saturation">saturation</option>
                        <option value="color">color</option>
                        <option value="luminosity">luminosity</option>
                    </select>
                </div>
                <p>CSS代码：</p>
                <pre>
&lt;div href="#"&gt;
    &lt;img src="cat.jpg"&gt;
&lt;/div&gt;

div {
    background: hsl(335, 100%, 50%);
}
img {
    mix-blend-mode: <span>{{mixBlendMode}}</span>;
}
                </pre>
            </div>
            <div class="result">
                <p>结果：</p>
                <div>
                    <img :style="mixBlendModeStyle" src="../../static/image/2.jpg"/>
                </div>
            </div>
        </div>

        <div class="demo demo2">
            <div class="code">
                <div class="control">
                    background-blend-mode:
                    <select v-model="backgroundBlendMode">
                        <option value="normal">normal</option>
                        <option value="multiply">multiply</option>
                        <option value="screen">screen</option>
                        <option value="overlay">overlay</option>
                        <option value="darken">darken</option>
                        <option value="lighten">lighten</option>
                        <option value="color-dodge">color-dodge</option>
                        <option value="color-burn">color-burn</option>
                        <option value="hard-light">hard-light</option>
                        <option value="soft-light">soft-light</option>
                        <option value="difference">difference</option>
                        <option value="exclusion">exclusion</option>
                        <option value="hue">hue</option>
                        <option value="saturation">saturation</option>
                        <option value="color">color</option>
                        <option value="luminosity">luminosity</option>
                    </select>
                </div>
                <p>CSS代码：</p>
                <pre>
&lt;div&gt;&lt;/div&gt;

div {
    background: hsl(335, 100%, 50%) url('cat.jpg');
}
img {
    background-blend-mode: <span>{{backgroundBlendMode}}</span>;
}
                </pre>
            </div>
            <div class="result">
                <p>结果：</p>
                <div :style="backgroundBlendModeStyle"></div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data () {
        return {
            mixBlendMode: 'luminosity',
            backgroundBlendMode: 'luminosity'
        }
    },

    computed: {
        mixBlendModeStyle () {
            return {
                'mix-blend-mode': this.mixBlendMode
            }
        },

        backgroundBlendModeStyle () {
            return {
                'background-blend-mode': this.backgroundBlendMode
            }
        }
    }
}
</script>

<style scoped>
.demo {
    width: 850px;
    margin: 20px auto;
    overflow: hidden;
}
.demo .code,
.demo .result {
    float: left;
}
.demo .code li {
    list-style: none;
}
.demo .code label {
    background-color: #eee;
}
.demo .code pre {
    background-color: #eee;
    padding: 10px;
}
.demo .code pre span {
    color: red;
}
.demo .result {
    margin-left: 10px;
}
.demo .result div {
    width: 200px;
    height: 200px;
}
.demo1 .result div {
    background: hsl(335, 100%, 50%);
}
.demo1 .result div img {
    width: 100%;
}

.demo2 .result div {
    background-color: hsl(335, 100%, 50%);
    background-image: url('../../static/image/2.jpg');
    background-size: 100%;
}

</style>
