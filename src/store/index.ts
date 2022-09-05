export const actions = {
  async nuxtServerInit ({ dispatch, commit, $http }: { dispatch: any, commit: any, $http: any }) {
    const products = await dispatch('products/fetchProducts');
    await dispatch('home/setAsyncProducts', products);
  }
}