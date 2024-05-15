import React from 'react'
import Link from 'next/link';
import moment from 'moment';
import { useRouter } from 'next/router';

const CustomerDetailsPage = ({ customerData }) => {
  const router = useRouter();

  const deleteHandler = async () => {
    const res = await fetch(`/api/customer/${customerData._id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data.status === "success") router.push("/");
  };


  return (
    <div className="customer-detail">
      <h4>Customer Details</h4>
      <div className="customer-detail__main">
        <div className="customer-detail__item">
          <span>Name: </span>
          <p>{customerData.name}</p>
        </div>
        <div className="customer-detail__item">
          <span>Last Name: </span>
          <p>{customerData.lastName}</p>
        </div>
        <div className="customer-detail__item">
          <span>Email: </span>
          <p>{customerData.email}</p>
        </div>
        <div className="customer-detail__item">
          <span>Phone: </span>
          <p>{customerData.phoneNumber}</p>
        </div>
        <div className="customer-detail__item">
          <span>Address: </span>
          <p>{customerData.address}</p>
        </div>
        <div className="customer-detail__item">
          <span>Postal Code: </span>
          <p>{customerData.postalCode}</p>
        </div>
        <div className="customer-detail__item">
          <span>Date: </span>
          <p>{moment(customerData.date).utc().format("YYYY-MM-DD")}</p>
        </div>
      </div>
      <div className="customer-detail__products">
        <p>Name</p>
        <p>Price</p>
        <p>Qty</p>
        {customerData.products.map((product, index) => (
          <React.Fragment key={index}>
            <p>{product.name}</p>
            <span>{product.price}</span>
            <span>{product.qty}</span>
          </React.Fragment>
        ))}
      </div>
      <div className="customer-detail__buttons">
        <p>Edit or Delete?</p>
        <button onClick={deleteHandler}>Delete</button>
        <Link href={`/edit/${customerData._id}`}>Edit</Link>
      </div>
    </div>
  );
}

export default CustomerDetailsPage