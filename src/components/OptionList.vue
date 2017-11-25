<template>
    <div class="flex-col">
        <md-checkbox v-for="option in options" :key="option.name"
            v-model="selectedOptions"
            value="option"
            @change="logChange"
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
    .flex-col {
        display: flex;
        flex-direction: column;
    }
</style>
