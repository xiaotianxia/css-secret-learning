<template>
    <div class="button">
        <div class="demo demo1">
            <p>demo1:</p>
            <a href="javascript:;">确定</a>
            <div class="code">
                <pre>
a {
    padding: 6px 16px;
    border: 1px solid #446d88;
    background: #58a linear-gradient(#77a0bb, #58a);
    border-radius: 4px;
    box-shadow: 0 1px 5px gray;
    color: white;
    text-shadow: 0 -1px 1px #335166;
    font-size: 20px;
    line-height: 30px;
}
                </pre>
            </div>
        </div>
        <button type="button" @click="decrease">-</button>
        <button type="button" @click="increase">+</button>
        <div class="demo demo2" :style="{'font-size': fontSize + 'px'}">
            <p>demo2:</p>
            <a href="javascript:;">确定</a>
            <div class="code">
                <pre>
div {
    font-size: <span>{{fontSize}}px</span>;
}
a {
    padding: .3em .8em;
    border: 1px solid rgba(0,0,0,.1);
    background: #58a linear-gradient(#77a0bb, #58a);
    border-radius: .2em;
    box-shadow: 0 .05em .25em rgba(0,0,0,.5);
    color: white;
    text-shadow: 0 -.05em .05em rgba(0,0,0,.5);
    font-size: 125%;
    line-height: 1.5;
}
                </pre>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            fontSize: 16
        }
    },

    methods: {
        decrease () {
            this.fontSize --;
            console.log(this.style.fontSize)
        },
        increase () {
            this.fontSize ++;
        }
    }
}
</script>

<style scoped>
    .demo {
        margin: 10px;
        padding: 20px;
    }
    .demo a {
        display: inline-block;
        text-decoration: none;
    }
    .demo1 a {
        padding: 6px 16px;
        border: 1px solid #446d88;
        background: #58a linear-gradient(#77a0bb, #58a);
        border-radius: 4px;
        box-shadow: 0 1px 5px gray;
        color: white;
        text-shadow: 0 -1px 1px #335166;
        font-size: 20px;
        line-height: 30px;
    }
    .demo2 a {
        padding: .3em .8em;
        border: 1px solid rgba(0,0,0,.1);
        background: #58a linear-gradient(#77a0bb, #58a);
        border-radius: .2em;
        box-shadow: 0 .05em .25em rgba(0,0,0,.5);
        color: white;
        text-shadow: 0 -.05em .05em rgba(0,0,0,.5);
        font-size: 125%;
        line-height: 1.5;
    }
    .code {
        float: right;
    }
    pre {
        width: 400px;
    }
    pre span {
        color: red;
    }
</style>
