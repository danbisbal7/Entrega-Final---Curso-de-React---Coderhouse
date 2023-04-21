import React, { createContext, useState } from 'react';

// Se desarrolla la logica para agregar productos al carrito y que abarque toda la app

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [itemCount, setItemCount] = useState({ qtyItems: 0, products: [] });
    console.log(itemCount);

    return(
        <CartContext.Provider   
            value={{
                itemCount,
                setItemCount,
            }}
            >
            {children}
        </CartContext.Provider>
    )
}

