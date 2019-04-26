<template>
    <div style="width:15%;" class="p-3 bg-white h-100 z-index-1">
      <ul class="nav flex-column">
        <li class="nav-item">
          <div class="d-flex justify-content-between">
            <div>
              <b>Workspace</b>
            </div>
            <div>
              <i  @click="isToggleMainSidebar=false" class="fa fa-angle-double-left"></i>
            </div>
          </div>
        </li>
        <li class="nav-item pt-4 pb-4">
          <div class="d-flex justify-content-between">
            <div>
              <span class="text-muted">Workspace</span>
            </div>
            <div>
              <a href="#" @click="showDialog('createWorkspace')"><i class="fa fa-plus"></i> <span> Create workspace</span></a>
            </div>
          </div>
        </li>
        <li class="nav-item pt-2 pb-2">
          <div class="d-flex justify-content-between">
            <div>
              <span>Workspace 1</span>
            </div>
            <div>
            </div>
          </div>
        </li>
        <li class="nav-item pt-2 pb-2">
          <div class="d-flex justify-content-between">
            <div>
              <span>Workspace 1</span>
            </div>
            <div>
            </div>
          </div>
        </li>
        <li class="dropdown-divider"></li>
      </ul>
    </div>
</template>

<script>
  import { mapMutations } from 'vuex';

  export default {
    computed: {
      isToggleMainSidebar: {
        get: function() {
          return this.$store.state.isToggleMainSidebar;
          // return true;
        },
        set: function() {
          this.$store.commit('toggleMainSidebar');
        }
      }
    },
    methods: {
      ...mapMutations([
        'showDialog'
      ])
    }
  }
</script>

<style scoped>
    .z-index-1 {
      z-index: 1111;
      position: absolute;
    }
    .h-100 {
      min-height: 100vh;
      display: block;
    }
</style>
