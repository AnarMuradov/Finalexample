import React, { createContext, useState } from "react";
export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  function addbasket(item) {
    const elementindex =basket.findIndex(x => x._id === item._id)
    if (elementindex === -1){
        setBasket([...basket,{...item,count:1}])
        return
    }
    basket[elementindex].count++
    setBasket([...basket])
  }
  function removebasket(item) {
    setBasket(basket.filter(x=>x._id !== item._id))
  }

  return (
    <BasketContext.Provider value={{ addbasket, basket,removebasket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
