<template>
    <div>
        <p>School is not everything, you know</p>
        <p>
            What do you like to do in your spare time?
            <span class="faint">(Pick any number)</span>
        </p>
        <option-list :options="listOptions"></option-list>
    </div>
</template>

<script>
    export default {
        name: 'HobbyQuestionsPage',
        data() {
            return {
                listOptions: [
                    {
                        name: 'Drawing',
                    },
                    {
                        name: 'Sculpting',
                    },
                    {
                        name: 'Knitting',
                    },
                    {
                        name: 'RPG',
                    },
                    {
                        name: 'Computer Games',
                    },
                    {
                        name: 'Hacking',
                    },
                    {
                        name: 'Electronics',
                    },
                    {
                        name: 'Football',
                    },
                    {
                        name: 'Basketball',
                    },
                    {
                        name: 'Tennis',
                    },
                    {
                        name: 'Dancing',
                    },
                    {
                        name: 'Bicycle Riding',
                    },
                    {
                        name: 'Horse Riding',
                    },
                    {
                        name: 'Reading',
                    },
                    {
                        name: 'Comics',
                    },
                ]
            };
        },
    }
</script>

<style scoped>
    .faint {
        color: darkgray;
    }
</style>
