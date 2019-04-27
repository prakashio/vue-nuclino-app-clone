<template>
	<transition enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft" appear>
		<div :style="{width: sidebarWidth+'%'}" class="bg-grey h-100 transition" v-if="!isSidebarHide">
			<component :is="activeSidebarSection"></component>
		</div>
	</transition>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import List from './List';
import Graph from './Graph';
import Board from './Board';


export default {
	components: {
		'list': List,
		'board': Board,
		'graph': Graph
	},
    computed: {
        ...mapGetters([
            'isSidebarHide',
			'sidebarWidth',
			'activeSidebarSection'
        ])
    }
}
</script>

<style scoped>
.transition {
	-webkit-transition: width 1s; /* For Safari 3.1 to 6.0 */
  transition: width 1s;
}
.nav-action>.nav-item:hover {
    background-color: rgba(240, 240, 240, 0.3);
    cursor: pointer;
}
</style>

<style scoped>
.h-100 {
    min-height: 88.2vh;
}
</style>
