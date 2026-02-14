import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import "./CartCard.css"
import { RemoveItem } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

function CartCard({ name, price, image, id }) {
    const dispatch = useDispatch()
    return (
        <div className='CartCard'>
            <div className="left-card">
                <img src={image} alt="" />
                <div className="name-price">
                    <span>{name}</span>
                    <span>{price}</span>
                </div>
            </div>
            <div className="right-card">
                <button onClick={() => {
                    dispatch(RemoveItem(id))
                    alert("Product Removed Successfully..")
                }
                }>Remove <RiDeleteBin6Line /></button>



            </div>
        </div>
    )
}

export default CartCard
