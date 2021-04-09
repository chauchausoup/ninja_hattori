import React, { useEffect, useState } from "react";
import axios from "axios";

import CardSingle from "../card/CardSingle";

export default function CardList() {
  //our list of card is updated in this react state

  const [cardValues, setCardValues] = useState([]);

  //   {myData:[
  //     {
  //       id: "1",
  //       firstName: "Anish",
  //       username: "ans",
  //       email: "abc@email.com",
  //       address: {
  //         street: "Kulas Light",
  //         suite: "123 suite",
  //         city: "Pokhara",
  //         zipcode: "44567",
  //         geo: {
  //           lat: "123123",
  //           lng: "123123",
  //         },
  //       },
  //     },
  //   ]}

  //    useEffect(() => {
  //     await axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  //       const persons = res.data;
  //       console.log(persons)
  //       setCardValues(persons)
  //       console.log(cardValues)
  //     });
  //   },[]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setCardValues(result.data);
    };
    fetchData();
  },[]);


/* card list will be the parent of card */

  return (
    <div>
      <CardSingle />
    </div>
  );
}
