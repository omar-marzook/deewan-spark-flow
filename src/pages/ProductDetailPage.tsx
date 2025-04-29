
import React from "react";
import { useParams } from "react-router-dom";
import ProductTemplate from "@/components/ProductTemplate";
import NotFound from "./NotFound";
import productsData from "@/data/products-data";

const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the product data based on the slug
  const productData = slug ? productsData[slug] : null;
  
  // If no product is found, show the 404 page
  if (!productData) {
    return <NotFound />;
  }
  
  return <ProductTemplate product={productData} />;
};

export default ProductDetailPage;
