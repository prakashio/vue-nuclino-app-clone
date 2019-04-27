<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-white">
            <span class="pl-2 pr-4" @click="toggleMainSidebar()"><i class="fa fa-bars pt-2"></i></span>
            <a class="navbar-brand" href="#"><img src="../assets/images/logo.svg" style="width:100px;"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Dropdown
                          </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
        <div class="background-dark light-shadow pl-2 pt-2">
            <ul class="nav">
                <li class="nav-item" :class="{'active-border': activeSidebarSection=='list' }">
                    <a class="nav-link" @click="changeSidebarActive('list')">List</a>
                </li>
                <li class="nav-item" :class="{'active-border': activeSidebarSection=='board' }">
                    <a class="nav-link" @click="changeSidebarActive('board')">Board</a>
                </li>
                <li class="nav-item" :class="{'active-border': activeSidebarSection=='graph' }">
                    <a class="nav-link" @click="changeSidebarActive('graph')">Graph</a>
                </li>
                <li class="nav-item">
                    <b><a class="nav-link"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a></b>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    methods: {
		...mapMutations([
			'changeSidebarActive'
		]),
        toggleMainSidebar: function() {
            this.$store.commit('toggleMainSidebar');
        }
	},
	computed: {
		...mapGetters([
			'activeSidebarSection'
		])
	},
}
</script>

<style scoped>
.nav>.nav-item>.nav-link {
    font-size: .775rem;
    color: var(--charcoal-400);
    cursor: pointer;
}

.nav-item {
    padding-bottom: 0px;
}

.active-border {
    font-weight: 400;
    color: var(--charcoal-600);
    border-bottom: 2px solid #fa5560;
}
</style>
