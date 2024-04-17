import { createClient, groq } from "next-sanity";

const sanityClient = createClient({
  projectId: "wlhkuohe",
  dataset: "production",
});

export const getProducts = async () => {
  return await sanityClient.fetch(groq`*[_type == "product"]{
        _id,
        _createdAt,
        title,
        description
    }`);
};
