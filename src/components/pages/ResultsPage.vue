<template>
    <div class="profile-hobbies">
        <md-content class="md-primary">Asperational Image</md-content>

        <md-button>Default</md-button>

            <md-card>
      <md-card-header>
        <div class="md-title">Card without hover effect</div>
      </md-card-header>

      <md-card-content>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
      </md-card-content>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
    </div>
</template>

<script>
    export default {
        name: 'ResultsPage',
        data () {
            return {
                job: 'What would you like to be?'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
    .profile-hobbies {
        display: flex;
    }
    .md-content {
        width: 200px;
        height: 200px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background-color: cornflowerblue;
    }

</style>
