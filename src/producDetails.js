import React, { useEffect, useState } from "react";
import { getProductDeyailsById } from "./utiils";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProducDetails() {
  const [productData, setProductData] = useState({});
  const params = useParams();

  useEffect(() => {
    getdata(params.producId);
  }, []);

  const getdata = async (id) => {
    const res = await getProductDeyailsById(id);
    setProductData(res);
  };

  console.log(productData);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProducDetails;
