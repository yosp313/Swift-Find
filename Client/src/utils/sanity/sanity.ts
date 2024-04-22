"use server";

import { createClient } from "next-sanity";
import sanityClientConf from "./sanity-client-config";
import { Product } from "./types";

export const getProducts = async () => {
  const query = `*[_type == "product"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    description,
    price,
    mainImage {
      asset->{
        url
      }
    }
  }`;
  return await createClient(sanityClientConf).fetch<Product[]>(query);
};

export const getSingleProduct = async (slugId: string): Promise<Product> => {
  const slug = slugId;
  const query = `*[_type == 'product' && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    description,
    mainImage {
      asset->{
        url
      }
    },
    price
  }`;

  return await createClient(sanityClientConf).fetch<Product>(query, { slug });
};
