import React from "react";
import "./Customer.css";
import unilever from "../../assets/Images/Uni.webp";
import Whirlpool from "../../assets/Images/Whir.webp";
import Mount from "../../assets/Images/Moun.webp";
import Moura from "../../assets/Images/Mou.webp";

const customers = [
  { id: 1, image: unilever },
  { id: 2, image: Whirlpool },
  { id: 3, image: Mount },
  { id: 4, image: Moura },
];

function Customer() {
  return (
    <>
      <h5 className="customer">Our Customers</h5>
      <div className="img-container">
        {customers.map((customer) => (
          <img
            key={customer.id}
            src={customer.image}
            className="img"
            alt={`Customer ${customer.id}`}
          />
        ))}
      </div>
    </>
  );
}

export default Customer;
