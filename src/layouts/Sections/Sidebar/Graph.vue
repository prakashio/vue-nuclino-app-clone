<template>
	<div class="">
            <ul class="nav flex-column">
                <li class="nav-item">
                    <div class="row p-3 pb-0">
                        <div class="col-6">
                            <span class="text-small">{{$route.params.workspace}}</span>
                        </div>
                        <div class="col-6 text-right">
                            <span class="fa fa-plus pl-1 pr-1"></span>
                            <span class="fa fa-expand pl-1 pr-1" @click="sidebarResizeFull"></span>
                            <span class="fa fa-angle-double-left text-link pl-1 pr-1" @click="sidebarResizeNormal"></span>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="nav nav-action flex-column">
                <li class="nav-item">
					<div class="nav-link">
						<h3>Graph</h3>
					</div>
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
