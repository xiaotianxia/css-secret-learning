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
                        <input type="number" :value="blur" v-model="blur" min="0" max="100" step="1">
                        <span>px</span>
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
                        <span>%</span>
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
                        <input type="number" :value="contrast" v-model="contrast" min="0" max="100" step="1">
                        <span>%</span>
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
                        <input type="number" :value="grayscale" v-model="grayscale" min="0" max="100" step="1">
                        <span>%</span>
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
                        <input type="number" :value="huerotate" v-model="huerotate" min="0" max="360" step="1">
                        <span>deg</span>
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
                        <input type="number" :value="invert" v-model="invert" min="0" max="100" step="1">
                        <span>%</span>
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
                        <input type="number" :value="opacity" v-model="opacity" min="0" max="100" step="1">
                        <span>%</span>
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
                        <input type="number" :value="saturate" v-model="saturate" min="0" max="300" step="1">
                        <span>%</span>
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
                        <input type="number" :value="sepia" v-model="sepia" min="0" max="100" step="1">
                        <span>%</span>
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
                        <span>px</span>
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
                        <label>
                            <input type="checkbox" :value="hasBlur" v-model="hasBlur">
                            <span>blur</span>
                        </label>
                        <input type="range" :value="blurMixed" v-model="blurMixed" min="0" max="100" step="1">
                    </div>
                    <div class="control">
                        <label>
                            <input type="checkbox" :value="hasBrightness" v-model="hasBrightness">
                            <span>brightness</span>
                        </label>
                        <input type="range" :value="brightnessMixed" v-model="brightnessMixed" min="0.1" max="10" step="0.1">
                    </div>
                    <div class="control">
                        <label>
                            <input type="checkbox" :value="hasContrast" v-model="hasContrast">
                            <span>contrast</span>
                        </label>
                        <input type="range" :value="contrastMixed" v-model="contrastMixed" min="0.1" max="10" step="0.1">
                    </div>
                    <div class="control">
                        <label>
                            <input type="checkbox" :value="hasGrayscale" v-model="hasGrayscale">
                            <span>grayscale</span>
                        </label>
                        <input type="range" :value="grayscaleMixed" v-model="grayscaleMixed" min="0" max="1" step="0.1">
                    </div>
                    <div class="control">
                        <label>
                            <input type="checkbox" :value="hashueRotate" v-model="hashueRotate">
                            <span>hue-rotate</span>
                        </label>
                        <input type="range" :value="huerotateMixed" v-model="huerotateMixed" min="0" max="360" step="1">
                    </div>
                    <div class="control">
                        <label>
                            <input type="checkbox" :value="hasInvert" v-model="hasInvert">
                            <span>invert</span>
                        </label>
                        <input type="range" :value="invertMixed" v-model="invertMixed" min="0" max="100" step="1">
                    </div>
                    <div class="control">
                        <label>
                            <input type="checkbox" :value="hasOpacity" v-model="hasOpacity">
                            <span>opacity</span>
                        </label>
                        <input type="range" :value="opacityMixed" v-model="opacityMixed" min="0" max="100" step="1">
                    </div>
                    <div class="control">
                        <label>
                            <input type="checkbox" :value="hasSaturate" v-model="hasSaturate">
                            <span>saturate</span>
                        </label>
                        <input type="range" :value="saturateMixed" v-model="saturateMixed" min="0" max="300" step="1">
                    </div>
                    <div class="control">
                        <label>
                            <input type="checkbox" :value="hasSepia" v-model="hasSepia">
                            <span>sepia</span>
                        </label>
                        <input type="range" :value="sepiaMixed" v-model="sepiaMixed" min="0" max="100" step="1">
                    </div>
                    <div class="control">
                        <label>
                            <input type="checkbox" :value="hasdropShadow" v-model="hasdropShadow">
                            <span>drop-shadow</span>
                        </label>
                        <input type="range" :value="dropshadowMixed" v-model="dropshadowMixed" min="-100" max="100" step="1">
                    </div>
                </div>
            </li>

            <li class="mixed">
                <div class="container">
                    <h3>混合效果</h3>
                    <div class="img">
                        <img :style="mixedStyle" src="../../static/image/tiger.jpg">
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
            brightnessMixed: 1.1,
            contrastMixed: 8,
            grayscaleMixed: 0,
            huerotateMixed: 10,
            invertMixed: 0,
            opacityMixed: 100,
            saturateMixed: 200,
            sepiaMixed: 20,
            dropshadowMixed: 0,

            hasBlur: true,
            hasBrightness: true,
            hasContrast: true,
            hasGrayscale: true,
            hashueRotate: true,
            hasInvert: true,
            hasOpacity: true,
            hasSaturate: true,
            hasSepia: true,
            hasdropShadow: true
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
            let cssStrArr = [
                this.hasBlur ? 'blur(' + this.blurMixed + 'px)': ' ',
                this.hasBrightness ? 'brightness(' + this.brightnessMixed + ') ': ' ',
                this.hasContrast ? 'contrast(' + this.contrastMixed + '%) ': ' ',
                this.hasGrayscale ? 'grayscale(' + this.grayscaleMixed + '%) ': ' ',
                this.hashueRotate ? 'hue-rotate(' + this.huerotateMixed + 'deg) ': ' ',
                this.hasInvert ? 'invert(' + this.invertMixed + '%) ': ' ',
                this.hasOpacity ? 'opacity(' + this.opacityMixed + '%) ': ' ',
                this.hasSaturate ? 'saturate(' + this.saturateMixed + '%) ': ' ',
                this.hasSepia ? 'sepia(' + this.sepiaMixed + '%) ': ' ',
                this.hasdropShadow ? 'drop-shadow(' + this.dropshadowMixed + 'px ' +this.dropshadowMixed + 'px 5px #000)': ' '
            ],
            cssStr = cssStrArr.join(' ');
            return {
                'filter': cssStr
            }
        }
    }
}
</script>

<style scoped>
    .filter ul {
        overflow: hidden;
        max-width: 800px;
        margin: 0 auto 100px;
    }
    .filter ul li {
        float: left;
        width: 240px;
        height: 310px;
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
        width: 162px;
        cursor: pointer;
    }
    .filter ul li .control input[type=number] {
        width: 35px;
        cursor: pointer;
    }
    .filter ul li.mixed .control {
        margin-bottom: 5px;
        font-size: 12px;
    }
    .filter ul li .control label {
        user-select: none;
        cursor: pointer;
    }
    .filter ul li .control span {
        font-size: 12px;
    }
    .filter ul li.mixed .control span {
        display: inline-block;
        font-size: 12px;
    }
    .filter ul li.mixed .control span {
        width: 78px;
    }
    .filter ul li.mixed .control input[type=range] {
        width: 130px;
    }
    .filter ul li.mixed .control input[type=number] {
        font-size: 12px;
    }
    .filter ul li.mixed .control input[type=number] {
        width: 35px;
        transform: scale(.6);
    }
    .filter ul li .code {
        background-color: #ccc;
    }
    .filter ul li .code pre {
        padding: 0 5px;
        margin: 5px 0 0 0;
        text-align: center;
        background-color: #ccc;
    }
</style>
