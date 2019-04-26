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
        <div class="background-dark border-bottom pl-2 pt-2">
            <ul class="nav">
              <li class="nav-item active-border">
                <a class="nav-link" href="#">List</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Board</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Graph</a>
              </li>
              <li class="nav-item">
                <b><a class="nav-link"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a></b>
              </li>
            </ul>
        </div>
    </div>
</template>

<script>
  export default {
    methods: {
      toggleMainSidebar: function() {
        this.$store.commit('toggleMainSidebar');
      }
    }
  }
</script>

<style scoped>
  .nav > .nav-item  > .nav-link{
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
