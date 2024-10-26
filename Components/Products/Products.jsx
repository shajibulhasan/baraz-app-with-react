import React from 'react';
import './Products.css';

const Products = (props) => {
    const products = props.products
    const title = props.title
    return (
        <div className="bg-brand">
        <div className='container py-3'>
            <h2 className='fs-5 ps-1'>{title}</h2>
            <div className="d-flex flex-wrep flashsale-container row">
            {
                products.map(data =>
                    <div className="col-lg-2 col-md-4 col-sm-6 p-2 card-body">
                        <img src={data.image} className='img-fluid' alt="flash sale product" />
                        <p className='card-title'>{data.name}</p>
                        <h3 className="card-price"> ৳{data.price}</h3>
                        <h4 className="card-text">৳{data.prvePrice}<strike className="text-muted">-{data.discount}%</strike></h4>
                    </div>
                )
            }
            </div>
        </div>
    </div>
    );
};

export default Products;