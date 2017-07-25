<template>
    <div class="bg-position">
        <div class="demo demo1">
            <div class="code">
                <p>CSS代码：</p>
                <pre>
background: url('pic.svg') no-repeat #58a;
background-position: <span>right 20px bottom 10px</span>;
                </pre>
            </div>
            <div class="result">
                <p>结果：</p>
                <div>
                    text
                </div>
            </div>
        </div>

        <div class="demo demo2">
            <p>回退方案</p>
            <div class="code">
                <p>CSS代码：</p>
                <pre>
background: url('pic.svg') no-repeat <span>bottom right</span> #58a;
background-position: <span>right 20px bottom 10px</span>;
                </pre>
            </div>
            <div class="result">
                <p>结果：</p>
                <div>
                    text
                </div>
            </div>
        </div>

        <div class="demo demo3">
            <p>background-origin方案</p>
            <div class="code">
                <p>CSS代码：</p>
                <ul>
                    <li>
                        <input type="radio" id="r1" value="border-box" name="cssValue" v-model="cssValue">
                        <label for="r1">border-box</label>
                    </li>
                    <li>
                        <input type="radio" id="r2" value="padding-box" name="cssValue" v-model="cssValue">
                        <label for="r2">padding-box</label>
                    </li>
                    <li>
                        <input type="radio" id="r3" value="content-box" name="cssValue" v-model="cssValue">
                        <label for="r3">content-box</label>
                    </li>
                </ul>
                <pre>
padding: 10px;
background: url('pic.svg') no-repeat #58a
            <span>bottom right</span>; /* 或 100% 100% */
background-origin: <span>{{cssValue}};</span>
                </pre>
            </div>
            <div class="result">
                <p>结果：</p>
                <div :style="myStyle">
                    text
                </div>
            </div>
        </div>

        <div class="demo demo4">
            <p>calc方案</p>
            <div class="code">
                <p>CSS代码：</p>
                <pre>
background: url('pic.svg') no-repeat #58a bottom right;
background-position: <span>calc(100% - 20px) calc(100% - 10px)</span>;
                </pre>
            </div>
            <div class="result">
                <p>结果：</p>
                <div>
                    text
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            cssValue: 'padding-box'
        }
    },

    computed: {
        myStyle () {
            return {
                'background-origin': this.cssValue
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
    .demo .result {
        margin-left: 10px;
        color: #fff;
    }
    .demo .result div {
        width: 180px;
        height: 120px;
    }
    .demo1 .result div {
        width: 180px;
        height: 120px;
        background: url('../../static/img/pic.svg') no-repeat #58a;
        background-position: right 20px bottom 10px;
    }

    .demo2 .result div {
        background: url('../../static/img/pic.svg') no-repeat bottom right #58a;
        background-position: right 20px bottom 10px;
    }

    .demo3 .result div {
        width: 160px;
        height: 100px;
        padding: 10px;
        background: url('../../static/img/pic.svg') no-repeat #58a bottom right;
        border: 10px solid #ccc;
    }

    .demo4 .result div {
        background: url('../../static/img/pic.svg') no-repeat #58a bottom right;
        background-position: calc(100% - 20px) calc(100% - 10px);
    }
</style>
