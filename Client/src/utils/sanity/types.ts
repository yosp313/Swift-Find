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
