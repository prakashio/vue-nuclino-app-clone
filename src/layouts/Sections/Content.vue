<template>
  <div :style="{width: contentWidth+'%'}" v-if="!isContentHide" class="h-100 justify-content-center d-flex align-items-center" >
    <span @click="sidebarResizeNormal" v-if="isSidebarHide" style="position:absolute;top:112px;left:20px;" class="fa fa-angle-double-right"></span>
    <div class="row">
        <div class="col-12 text-center">
          <span>Nothing Selected</span>
        </div>
        <div class="col-12 text-center">
        <span>Select an item from the clustr {{isContentHide}}</span>
        </div>
    </div>
  </div>
</template>

<script>

  import {mapMutations, mapGetters} from 'vuex';

  export default {
    computed: {
      ...mapGetters([
        'isContentHide',
        'contentWidth',
        'isSidebarHide'
      ]),
    },
    methods: {
      ...mapMutations([
        'sidebarResizeNormal'
      ])
    }
  }
</script>
