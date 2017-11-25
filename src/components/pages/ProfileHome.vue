<template>
    <div class="profile">
     <div class="profile-container">
        <img class="profile-img" src="//placehold.it/275x275" >
     </div>
        <h2 class="profile-header">
          Application name!
        </h2>
        <p class="profile-description">
          Hello, we are here to help you get informed vocal decisions. What can we do for you?
        </p>
        <md-button class="md-raised profile-path" @click="navigate">I seek vocational advice</md-button>
        <md-button class="md-raised profile-path" @click="navigate">I seek information about a specific vocation</md-button>

        <div class="profile-question">
          <label><md-icon>search</md-icon>Ask a free question</label>

          <md-field>
            <md-textarea class="profile-question-ask" v-model="ask" placeholder="Which programming langugages are most wanted right now"></md-textarea>
          </md-field>

          <md-button class="md-raised ">Search</md-button>
        </div>
      
    </div>
</template>

<script>
    export default {
        name: 'ProfileHome',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                ask: ''
            }
        },
        methods: {
          navigate(){
            this.$router.push('/profile/background')
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .profile-img {
    border-radius: 50%;
    max-width: 100%
  }
  .profile-header {
    text-align: center;
    margin: 2rem 0;
  }
  .profile-container {
    text-align: center;
  }
  .profile-question {
    margin-top: 2rem;
  }
  #app .profile-path {
    white-space: normal;
    text-align: left;
    margin: 0.5rem 0;
    padding: .8rem;
    height: auto;

  }
  #app .profile-question-ask {
    border: 1px solid #eee;
  }
</style>
