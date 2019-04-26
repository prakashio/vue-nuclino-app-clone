<template>
    <div class="bg-grey h-100" :style="{width: sidebarWidth+'%'}" v-show="!isSidebarHide">
        <div class="">
            <ul class="nav flex-column">
              <li class="nav-item">
                <div class="row p-2">
                  <div class="col-6">

                  </div>
                  <div class="col-6 text-right">
                    <span class="fa fa-plus pl-1 pr-1"></span>
                    <span class="fa fa-expand pl-1 pr-1" @click="sidebarResizeFull"></span>
                    <span class="fa fa-angle-double-left text-link pl-1 pr-1" @click="sidebarResizeNormal"></span>
                  </div>
                </div>
              </li>
            </ul>
            <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex';

  export default {
    methods: {
      ...mapMutations([
        'sidebarResizeFull',
        'sidebarResizeNormal'
      ])
    },
    computed: {
      ...mapGetters([
        'isSidebarHide',
        'sidebarWidth'
      ])
    }
  }
</script>
