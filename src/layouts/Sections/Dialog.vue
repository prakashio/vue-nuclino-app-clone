<template>
    <div class="col-12 sidebar-overlay">
        <div class="h-100 justify-content-center d-flex align-items-center" @click="closeDialog">
            <div class="col-sm-4" @click.stop="">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">Create Workspace</h2>
                        <p class="card-text text-muted">Use workspaces to organize items around topics, projects, and more.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    methods: {
        ...mapMutations(
            ['closeDialog']
        )
    }
}
</script>


<style scoped>
.sidebar-overlay {
    background-color: rgba(250, 250, 251, 0.95);
    height: 100%;
    min-height: 100vh;
    display: block;
    position: absolute;
    width: 100%;
    z-index: 2222;
}
</style>
