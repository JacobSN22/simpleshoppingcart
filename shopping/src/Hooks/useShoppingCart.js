import React from 'react'

export const useShoppingCart = () => {

    const storageLabel = "shoppingcart"

    const Cart = JSON.parse(localStorage.getItem(storageLabel)) || [];

    const [ shoppingCart, setShoppinCart ] = useState(Cart);



    const findProduct = useCallback((id) => {

        const itemObj = shoppingCart.find((item) => item.id === id)

        return itemObj

    }, [shoppingCart])

    const increaseCartQuantity = useCallback(
        (id, price, item, amount) => {
        if(findProduct(id) === undefined) {
            setShoppinCart(prev => [...prev, {id, price, item, amount}])
        }else {
            setShoppinCart(prev => prev.map((item) => {
                if(item.id === id) {
                    return {
                    ...item, amount: item.amount+1
                };
                } else {
                    return{...item}
                }    
            })) 
        }
    },
    [findProduct] 
    )

    

    const returnAmount = (id) => {
        const itemAmount = findProduct(id)?.amount
        return itemAmount;
    };

    useEffect(() => {
        
        localStorage.setItem(storageLabel, JSON.stringify(shoppingCart))

    }, [shoppingCart])

  return { increaseCartQuantity , returnAmount, shoppingCart};
}
