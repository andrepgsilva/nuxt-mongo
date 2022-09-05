type Product = {
  'name': string,
};

interface State {
  productsList: Array<Product>
}

export const state = () => ({
  productsList: []
})

export const getters = {
  getProducts(state: State) {
    return state.productsList
  },
}

export const mutations = {
  setProducts(state: State, products: Array<Product>) {
    state.productsList = products;
  }
}

export const actions = {
  async setAsyncProducts(context: any, products: Array<Product>) {
    context.commit('setProducts', products);
  },

  async filterByName(context: any, text: string) {
    const filteredProducts = context.state.productsList.filter((product: Product) => {
      return product.name.toLowerCase().includes(text) !== false;
    })

    return filteredProducts;
  }
}