import React, { useContext } from "react";
import { FetchContext } from "../../context/FetchContext";
import { BasketContext } from "../../context/BasketContext";

const Home = () => {
  const { api } = useContext(FetchContext);
  const { addbasket } = useContext(BasketContext);
  return (
    <div>
      {api.map((x) => {
        return (
          <div key={x._id}>
            <div>{x.name}</div>
            <div>{x.price}</div>
            <button onClick={() => addbasket(x)}>Add</button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
