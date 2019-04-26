<template>
    <div id="app">
        <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft" appear>
          <app-main-sidebar v-if="isToggleMainSidebar"></app-main-sidebar>
        </transition>
        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        </transition>
        <div :class="{'sidebar-overlay': isToggleMainSidebar}" @click="isToggleMainSidebar=!isToggleMainSidebar">

        </div>
          <app-dialog v-if="isDialogShow"></app-dialog>

        <div>
          <app-header></app-header>
          <div class="container-fluid">
            <app-main></app-main>
          </div>
        </div>
    </div>
</template>

<script>
import Header from '../src/layouts/header';
import Main from '../src/layouts/main';
import MainSidebar from '../src/layouts/MainSidebar';
import Dialog from '../src/layouts/Sections/Dialog';
import { mapGetters } from 'vuex';

export default {
    components: {
      'app-header': Header,
      'app-main': Main,
      'app-main-sidebar': MainSidebar,
      'app-dialog': Dialog
    },
    computed: {
      isToggleMainSidebar: {
        get: function() {
          return this.$store.state.isToggleMainSidebar;
        },
        set: function() {
          this.$store.commit('toggleMainSidebar');
        }
      },
      ...mapGetters([
        'isDialogShow'
      ])
    }
}
</script>

<style scoped>
  .sidebar-overlay {
    background-color: rgba(250,250,251, 0.95);
    height: 100%;
    min-height: 100vh;
    display: block;
    position: absolute;
    width: 100%;
    z-index: 1000;
  }
  .animated {
    animation-duration: 0.4s;
    animation-delay: 0s;
  }
</style>
