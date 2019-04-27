<template>
    <div style="width:15%;" class="bg-white h-100 z-index-1 light-shadow ">
        <ul class="nav flex-column p-3">
            <li class="nav-item">
                <div class="d-flex justify-content-between">
                    <div>
                        <b>Workspace</b>
                    </div>
                    <div>
                        <i @click="isToggleMainSidebar=false" class="fa fa-angle-double-left"></i>
                    </div>
                </div>
            </li>
            <li class="nav-item pt-4 pb-4">
                <div class="d-flex justify-content-between">
                    <div>
                        <span class="text-small">Workspace</span>
                    </div>
                    <div>
                        <a style="color:#fa5560;" href="#" @click="showDialog('createWorkspace')"><i class="fa fa-plus"></i> <span> Create workspace</span></a>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="nav nav-action flex-column">
            <router-link class="nav-item pb-2 pt-2" active-class="active-nav" tag="li" :to="{ name: 'workspace', params: { workspace: 'workspace 1' }}">
                <div class="d-flex justify-content-between pl-3">
                    <div>
                        <span>Workspace 1</span>
                    </div>
                    <div>
                    </div>
                </div>
            </router-link>
            <router-link class="nav-item pb-2 pt-2" active-class="active-nav" tag="li" :to="{ name: 'workspace', params: { workspace: 'workspace 2' }}">
                <div class="d-flex justify-content-between pl-3">
                    <div>
                        <span>Workspace 1</span>
                    </div>
                    <div>
                    </div>
                </div>
            </router-link>
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
.active-nav {
    border-left: 2px solid #fa5560;
    background-color: rgba(250, 250, 251, 1);
}

.nav-action>.nav-item:hover {
    background-color: rgba(250, 250, 251, 0.95);
    cursor: pointer;
}

.z-index-1 {
    z-index: 1111;
    position: absolute;
}

.h-100 {
    min-height: 100vh;
    display: block;
}
</style>
