import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  { id: "1", price: 6, title: "adawdtest1", description: "awdawdawdwadesc" },
  { id: "2", price: 6, title: "adawdtest1", description: "awdawdawdwadesc" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((products) => (
          <ProductItem
            key={products.id}
            title={products.title}
            price={products.price}
            id={products.id}
            description="This is a first product - amazing!"
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
