<template>
    <div class="blend-mode">
        <div class="demo demo1">
            <p>应用于元素</p>
            <div class="code">
                <div class="control">
                    mix-blend-mode:
                    <blend-selector @onBlendChange="onChange1"></blend-selector>
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
                    <img :style="mixBlendModeStyle" src="https://bobo-public.nosdn.127.net/bobo_1500975197877_88134582.jpg"/>
                </div>
            </div>
        </div>

        <div class="demo demo2">
            <div class="code">
                <p>应用于背景</p>
                <div class="control">
                    background-blend-mode:
                    <blend-selector @onBlendChange="onChange2"></blend-selector>
                </div
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

        <div class="demo demo3">
            <p>用于文本</p>
            <div class="code">
                <div class="control">
                    mix-blend-mode:
                    <blend-selector @onBlendChange="onChange3"></blend-selector>
                </div>
                <p>CSS代码：</p>
                <pre>
&lt;div&gt;
    &lt;p&gt;测试Test&lt;/p&gt;
&lt;/div&gt;

div {
    background-image: url('texture.jpg');
}
p {
    mix-blend-mode: <span>{{textureMixBlendMode}}</span>;
}
                </pre>
            </div>
            <div class="result">
                <p>结果：</p>
                <div>
                    <p :style="textureMixBlendModeStyle">测试Test</p>
                </div>
            </div>
        </div>

        <div class="demo demo4">
            <div class="code">
                <p>做遮罩</p>
                <div class="control">
                    mix-blend-mode:
                    <blend-selector @onBlendChange="onChange4"></blend-selector>
                </div>
                <p>CSS代码：</p>
                <pre>
&lt;div&gt;&lt;/div&gt;

div {
    background-image: linear-gradient(to right, #000 0%,#fff 100%),
                      url('tiger.png');
    background-blend-mode: <span>{{maskBlendMode}}</span>, normal;
}
                </pre>
            </div>
            <div class="result">
                <p>结果：</p>
                <div :style="maskBlendModeStyle"></div>
            </div>
        </div>
    </div>
</template>

<script>
import BlendSelector from '@/components/BlendSelector.vue';

export default {
    data () {
        return {
            mixBlendMode: '',
            backgroundBlendMode: '',
            textureMixBlendMode: '',
            maskBlendMode: ''
        }
    },

    components: {
        BlendSelector
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
        },

        textureMixBlendModeStyle () {
            return {
                'mix-blend-mode': this.textureMixBlendMode
            }
        },

        maskBlendModeStyle () {
            return {
                'background-blend-mode': this.maskBlendMode + ', normal'
            }
        }
    },

    methods: {
        onChange1 (e) {
            this.mixBlendMode = e.selection;
        },

        onChange2 (e) {
            this.backgroundBlendMode = e.selection;
        },

        onChange3 (e) {
            this.textureMixBlendMode = e.selection;
        },

        onChange4 (e) {
            this.maskBlendMode = e.selection;
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
    width:550px;
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
    background-image: url('https://bobo-public.nosdn.127.net/bobo_1500975197877_88134582.jpg');
    background-size: 100%;
}

.demo3 .result div {
    width: 200px;
    height: 200px;
    text-align: center;
    background-image: url('https://bobo-public.nosdn.127.net/bobo_1500975284470_79981354.jpg');
    background-size: 100%;
}
.demo3 .result div p {
    height: 100%;
    line-height: 200px;
    font-size: 40px;
    font-weight: bold;
    color: #000;
}

.demo4 .result div {
    background-image: linear-gradient(to right, #000000 0%,#ffffff 100%), url('https://bobo-public.nosdn.127.net/bobo_1500975345389_58942604.jpg');
    background-size: 100%, 150%;
}
</style>
