<template>
    <div class="multiple-borders">
        <p>box-shadow方案:</p>
        <div class="demo demo1">
            <div class="display"></div>
            <div class="code">
                <pre>
background: yellowgreen;
box-shadow: 0 0 0 10px #655,
            0 0 0 15px deeppink;
                </pre>
            </div>
        </div>

        <p>outline方案:</p>
        <div class="demo demo2">
            <div class="display"></div>
            <div class="code">
                <pre>
background: yellowgreen;
border: 10px solid #655;
outline: 5px solid deeppink;
                </pre>
            </div>
        </div>

        <p>outline其他用途(outline-offset):</p>
        <div class="demo demo3">
            <div class="display"></div>
            <div class="code">
                <pre>
width: 150px;
height: 80px;
border-radius: 10px;
background: yellowgreen;
outline: 1px dashed #000;
outline-offset: -10px;
                </pre>
            </div>
        </div>

        <p>outline的弊端:</p>
        <p>边框不会贴合 border-radius 属性产生的圆角</p>
        <p>这种行为被CSS工作组认为是一个bug，因此未来可能会变</p>
        <div class="demo demo4">
            <div class="display"></div>
            <div class="code">
                <pre>
width: 150px;
height: 80px;
border-radius: 10px;
background: yellowgreen;
outline: 5px solid #000;
                </pre>
            </div>
        </div>

        <p>更多层边框:</p>
        <div class="demo demo5">
            <div class="display"></div>
            <div class="code">
                <pre>
background: yellowgreen;
box-shadow: 0 0 0 10px #655,
            0 0 0 15px #ff7373,
            0 0 0 20px #bfaf30,
            0 0 0 25px #200772,
            0 0 0 30px deeppink;
                </pre>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .demo {
        overflow: hidden;
    }
    .demo .display {
        float: left;
        width: 100px;
        height: 60px;
        margin: 50px;
    }
    .demo .code {
        float: left;
        margin: 30px;
    }
    .demo1 .display {
        background: yellowgreen;
        box-shadow: 0 0 0 10px #655,
                    0 0 0 15px deeppink;
    }
    .demo2 .display {
        background: yellowgreen;
        border: 10px solid #655;
        outline: 5px solid deeppink;
    }
    .demo3 .display {
        width: 150px;
        height: 80px;
        border-radius: 10px;
        background: yellowgreen;
        outline: 1px dashed #000;
        outline-offset: -10px;
    }
    .demo4 .display {
        width: 150px;
        height: 80px;
        border-radius: 10px;
        background: yellowgreen;
        outline: 5px solid #000;
    }
    .demo5 .display {
        background: yellowgreen;
        box-shadow: 0 0 0 10px #655,
                    0 0 0 15px #ff7373,
                    0 0 0 20px #bfaf30,
                    0 0 0 25px #200772,
                    0 0 0 30px deeppink;
    }
</style>
