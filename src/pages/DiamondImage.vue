<template>
    <div class="diamond-image">
        <div class="demo demo1">
            <p>两个元素方案</p>
            <div class="code">
                <p>CSS代码：</p>
                <pre>
&lt;div class="picture"&gt;
    &lt;img src="adam-catlace.jpg" alt="..." /&gt;
&lt;/div&gt;

.picture {
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    overflow: hidden;
    <span>transform: rotate(45deg);</span>
}
.picture > img {
    width: 100%;
    <span>transform: rotate(-45deg) <b>scale(1.42)</b>;</span>
}
                </pre>
            </div>
            <div class="result">
                <p>结果：</p>
                <div class="picture">
                    <img src="../../static/image/2.jpg" alt="..." />
                </div>
            </div>
        </div>

        <div class="demo demo2">
            <p>clip-path方案</p>
            <div class="code">
                <p>CSS代码：</p>
                <pre>
&lt;img src="adam-catlace.jpg" alt="..." /&gt;

img {
    <span>clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);</span>
}
                </pre>
                clip-path工具: <a href="http://bennettfeely.com/clippy/" target="_blank">http://bennettfeely.com/clippy/</a>
            </div>
            <div class="result">
                <p>结果：</p>
                <img src="../../static/image/2.jpg" alt="..." /><br>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            cssChecked: false
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
    width: 480px;
}
.demo .code pre span {
    color: red;
}
.demo .result {
    margin-left: 10px;
}
.demo1 .result .picture {
    width: 200px;
    height: 200px;
    transform: rotate(45deg);
    border: 1px solid #ccc;
    overflow: hidden;
}
.demo1 .result .picture > img {
    width: 100%;
    transform: rotate(-45deg) scale(1.42);
}

.demo2 .result > img {
    width: 284px;
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}
</style>
