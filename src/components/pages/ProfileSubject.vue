<template>
    <div class="profile-subject">
      <div>
        <md-steppers>

          <md-step id="first">     
            Foobar
          </md-step>

          <md-step id="second">
            
             <md-field>
                <label>Initial Value</label>
                <md-input v-model="msg"></md-input>
            </md-field>
          </md-step>

          <md-step id="third">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
          </md-step>
        </md-steppers>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'ProfileSubject',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 #app .md-steppers-navigation{
   box-shadow: none!important;
  }
  #app .md-stepper-header {
    height: auto;
  }
</style>
