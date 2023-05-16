import React from 'react'
import { useShoppingCart } from '../Hooks/useShoppingCart';

export const ShoppingCart = () => {

  const { increaseCartQuantity, deleteProduct, returnAmount, decreaseCartQuantity, emptyCart, shoppingCart} = useShoppingCart();

    console.log(shoppingCart);
  return (
    <div>ShoppingCart</div>
  )
}
