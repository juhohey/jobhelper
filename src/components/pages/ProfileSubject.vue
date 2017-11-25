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
              <aspiration-questions-page></aspiration-questions-page>
          </md-step>
        </md-steppers>
    </div>
</template>

<script>
    import SchoolQuestionsPage from './SchoolQuestionsPage';
    import HobbyQuestionsPage from './HobbyQuestionsPage';
    import AspirationQuestionsPage from './AspirationQuestionsPage';

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
            AspirationQuestionsPage
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
