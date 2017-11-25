<template>
    <div class="list-container">
        <md-checkbox v-for="option in options" :key="option.name"
            v-model="selectedOptions"
            value="option"
            @change="logChange"
        >
            {{ option.name }}
        </md-checkbox>
        <div class="other">
            <md-checkbox @change="logChange">
                Other
            </md-checkbox>
            <md-field>
                <!-- <label>asd</label> -->
                <md-input v-model="initial"></md-input>
            </md-field>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'OptionsList',
        props: ['options', 'selectedOptions'],
        data() {
            return {
                initial: '',
            };
        },
        methods: {
            logChange(e) {
                console.log(this.selectedOptions);
            }
        }
    }
</script>

<style scoped>
    .list-container {
        display: flex;
        flex-direction: column;
    }
    .other {
        display: flex;
    }
    .other input[type="text"] {
        border: 2px solid;
        transform: translateY(-10px);
        padding: 0 16px;
    }
</style>
