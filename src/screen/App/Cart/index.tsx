import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../redux/store'
import getCartListAction from '../../../redux/getCart/middleware'
import { useSelector } from 'react-redux'
import { cartSelector } from '../../../redux/getCart/cartSlice'

const Cart = () => {
  const dispatch = useAppDispatch()
  const cartData = useSelector(cartSelector)
  useEffect(() => {
    dispatch(getCartListAction())
  }, [])
  
  console.log(cartData.cart);
  
  return (
    <div className='container-fluid'>
      cart List
    </div>
  )
}

export default Cart
