"use client";

import axios from "axios";

import { ProductCard } from "@/components/ProductCard";

const ProductListing = () => {
  const fetchProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data.products;
  };
  return <ProductCard />;
};

export default ProductListing;
