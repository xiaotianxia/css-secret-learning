<template>
    <div class="inner-rounding">
        <div class="demo demo1">
            <p>两次变形方案</p>
            <div class="code">
                <p>CSS代码：</p>
                <div class="operate">
                    <input type="checkbox" id="c1" :value="skewChecked" v-model="skewChecked">
                    <label for="c1">skew</label>
                </div>
                <pre>
&lt;a href="#yolo" class="button">
     &lt;div&gt;Click me&lt;/div&gt;
&lt;/a&gt;
.button {
    transform: skewX(45deg);
}
.button > div {
    <span v-if="skewChecked">transform: skewX(-45deg);</span>
}
                </pre>
            </div>
            <div class="result">
                <p>结果：</p>
                <a href="javascript:;" class="button">
                    <div :class="{skew: skewChecked}">点我！</div>
                </a>
            </div>
        </div>

        <div class="demo demo2">
            <p>伪元素方案</p>
            <div class="code">
                <p>CSS代码：</p>
                <div class="operate">
                    <input type="checkbox" id="c2" :value="backgroundChecked" v-model="backgroundChecked">
                    <label for="c2">check</label>
                </div>
                <pre>
.button {
    position: relative;
    <span v-if="backgroundChecked">background: transparent;</span>
    <span v-if="!backgroundChecked">background: rgba(210, 29, 29, 0.41);</span>
}
.button::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: #58a;
    <span>transform: skew(45deg);</span>
}
                </pre>
            </div>
            <div class="result">
                <p>结果：</p>
                <a href="javascript:;" class="button" :class="{check: backgroundChecked}">
                    <div>点我！</div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            skewChecked: false,
            backgroundChecked: false
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
    width: 330px;
    background-color: #eee;
    padding: 10px;
}
.demo .code pre span {
    color: red;
}
.demo .result {
    margin-left: 30px;
}
.demo .result .button  {
    display: inline-block;
    padding: .5em 1em;
    border: 0;
    margin: .5em;
    background: #58a;
    color: white;
    text-decoration: none;
    font: bold 200%/1 sans-serif;
}
.demo1 .result .button  {
    transform: skewX(45deg);
}
.demo1 .result .button  > div.skew {
    transform: skewX(-45deg);
}

.demo2 .result .button {
    position: relative;
    background: transparent;
}
.demo2 .result .button.check {
    background: rgba(210, 29, 29, 0.41);
}
.demo2 .result .button:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: #58a;
    transform: skew(45deg);
}

</style>
