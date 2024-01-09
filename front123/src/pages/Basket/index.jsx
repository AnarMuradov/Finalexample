import React, { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'

const Basket = () => {
    const {basket,removebasket} = useContext(BasketContext)
  return (
    <section>
    {basket.map((x) => {
        return (
          <div key={x._id}>
            <div>{x.name}</div>
            <div>{x.price}</div>
            <div>{x.count}</div>
            <button onClick={()=>removebasket(x)}>Remove</button>
          </div>
        );
      })}
    </section>
  )
}

export default Basket