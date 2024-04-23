export type Product = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  createdAt: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
};

let products: Product[];

export const addItem = (product: Product) => {
  products.push(product);
};

export const getAllItems = () => {
  return products;
};
