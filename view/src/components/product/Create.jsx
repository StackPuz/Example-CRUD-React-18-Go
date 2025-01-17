import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Service from './Service'

export default function ProductCreate(props) {
  
  const [ product, setProduct ] = useState({})

  function create(e) {
    e.preventDefault()
    product.Price = parseFloat(product.Price)
    Service.create(product).then(() => {
      props.history.push('/product')
    }).catch((e) => {
      alert(e.response.data)
    })
  }

  function onChange(e) {
    let data = { ...product }
    data[e.target.name] = e.target.value
    setProduct(data)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form method="post" onSubmit={create}>
            <div className="row">
              <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label" htmlFor="product_name">Name</label>
                <input id="product_name" name="Name" className="form-control" onChange={onChange} value={product.Name ?? '' } maxLength="50" />
              </div>
              <div className="mb-3 col-md-6 col-lg-4">
                <label className="form-label" htmlFor="product_price">Price</label>
                <input id="product_price" name="Price" className="form-control" onChange={onChange} value={product.Price ?? '' } type="number" />
              </div>
              <div className="col-12">
                <Link className="btn btn-secondary" to="/product">Cancel</Link>
                <button className="btn btn-primary">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}