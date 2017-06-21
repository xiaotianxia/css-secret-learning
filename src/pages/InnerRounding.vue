<template>
    <div class="inner-rounding">
        <div class="demo demo1">
            <p>两个元素方案</p>
            <div class="code">
                <p>CSS代码：</p>
                <pre>
&lt;div class="something-meaningful">
    &lt;div&gt;
        I have a nice subtle inner rounding,
        don't I look pretty?
    &lt;/div&gt;
&lt;/div&gt;

.something-meaningful {
    background: #655;
    padding: .8em;
}
.something-meaningful > div {
    background: tan;
    border-radius: .8em;
    padding: 1em;
}
                </pre>
            </div>
            <div class="result">
                <p>结果：</p>
                <div class="something-meaningful">
                    <div>
                        I have a nice subtle inner rounding, don't I look pretty?
                    </div>
                </div>
            </div>
        </div>

        <div class="demo demo2">
            <p>outline方案</p>
            <div class="code">
                <p>CSS代码：</p>
                <div class="operate">
                    <input type="checkbox" id="c1" :value="cssChecked" v-model="cssChecked">
                    <label for="c1">box-shadow: 0 0 0 .4em #655;</label>
                </div>
                <pre>
&lt;div class="something-meaningful">
    I have a nice subtle inner rounding,
    don't I look pretty?
&lt;/div&gt;

.something-meaningful {
    background: tan;
    border-radius: .8em;
    padding: 1em;
    outline: .6em solid #655;
    <span v-if="cssChecked">box-shadow: 0 0 0 .4em #655;</span>
}
                </pre>
            </div>
            <div class="result">
                <p>结果：</p>
                <div class="something-meaningful" :class="{'box-shadow': cssChecked}">
                    I have a nice subtle inner rounding, don't I look pretty?
                </div>
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
}
.demo .code pre span {
    color: red;
}
.demo .result {
    margin-left: 10px;
}
.demo .result .something-meaningful {
    width: 180px;
}
.demo1 .result .something-meaningful {
    background: #655;
    padding: .8em;
}
.demo1 .result .something-meaningful > div {
    background: tan;
    border-radius: .8em;
    padding: 1em;
}

.demo2 .result .something-meaningful  {
    background: tan;
    border-radius: .8em;
    padding: 1em;
    outline: .6em solid #655;
}
.demo2 .result .something-meaningful.box-shadow {
    box-shadow: 0 0 0 .4em #655;
}
</style>
