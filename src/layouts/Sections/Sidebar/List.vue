<template>
	<div class="">
		<div class="d-flex pt-2 pb-2">
			<div class="col-6">
				<span class="text-small">{{$route.params.workspace}}</span>
			</div>
			<div class="col-6 text-right">
				<span class="fa fa-plus pl-1 pr-1"></span>
				<span class="fa fa-expand pl-1 pr-1" @click="sidebarResizeFull"></span>
				<span class="fa fa-angle-double-left text-link pl-1 pr-1" @click="sidebarResizeNormal"></span>
			</div>
		</div>
		<ul class="nav nav-action flex-column">
			<router-link tag="li" :to="{ name:'cluster', params: {cluster:'cluster-1', workspace: $route.params.workspace }}" name="Cluster" class="nav-item">
				<a class="nav-link">Librarfdasfsafsadfadsfadsfdies</a>
			</router-link>
			<li class="nav-item">
				<a class="nav-link"> Notes</a>
			</li>
			<li class="nav-item">
				<a class="nav-link">Github</a>
			</li>
			<li class="nav-item">
				<a class="nav-link">Linkedin</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex';

	export default {
		methods: {
			...mapMutations([
				'sidebarResizeFull',
				'sidebarResizeNormal'
			])
		},
	}
</script>

