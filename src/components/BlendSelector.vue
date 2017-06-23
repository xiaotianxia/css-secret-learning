<template>
    <select v-model="selection" @change="onChange">
        <option value="normal">normal</option>
        <option value="multiply">multiply</option>
        <option value="screen">screen</option>
        <option value="overlay">overlay</option>
        <option value="darken">darken</option>
        <option value="lighten">lighten</option>
        <option value="color-dodge">color-dodge</option>
        <option value="color-burn">color-burn</option>
        <option value="hard-light">hard-light</option>
        <option value="soft-light">soft-light</option>
        <option value="difference">difference</option>
        <option value="exclusion">exclusion</option>
        <option value="hue">hue</option>
        <option value="saturation">saturation</option>
        <option value="color">color</option>
        <option value="luminosity">luminosity</option>
    </select>
</template>

<script>
export default {
    data () {
        return {
            selection: 'normal'
        }
    },
    methods: {
        onChange () {
            this.$emit('onBlendChange', {
                selection: this.selection
            });
        }
    },

    mounted () {
        this.onChange();
    }
}
</script>

<style>

</style>
