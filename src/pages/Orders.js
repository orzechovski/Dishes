import React, { useContext } from "react";
import { OrderContext } from "../dataOrders";

import "../styles/Orders.css";

const Orders = () => {
  const [order] = useContext(OrderContext);
  const orders = order.map((order) => (
    <div key={Math.floor(Math.random() * 100)} className="order">
      <div className="order_mainPart">
        <h4>name : {order.name}</h4>
        <h6>time : {order.preparation_time}</h6>
      </div>
      <div className="order_secondPart">
        <h5>type: {order.type}</h5>
        {order.slices_of_bread ? <h5>slices of bread: {order.slices_of_bread}</h5> : null}
        {order.diameter ? <h5>pizza diamater: {order.diameter}</h5> : null}
        {order.spiciness_scale ? <h5>spiciness: {order.spiciness_scale}</h5> : null}
        {order.no_of_slices ? <h5>slices: {order.no_of_slices}</h5> : null}
      </div>
    </div>
  ));
  return <div className="orders">{orders.reverse().slice(0, 7)}</div>;
};

export default Orders;
