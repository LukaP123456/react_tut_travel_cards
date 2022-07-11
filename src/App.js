import React from "react";

import Header from "./Components/Header";
import Card from "./Components/Card";
import data from "./Data"
//asdasda
export default function App(){

    const cardData = data.map(function (item){
        return(
            <Card
                key={item.id}
                {...item}
            />
        )
    })


  return(
      <div>
        <Header/>
          <section>
                {cardData}
          </section>
      </div>

  )
}