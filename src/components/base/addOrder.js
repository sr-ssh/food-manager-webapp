import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productActions } from '../../actions';


export const AddOrder = () => {
    
    const [order, insertOrder] = useState([])
    const [customer, setCustomer] = useState({})
    const [totalPrice, insertPrice] = useState(0)
    const dispatch = useDispatch()
    const products = useSelector(state => state.getProducts.product)

    let orderHandler = (e, product) => {
        e.preventDefault();
        insertPrice(totalPrice + parseInt(product.sellingPrice))
        let newOrder = {
          _id: product._id,
          name: product.name,
          quantity: 1,
          buyingPrice: product.buyingPrice,
          sellingPrice: product.sellingPrice,
        };
        const isOrderPresent = order.some((item) => item._id === product._id);
        if (isOrderPresent) {
          const updatedOrder = order.map((item) => {
            if (item._id === product._id) {
              return {...item, quantity: ++item.quantity};
            }
            return item;
          });
          insertOrder(updatedOrder);
        } else {
          insertOrder((prevOrderState) => [...prevOrderState, newOrder]);
        }
    };

    let productHandler = (e) => {
        e.preventDefault()
        dispatch(productActions.getProducts())
    }

    let handleChange = (e) => {
        e.preventDefault()
        console.log('handleChange')
    }

    let formHandler = (e) => {
        e.preventDefault()
        console.log('formHandler')
    }

    return (
        <div>
        {console.log(order)}
            <form className="text-center register-form" onSubmit={formHandler} >
                <label htmlFor="mobile">شماره موبایل</label>
                <input className="text-right" type="number" name="mobile" id="mobile" placeholder="شماره موبایل" onChange={handleChange} required /><br />
                <label htmlFor="name">نام</label>
                <input className="text-right" type="text" name="name" id="name" placeholder="نام" onChange={handleChange} required /><br />
                <label htmlFor="family">نام خانوادگی</label>
                <input className="text-right" type="text" name="family" id="family" placeholder="نام خانوادگی" onChange={handleChange} required /><br />
                <label htmlFor="birthDate">تاریخ تولد (اختیاری)</label>
                <input className="text-right" type="date" name="birthDate" id="birthDate" placeholder="(اختیاری) تاریخ تولد" onChange={handleChange} /><br />
                <label htmlFor="address">آدرس</label>
                <input className="text-right" type="text" name="address" id="address" placeholder="آدرس" onChange={handleChange} /><br />
                <h3>سبد خرید:</h3>
                <button onClick={(e) => productHandler(e)} style={{"display": "inline"}}>برای نمایش محصولات کلیک کنید</button>
                <div>
                    {products 
                        ? products.map(item =>  {
                            return(
                                <h4 onClick={(e) => orderHandler(e, item)} key={item.name}>{item.name} {item.sellingPrice} تومان</h4>                            )    
                        })  
                        : null
                    }
                </div>
                <div>
                    <h3 style={{"borderTop": "4px solid black"}}>سفارشات</h3>
                    {
                        order.length 
                        ? order.map(item => {
                            return (
                                <div style={{"margin": "10px"}}>
                                <span>{item.name}</span>
                                <span>{item.quantity} * {item.sellingPrice}</span>
                                </div>
                            )
                        }) 
                        : <span>هیچ محصولی انتخاب نشده است</span>
                    }
                </div>
                <span>جمع کل</span> <span>{totalPrice}</span>
                <h5>تاریخ یادآوری</h5>
                <input type="number" placeholder="5 روز" required />
                <div>
                    <button type="submit">ثبت</button> <br />
                </div>
            </form>
        </div>
    )
}
