<template>
    <div class="filter">
        <p>filter test</p>
        <ul>
            <li>
                <div class="container">
                    <h3>blur(模糊)</h3>
                    <div class="img">
                        <img :style="blurStyle" src="../../static/image/tiger.jpg">
                    </div>
                    <div class="control">
                        <input type="range" :value="blur" v-model="blur" min="0" max="100" step="1">
                        <input type="number" :value="blur" v-model="blur" min="0" max="100" step="1">px
                    </div>
                    <div class="code">
                        <pre>
filter: blur(<span>{{blur}}</span>px);
                        </pre>
                    </div>
                </div>
            </li>

            <li>
                <div class="container">
                    <h3>brightness(亮度)</h3>
                    <div class="img">
                        <img :style="brightnessStyle" src="../../static/image/tiger.jpg">
                    </div>
                    <div class="control">
                        <input type="range" :value="brightness" v-model="brightness" min="0" max="100" step="1">
                        <input type="number" :value="brightness" v-model="brightness" min="0" max="100" step="1">
                    </div>
                    <div class="code">
                        <pre>
filter: brightness(<span>{{brightness}}</span>);
                        </pre>
                    </div>
                </div>
            </li>

            <li>
                <div class="container">
                    <h3>contrast(对比度)</h3>
                    <div class="img">
                        <img :style="contrastStyle" src="../../static/image/tiger.jpg">
                    </div>
                    <div class="control">
                        <input type="range" :value="contrast" v-model="contrast" min="0" max="100" step="1">
                        <input type="number" :value="contrast" v-model="contrast" min="0" max="100" step="1">%
                    </div>
                    <div class="code">
                        <pre>
filter: contrast(<span>{{contrast}}</span>%);
                        </pre>
                    </div>
                </div>
            </li>

            <li>
                <div class="container">
                    <h3>grayscale(灰度)</h3>
                    <div class="img">
                        <img :style="grayscaleStyle" src="../../static/image/tiger.jpg">
                    </div>
                    <div class="control">
                        <input type="range" :value="grayscale" v-model="grayscale" min="0" max="100" step="1">
                        <input type="number" :value="grayscale" v-model="grayscale" min="0" max="100" step="1">%
                    </div>
                    <div class="code">
                        <pre>
filter: grayscale(<span>{{grayscale}}</span>%);
                        </pre>
                    </div>
                </div>
            </li>

            <li>
                <div class="container">
                    <h3>hue-rotate(色相旋转)</h3>
                    <div class="img">
                        <img :style="huerotateStyle" src="../../static/image/tiger.jpg">
                    </div>
                    <div class="control">
                        <input type="range" :value="huerotate" v-model="huerotate" min="0" max="360" step="1">
                        <input type="number" :value="huerotate" v-model="huerotate" min="0" max="360" step="1">deg
                    </div>
                    <div class="code">
                        <pre>
filter: hue-rotate(<span>{{huerotate}}</span>deg);
                        </pre>
                    </div>
                </div>
            </li>

            <li>
                <div class="container">
                    <h3>invert(反转)</h3>
                    <div class="img">
                        <img :style="invertStyle" src="../../static/image/tiger.jpg">
                    </div>
                    <div class="control">
                        <input type="range" :value="invert" v-model="invert" min="0" max="100" step="1">
                        <input type="number" :value="invert" v-model="invert" min="0" max="100" step="1">%
                    </div>
                    <div class="code">
                        <pre>
filter: invert(<span>{{invert}}</span>%);
                        </pre>
                    </div>
                </div>
            </li>

            <li>
                <div class="container">
                    <h3>opacity(透明度)</h3>
                    <div class="img">
                        <img :style="opacityStyle" src="../../static/image/tiger.jpg">
                    </div>
                    <div class="control">
                        <input type="range" :value="opacity" v-model="opacity" min="0" max="100" step="1">
                        <input type="number" :value="opacity" v-model="opacity" min="0" max="100" step="1">%
                    </div>
                    <div class="code">
                        <pre>
filter: opacity(<span>{{opacity}}</span>%);
                        </pre>
                    </div>
                </div>
            </li>

            <li>
                <div class="container">
                    <h3>saturate(饱和度)</h3>
                    <div class="img">
                        <img :style="saturateStyle" src="../../static/image/tiger.jpg">
                    </div>
                    <div class="control">
                        <input type="range" :value="saturate" v-model="saturate" min="0" max="300" step="1">
                        <input type="number" :value="saturate" v-model="saturate" min="0" max="300" step="1">%
                    </div>
                    <div class="code">
                        <pre>
filter: saturate(<span>{{saturate}}</span>%);
                        </pre>
                    </div>
                </div>
            </li>

            <li>
                <div class="container">
                    <h3>sepia(深褐色)</h3>
                    <div class="img">
                        <img :style="sepiaStyle" src="../../static/image/tiger.jpg">
                    </div>
                    <div class="control">
                        <input type="range" :value="sepia" v-model="sepia" min="0" max="100" step="1">
                        <input type="number" :value="sepia" v-model="sepia" min="0" max="100" step="1">%
                    </div>
                    <div class="code">
                        <pre>
filter: sepia(<span>{{sepia}}</span>%);
                        </pre>
                    </div>
                </div>
            </li>

            <li>
                <div class="container">
                    <h3>drop-shadow(阴影)</h3>
                    <div class="img">
                        <img :style="dropshadowStyle" src="../../static/image/tiger.jpg">
                    </div>
                    <div class="control">
                        <input type="range" :value="dropshadow" v-model="dropshadow" min="-100" max="100" step="1">
                        <input type="number" :value="dropshadow" v-model="dropshadow" min="-100" max="100" step="1">
                    </div>
                    <div class="code">
                        <pre>
filter: drop-shadow(<span>{{dropshadow}}px
        {{dropshadow}}px 5px #000</span>);
                        </pre>
                    </div>
                </div>
            </li>

            <li class="mixed">
                <div class="container">
                    <h3>混合操作</h3>
                    <div class="control">
                        <input type="range" :value="blurMixed" v-model="blurMixed" min="-100" max="100" step="1">
                        <input type="number" :value="blurMixed" v-model="blurMixed" min="-100" max="100" step="1">
                    </div>
                    <div class="control">
                        <input type="range" :value="brightnessMixed" v-model="brightnessMixed" min="-100" max="100" step="1">
                        <input type="number" :value="brightnessMixed" v-model="brightnessMixed" min="-100" max="100" step="1">
                    </div>
                    <div class="control">
                        <input type="range" :value="contrastMixed" v-model="contrastMixed" min="-100" max="100" step="1">
                        <input type="number" :value="contrastMixed" v-model="contrastMixed" min="-100" max="100" step="1">
                    </div>
                    <div class="control">
                        <input type="range" :value="grayscaleMixed" v-model="grayscaleMixed" min="-100" max="100" step="1">
                        <input type="number" :value="grayscaleMixed" v-model="grayscaleMixed" min="-100" max="100" step="1">
                    </div>
                    <div class="control">
                        <input type="range" :value="huerotateMixed" v-model="huerotateMixed" min="-100" max="100" step="1">
                        <input type="number" :value="huerotateMixed" v-model="huerotateMixed" min="-100" max="100" step="1">
                    </div>
                    <div class="control">
                        <input type="range" :value="invertMixed" v-model="invertMixed" min="-100" max="100" step="1">
                        <input type="number" :value="invertMixed" v-model="invertMixed" min="-100" max="100" step="1">
                    </div>
                    <div class="control">
                        <input type="range" :value="opacityMixed" v-model="opacityMixed" min="-100" max="100" step="1">
                        <input type="number" :value="opacityMixed" v-model="opacityMixed" min="-100" max="100" step="1">
                    </div>
                    <div class="control">
                        <input type="range" :value="saturateMixed" v-model="saturateMixed" min="-100" max="100" step="1">
                        <input type="number" :value="saturateMixed" v-model="saturateMixed" min="-100" max="100" step="1">
                    </div>
                    <div class="control">
                        <input type="range" :value="sepiaMixed" v-model="sepiaMixed" min="-100" max="100" step="1">
                        <input type="number" :value="sepiaMixed" v-model="sepiaMixed" min="-100" max="100" step="1">
                    </div>
                    <div class="control">
                        <input type="range" :value="dropshadowMixed" v-model="dropshadowMixed" min="-100" max="100" step="1">
                        <input type="number" :value="dropshadowMixed" v-model="dropshadowMixed" min="-100" max="100" step="1">
                    </div>
                </div>
            </li>

            <li class="mixed">
                <div class="container">
                    <h3>混合效果</h3>
                    <div class="img">
                        <img :style="mixedStyle" src="../../static/image/tiger.jpg">
                    </div>
                    <div class="code">

                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            blur: 50,
            brightness: 50,
            contrast: 50,
            grayscale: 50,
            huerotate: 180,
            invert: 50,
            opacity: 50,
            saturate: 50,
            sepia: 50,
            dropshadow: 0,

            blurMixed: 0,
            brightnessMixed: 100,
            contrastMixed: 0,
            grayscaleMixed: 0,
            huerotateMixed: 180,
            invertMixed: 0,
            opacityMixed: 100,
            saturateMixed: 0,
            sepiaMixed: 0,
            dropshadowMixed: 0,
        }
    },

    computed: {
        blurStyle () {
            return {
                'filter': 'blur(' + this.blur + 'px)'
            }
        },

        brightnessStyle () {
            return {
                'filter': 'brightness(' + this.brightness + ')'
            }
        },

        contrastStyle () {
            return {
                'filter': 'contrast(' + this.contrast + '%)'
            }
        },

        grayscaleStyle () {
            return {
                'filter': 'grayscale(' + this.grayscale + '%)'
            }
        },

        huerotateStyle () {
            return {
                'filter': 'hue-rotate(' + this.huerotate + 'deg)'
            }
        },

        invertStyle () {
            return {
                'filter': 'invert(' + this.invert + '%)'
            }
        },

        opacityStyle () {
            return {
                'filter': 'opacity(' + this.opacity + '%)'
            }
        },

        saturateStyle () {
            return {
                'filter': 'saturate(' + this.saturate + '%)'
            }
        },

        sepiaStyle () {
            return {
                'filter': 'sepia(' + this.sepia + '%)'
            }
        },

        dropshadowStyle () {
            return {
                'filter': 'drop-shadow(' + this.dropshadow + 'px ' +this.dropshadow + 'px 5px #000)'
            }
        },

        mixedStyle () {
            return {
                'filter': 'blur(' + this.blurMixed + 'px)'
                        + 'brightness(' + this.brightnessMixed + ') '
                        + 'contrast(' + this.contrastMixed + '%) '
                        + 'grayscale(' + this.grayscaleMixed + '%) '
                        + 'hue-rotate(' + this.huerotateMixed + 'deg) '
                        + 'invert(' + this.invertMixed + '%) '
                        + 'opacity(' + this.opacityMixed + '%) '
                        + 'saturate(' + this.saturateMixed + '%) '
                        + 'sepia(' + this.sepiaMixed + '%) '
                        + 'drop-shadow(' + this.dropshadowMixed + 'px ' +this.dropshadowMixed + 'px 5px #000)'
            }
        }
    }
}
</script>

<style scoped>
    .filter {

    }
    .filter ul {
        overflow: hidden;
    }
    .filter ul li {
        float: left;
        width: 240px;
        height: 265px;
        overflow: hidden;
        background-color: #eee;
        border: 4px solid #dedede;
        margin: 5px;
    }
    .filter ul li  h3 {
        height: 28px;
        line-height: 28px;
        text-align: center;
    }
    .filter ul li  .img {

    }
    .filter ul li  .img img {
        width: 100%;
    }
    .filter ul li .control {
        text-align: center;
    }
    .filter ul li .control input {
        vertical-align: middle;
    }
    .filter ul li .control input[type=range] {
        width: 170px;
    }
    .filter ul li.mixed .control input[type=range] {
        width: 150px;
    }
    .filter ul li .control input[type=number] {
        width: 30px;
    }
    .filter ul li .code {
        background-color: #ccc;
    }
    .filter ul li .code pre {
        padding: 0 5px;
        text-align: center;
    }
    .filter ul li .code pre span {
        color: red;
    }
</style>
