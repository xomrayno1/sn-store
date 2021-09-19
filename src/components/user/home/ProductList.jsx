import React from 'react';
import PropTypes from 'prop-types';

ProductList.propTypes = {
    products: PropTypes.array
};

ProductList.defaultProps ={
    products: []
}

function ProductList({ products }) {
    return (
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {
                products.map(item => (
                    <div className="col mb-5" key={item.id}>
                        <div className="card h-100">
                            <div className="badge bg-dark text-white position-absolute" style={{top : "0.5rem", right: "0.5rem"}}>Sale</div>
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{item.name}</h5>
                                    <span className="text-muted">{item.price} VNĐ</span>
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View</a></div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ProductList;