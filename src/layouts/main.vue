<template>
    <div class="row">
          <app-sidebar></app-sidebar>
          <app-content></app-content>
    </div>
</template>

<script>

  import Sidebar from '../layouts/Sections/Sidebar/Sidebar.vue';
  import Content from '../layouts/Sections/Content.vue';

  export default {
      components: {
        'app-sidebar': Sidebar,
        'app-content': Content
      }
  }
</script>

<style scoped>
    .bg-grey {
      background-color: #fafafb;
    }
    .h-100 {
      min-height: 86vh;
      display: block;
    }
</style>

