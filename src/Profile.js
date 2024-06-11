import React, { useEffect, useState } from "react";
import { getAllProducts } from "./utiils";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

function Contact() {
  const [products, setProducts] = useState([]);
  const [isloading, setisloading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const res = await getAllProducts();
    setProducts(res.products);
    setisloading(false);
  };
  function truncateDescription(description, wordLimit = 5) {
    const words = description.split(" ");
    if (words.length <= wordLimit) {
      return description;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  }
  return (
    <div className="page-content">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>image</th>
            <th>Title</th>
            <th>Description</th>
            <th>category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {isloading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {products.map((product, key) => {
            return (
              <tr key={key}>
                <td>{product.id}</td>
                <td>
                  <img src={product.images[0]} height={50} width={50} />
                </td>
                <td
                  onClick={() => {
                    navigate("/producDetails/" + product.id);
                  }}
                >
                  {product.title}
                </td>
                <td>{truncateDescription(product.description)}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Contact;
