<template>
    <div class="semi-transparent-border">
        <div class="operate">
            <div class="operator">
                <h3>CSS属性：</h3>
                <p>background-clip:</p>
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
            </div>
            <div class="code">
                <h3>CSS代码：</h3>
                <pre>
.myDiv {
    padding: 25px;
    border: 10px dotted #000;
    background-color: yellow;
    background-clip: <span>{{cssValue}}</span>;
}
                </pre>
            </div>
        </div>
        <div class="display">
            <h3>结果：</h3>
            <div class="myDiv" :style="myStyle">
                这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。 这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。 这是文本。 这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。 这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。这是文本。
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            cssValue: 'border-box'
        }
    },

    computed: {
        myStyle () {
            return {
                'padding': '25px',
                'border': '20px dotted rgba(0, 0, 0, .3)',
                'background-color': 'yellow',
                'background-clip': this.cssValue
            }
        }
    }
}
</script>

<style scoped>
    .semi-transparent-border {
        width: 800px;
        margin: 0 auto;;
        overflow: hidden;
    }
    .operate,
    .display {
        float: left;
    }
    .operate ul {
        background-color: #ccc;
    }
    .operate ul li {
        list-style: none;
    }
    .display {
        width: 400px;
        margin-left: 20px;
    }
</style>
