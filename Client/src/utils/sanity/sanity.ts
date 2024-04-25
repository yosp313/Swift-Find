"use server";

import { createClient } from "next-sanity";
import sanityClientConf from "./sanity.config";
import { Headset } from "./types";

export const getProducts = async () => {
  const query = `*[_type == "headsets"]{
    _id,
    name,
    "slug": slug.current,
    description,
    image {
      asset->{
        url
      }
    }
  }`;
  return await createClient(sanityClientConf).fetch<Headset[]>(query);
};

export const getSingleProduct = async (slugId: string): Promise<Headset> => {
  const slug = slugId;
  const query = `*[_type == 'headsets' && slug.current == $slug][0]{
    _id,
    name,
    "slug": slug.current,
    description,
    image {
      asset->{
        url
      }
    },
  }`;

  return await createClient(sanityClientConf).fetch<Headset>(query, { slug });
};
