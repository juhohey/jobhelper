<template>
  <div id="app">
    <Layout>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    </Layout>
  </div>
</template>

<script>
import Layout from './components/Layout'
export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>

<style>
#app {
    min-height: 100vh;
}
.md-checkbox .md-checkbox-container {
    border-color: black !important;
    border-radius: 50% !important;
}

/* child selectors here to override specificity from the framework*/
#app .md-input {
  border-bottom: 1px solid #eee;
}
#app .md-focused .md-input {
  border-bottom-color: tomato;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
#app .md-button-primary {
  background: #15B2A8;
  color: white;
}
</style>
