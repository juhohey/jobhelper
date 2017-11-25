<template>
    <div>
        <p>Let's get to know you better</p>
        <p>
            What are your favorite subjects at school?
            <span class="faint">(Pick any number)</span>
        </p>
        <option-list :options="listOptions"></option-list>
    </div>
</template>

<script>
    export default {
        name: 'SchoolQuestionsPage',
        data() {
            return {
                listOptions: [
                    {
                        name: 'Finnish',
                    },
                    {
                        name: 'Swedish',
                    },
                    {
                        name: 'English',
                    },
                    {
                        name: 'Math',
                    },
                    {
                        name: 'Physics',
                    },
                    {
                        name: 'Chemistry',
                    },
                    {
                        name: 'Biology',
                    },
                    {
                        name: 'Geography',
                    },
                    {
                        name: 'History',
                    },
                    {
                        name: 'Social Studies',
                    },
                    {
                        name: 'Religion',
                    },
                    {
                        name: 'Home Economics',
                    },
                    {
                        name: 'Physical Education',
                    },
                    {
                        name: 'Textile Work',
                    },
                    {
                        name: 'Metal Work / Woodwork',
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
