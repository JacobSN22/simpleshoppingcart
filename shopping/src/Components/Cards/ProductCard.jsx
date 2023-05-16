import React from "react";
import styled from "styled-components";

const ProductCard = ({ item, increaseCartQuantity, deleteProduct, returnAmount, decreaseCartQuantity, emptyCart }) => {
  const { thumbnail, title, description, price } = item;
  return (
    <CardContainer>
      <CardImage src={thumbnail} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>
        {description} <br />
      </CardDescription>
      {returnAmount(item.id)}
      <CardPrice>dk. {price}</CardPrice>
      <CardButton onClick={()=> increaseCartQuantity(item.id, item.price, item, 1)}>Køb</CardButton>
      <button onClick={() => decreaseCartQuantity(item.id)}>Fjern 1</button>
      <button onClick={() => deleteProduct(item.id)}>Slet alle af dette product</button>
      <button onClick={() => emptyCart(item.id)}>Slet alle products</button>

    </CardContainer>
  );
};

export default ProductCard;


const CardContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto) 1fr repeat(2, auto);
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 2/1;
  object-fit: cover;
  border-radius: 8px;
`;

const CardTitle = styled.h3`
  margin-top: auto;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const CardDescription = styled.p`
  display: grid;
  font-size: 14px;
  margin: 0;
`;

const CardPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const CardButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;