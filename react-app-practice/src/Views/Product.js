import React from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../Components/Loader";
import { useAxiosGet } from "../Hooks/HttpRequests";

function Product() {
  const { id } = useParams();
  const url = `https://5fa0e320e21bab0016dfd6fe.mockapi.io/products/${id}`;

  let product = useAxiosGet(url);
  let content = null;

  if (product.error) {
    content = <p>There was an error, please refresh or try again.</p>;
  }
  if (product.loading) {
    content = <Loader></Loader>;
  }

  if (product.data) {
    content = (
      <div>
        <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
        <div>
          <img
            className="mb-4 rounded overflow-hidden"
            src={product.data.images}
            alt={product.data.name}
          />
        </div>
        <div className="font-bold text-xl mb-3">$ {product.data.price}</div>
        <div className="mb-4">{product.data.description}</div>
        <Link
          to={"/products"}
          className="bg-blue-500 text-white p-2 flex justify-center w-full rounded"
        >
          Back to all products
        </Link>
      </div>
    );
  }

  return <div>{content}</div>;
}

export default Product;
