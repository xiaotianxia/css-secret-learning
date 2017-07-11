<template>
    <div class="selector">
        <div class="display">
            <div class="operate">
                <input type="text" name="" :value="count" v-model="count">
                <button type="button" @click="onAdd">+</button>
                <button type="button" @click="onMinus">-</button>
            </div>
            <div class="pannel">
                <ul class="selector" v-for="item in config" :style="styleStr">
                    <li v-for="(key, slice) in item.count" :key="key">{{key}}</li>
                </ul>
            </div>
        </div>
        <textarea name="name" rows="8" cols="80"
                  placeholder="输入css选择器..."
                  v-model="inputStr"
                  @blur="onEdit"
                  @input="onEdit">
        </textarea>
        <div class="style"></div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            count: 4,
            config: [
                {count: 1}
            ],
            inputStr: ':nth-child(1)',
            styleStr: ''
        }
    },

    methods: {
        onAdd () {
            this.config.push({count: parseInt(this.count)});
            this.count ++;
        },

        onMinus () {
            this.config.pop();
            this.count --;
        },

        onEdit () {
            let styleWrapper = document.querySelector('.style');
            styleWrapper.innerHTML = '';
            this.styleStr = 'ul.selector ' + this.inputStr.replace(',', ', ul.selector ') + '{background-color: #c72b81;}';
            let styleEl = document.createElement('style');
            styleEl.type = 'text/css';
            styleEl.innerHTML = this.styleStr;
            styleWrapper.appendChild(styleEl);
        }
    },

    mounted () {
        this.onEdit();
    }
}
</script>

<style scoped>
    .pannel ul,
    .pannel li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .pannel li {
        display: inline-block;
        margin: 10px;
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        background-color: #ead8d8;
        border-radius: 5px;
        color: #fff;
    }
    .code {
        width: 500px;
        height: 200px;
        border: 1px solid #ccc;
    }
</style>
