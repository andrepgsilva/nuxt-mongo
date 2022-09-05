<template>
  <div id="navbar-wrapper">
    <b-navbar id="main-navbar" toggleable="lg" type="light" variant="faded">
      <b-navbar-brand href="#">Store</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">PRODUCTS</b-nav-item>
          <b-nav-item href="#">FRANCHISES</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form @submit.prevent="search()">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="productForSearch"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        productForSearch: ''
      }
    },
    
    methods: {
      async search() {
        this.$store.commit('home/setProducts', this.$store.getters['products/getProducts']);
        
        if (this.productForSearch.trim() == '') {
          this.$store.commit('home/setProducts', this.$store.getters['products/getProducts']);  
        }

        const products = await this.$store.dispatch('home/filterByName', this.productForSearch);
        
        this.$store.commit('home/setProducts', products);
      }
    }
  }
</script>

<style scoped>
#main-navbar {
  border-bottom: 1px solid #eaeaea;
  box-shadow: 0 0 3px rgba(0,0,0,.2);
}

#main-navbar .nav-link {
  color: #000;
  font-weight: bold;
  font-size: 0.9rem;
  margin-top: 5px;
}
</style>