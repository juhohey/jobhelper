<template>
    <div>
        <md-checkbox v-for="option in options" :key="option.name"
            v-model="selectedOptions"
            value="option"
            v-on:change="logChange"
        >
            {{ option.name }}
        </md-checkbox>
    </div>
</template>

<script>
    export default {
        name: 'OptionsList',
        props: ['options', 'selectedOptions'],
        methods: {
            logChange(e) {
                console.log(this.selectedOptions);
            }
        }
    }
</script>

<style scoped>
</style>
