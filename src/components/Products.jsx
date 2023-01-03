import ProductList from "./ProductList";

const Products = ({ products }) => {
  return (
    <div className="products">
      {products.map((product, index) => (
        <ProductList key={index} product={product} />
      ))}
    </div>
  );
};
export default Products;
