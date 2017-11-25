<template>
    <div class="profile-subject">
        <md-steppers md-alternative>
            <md-step id="first">
                <school-questions-page></school-questions-page>
            </md-step>

            <md-step id="second">
                <hobby-questions-page></hobby-questions-page>
            </md-step>

            <md-step id="third">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
            </md-step>
        </md-steppers>
    </div>
</template>

<script>
    import SchoolQuestionsPage from './SchoolQuestionsPage';
    import HobbyQuestionsPage from './HobbyQuestionsPage';

    export default {
        name: 'ProfileSubject',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            };
        },
        components: {
            SchoolQuestionsPage,
            HobbyQuestionsPage,
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 /* #app .md-steppers-navigation{
   box-shadow: none!important;
  }
  #app .md-stepper-header {
    height: auto;
  } */
</style>
