export default interface ProductRepository {
  getAll(): Promise<void>;
}