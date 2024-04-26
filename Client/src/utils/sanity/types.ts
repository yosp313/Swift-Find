export type Headset = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
  price_data: string;
  quantity: number;
};
