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
		<div class="d-flex">
			<div>
				<d3-network  :net-nodes="nodes" :net-links="links" :options="options" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';
import D3Network from 'vue-d3-network'

export default {
	components: {
		D3Network
	},
	data: function() {
		return {
			nodes: [{
					id: 1,
					name: 'paras',
					_color: '#fa5560',
					_size: 26,
					_labelClass: 'text-red',
					_cssClass: 'text-red'
				},
				{
					id: 2,
					name: 'rocks',
					_size: 16,
					_color: '#fa5560',
					_labelClass: 'text-red',
					_cssClass: 'text-red'
				},
				{
					id: 3,
					name: 'danger',
					_size: 16,
					_color: '#fa5560',
					_labelClass: 'text-red',
					_cssClass: 'text-red'
				},
				{
					id: 4,
					name: 'love',
					_color: '#fa5560',
				},
				{
					id: 5,
					name: 'game',
					_size: 16,
					_color: '#fa5560',
				},
				{
					id: 6,
					name: 'code',
					_color: '#fa5560',
				}
			],
			options: {
				nodeLabels: true,
				linkWidth: 1,
				strLinks: true,
				nodeSize: 10,
				fontSize: 16,
				force: 3000,
			},
			links: [{
					_color: '#ddd',
					name: 'paras',
					tid: 2,
					sid: 1
				},
				{
					_color: '#ddd',
					name: 'paras',
					tid: 1,
					sid: 5
				},
				{
					_color: '#ddd',
					name: 'paras',
					tid: 1,
					sid: 5
				},
				{
					_color: '#ddd',
					name: 'paras',
					tid: 2,
					sid: 4
				},
				{
					_color: '#ddd',
					name: 'paras',
					tid: 2,
					sid: 6
				},
				{
					_color: '#ddd',
					name: 'paras',
					tid: 1,
					sid: 3
				}
			]
		}
	},
	methods: {
		...mapMutations([
			'sidebarResizeFull',
			'sidebarResizeNormal'
		])
	},
}
</script>
