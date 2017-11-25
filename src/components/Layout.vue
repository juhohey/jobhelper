<template>
  <div class="view md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">{{appName}}</span>
    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">{{appName}}</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>
      </md-list>
    </md-drawer>

    <md-content>
      <slot></slot>
    </md-content>
  </div>
</template>

<script>
  export default {
    name: 'Layout',
    data: () => ({
      showNavigation: false,
      showSidepanel: false,
      appName:  window.store.get('appName')
    }),
  }
</script>

<style>
  .view {
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
    background: white;
  }

  .md-content {
    padding: 16px;
  }
</style>