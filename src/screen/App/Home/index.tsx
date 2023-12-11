import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../redux/store'
import { logoutAction } from '../../../redux/auth/middleware'
import getAllProductAction from '../../../redux/getProduct/middleware'
import { useSelector } from 'react-redux'
import { productSelector } from '../../../redux/getProduct/productSlice'
import { Link } from 'react-router-dom'

const Home = () => {
  const allProduct = useSelector(productSelector)
  const dispatch = useAppDispatch()
  const handleLogout = () => {
    dispatch(logoutAction(true))
  }
  useEffect(() => {
    dispatch(getAllProductAction())
  }, [dispatch])

  console.log(allProduct);

  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-between'>
        <div className='h3 text-dark'>Home</div>
        <div className='pt-2' >
          <button className='btn btn-dark' onClick={handleLogout}>Logout</button>
          <Link to='/cart'><button className='btn btn-success mx-3'>Cart</button></Link>
        </div>
      </div>
      <div className='d-flex'>
        {allProduct && allProduct.product.map((item) => (
          <div className="card m-5" style={{ width: "18rem" }} key={item._id} >
            <div className="card-body" >
              <h5 className="card-title">{item.productName}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">Price : {item.price}</p>
              <a href="#" className="btn btn-primary">Add To Cart</a>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default Home
