<template>
	<div :style="{width: contentWidth+'%'}" v-if="!isContentHide" :class="{'justify-content-center align-items-center  d-flex ': !$route.params.cluster}" class="h-100">
		<span @click="sidebarResizeNormal" v-if="isSidebarHide" style="position:absolute;top:112px;left:20px;" class="fa fa-angle-double-right"></span>
		<div class="row text-small" v-if="!$route.params.cluster">
			<div class="col-12 text-center">
				<router-link :to="{ name: 'child', params:{hahaha:'cofdasfsdol'}}">Nothing Selected</router-link>
			</div>
			<div class="col-12 text-center">
				<router-view name="inside"></router-view>
				<span>Select an item from the clustr</span>
				<p>{{$route.params.cluster}}</p>
			</div>
		</div>
		<!-- <div class="row"> -->
			<div class="col-12 pt-4" v-if="$route.params.cluster">
				<div class="container">
					<h1>{{$route.params.cluster}}</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import { mapMutations, mapGetters } from 'vuex';

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

<style scoped>
.h-100 {
	min-height: 88.2vh;
}
</style>
