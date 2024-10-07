import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Service from './Service'

export default function ProductIndex(props) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    get()
  }, [props.location])

  function get() {
    Service.get().then(response => {
      setProducts(response.data)
    }).catch(e => {
      alert(e.response.data)
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) =>
              <tr key={index}>
                <td className="text-center">{product.Id}</td>
                <td>{product.Name}</td>
                <td className="text-center">{product.Price}</td>
                <td className="text-center">
                  <Link className="btn btn-secondary" to={`/product/${product.Id}`} title="View"><i className="fa fa-eye"></i></Link>
                  <Link className="btn btn-primary" to={`/product/edit/${product.Id}`} title="Edit"><i className="fa fa-pencil"></i></Link>
                  <Link className="btn btn-danger" to={`/product/delete/${product.Id}`} title="Delete"><i className="fa fa-times"></i></Link>
                </td>
              </tr>
              )}
            </tbody>
          </table>
          <Link className="btn btn-primary" to="/product/create">Create</Link>
        </div>
      </div>
    </div>
  )
}