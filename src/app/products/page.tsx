"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

interface ProductType {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: {
    id: number;
    name: string;
  };
}

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const sendGetRequest = async () => {
    try {
      const response = await axios.get(`http://localhost:8081/products`);
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendGetRequest();
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
        <u>Products</u>
      </h1>
      {loading && (
        <p className="text-xl font-semibold text-center mb-8">Loading...</p>
      )}
      {!loading && products.length < 1 && (
        <p className="text-2xl font-semibold text-center text-red-600 mb-8">
          No products are available at this time.
        </p>
      )}
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-2xl mx-auto bg-gray-100 rounded-lg shadow-lg overflow-hidden mb-8 py-10"
        >
          <div className="md:flex md:flex-col items-center">
            <div className="md:flex-shrink-0">
              <img
                className="h-56 w-full object-cover"
                src={`/images/${product.image.name}`}
                alt={`${product.image.name} image`}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-xl text-blue-600 font-semibold">
                <b>Name: </b>
                {product.name}
              </div>
              <p className="mt-2 text-gray-700">
                <b>Description: </b>
                <i>{product.description}</i>
              </p>
              <p className="mt-2 text-gray-700">
                <b>Price: </b>
                {product.price}
              </p>
              <p className="mt-2 text-gray-700">
                <b>Stock: </b>
                {product.stock}
              </p>
            </div>
            <div className="mb-5">
              <Link
                href={`/products/${product.id}`}
                className="inline-block bg-blue-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded transition duration-300 mr-5"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
