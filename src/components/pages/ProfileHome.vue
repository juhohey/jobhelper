<template>
    <div class="profile">
       <div class="profile-container">
          <img class="profile-img" src="//placehold.it/275x275" >
           <md-field>
               <label>Initial Value</label>
               <md-input v-model="initial"></md-input>
           </md-field>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'ProfileHome',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .profile-container {
    text-align: center;
    margin: 2rem 0 2rem;
  }
  .profile-img {
    max-width: 100%;
    border-radius: 50%;
  }
</style>
