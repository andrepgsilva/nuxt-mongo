type Product = {
  'name': string,
};

interface State {
  products: Array<Product>
}

export const state = () => ({
  products: []
})

export const getters = {
  getProducts(state: State) {
    return state.products
  },
}

export const mutations = {
  setProducts(state: State, products: Array<Product>) {
    state.products = products;
  }
}

export const actions = {
  async fetchProducts(context: any): Promise<any> {
    // @ts-ignore
    const response = await this.$axios.get('/products');
    const products = response.data;

    context.commit('setProducts', products);

    return products;
  }
}