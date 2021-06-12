import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { productActions, orderActions  } from '../../actions';


export const AddOrder = () => {
    
    const [order, insertOrder] = useState([])
    const [customer, setCustomer] = useState({})
    const [totalPrice, insertPrice] = useState(0)
    const dispatch = useDispatch()
    const products = useSelector(state => state.getProducts.product)

    let newOrder = (e, product) => {
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

    let removeOrder = (e, product) => {
        e.preventDefault()
        insertPrice(totalPrice - parseInt(product.sellingPrice))
        let updatedOrder = order.map((item) => {
            if (item._id === product._id) {
                return {...item, quantity: --item.quantity};
            }
            return item;
        });
        
        if(product.quantity === 0) {
            updatedOrder = updatedOrder.filter(item => item._id !== product._id)
        }
        
        insertOrder(updatedOrder)
    }

    let productHandler = (e) => {
        e.preventDefault()
        dispatch(productActions.getProducts())
    }

    let handleChange = (e) => {
        e.preventDefault()
        setCustomer({...customer, [e.target.name]: e.target.value})
    }

    let formHandler = (e) => {
        e.preventDefault()
        if(order.length) {
            dispatch(orderActions.addOrder(order, customer))
        } else {
            console.log('empty order can not be sent')
        }
    }

    return (
        <div>
            <form className="text-center register-form" onSubmit={formHandler} >
                <label htmlFor="mobile">شماره موبایل</label>
                <input className="text-right" type="number" name="mobile" id="mobile" placeholder="شماره موبایل" onChange={handleChange} required /><br />
                <label htmlFor="name">نام</label>
                <input className="text-right" type="text" name="name" id="name" placeholder="نام" onChange={handleChange} required /><br />
                <label htmlFor="family">نام خانوادگی</label>
                <input className="text-right" type="text" name="family" id="family" placeholder="نام خانوادگی" onChange={handleChange} required /><br />
                <label htmlFor="birthday">تاریخ تولد (اختیاری)</label>
                <input className="text-right" type="date" name="birthday" id="birthday" placeholder="(اختیاری) تاریخ تولد" onChange={handleChange} /><br />
                <label htmlFor="address">آدرس</label>
                <input className="text-right" type="text" name="address" id="address" placeholder="آدرس" onChange={handleChange} /><br />
                <h3>سبد خرید:</h3>
                <button onClick={(e) => productHandler(e)} style={{"display": "inline"}}>برای نمایش محصولات کلیک کنید</button>
                <div>
                    {products 
                        ? products.map(item =>  {
                            return(
                                <div key={item.name}>
                                    <span>{item.name} {item.sellingPrice} تومان</span>  
                                    <button onClick={(e) => newOrder(e, item)}>اضافه کردن</button>    
                                </div>                 
                                 )    
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
                                <div key={item.name} style={{"margin": "10px"}}>
                                    <span>{item.name}</span>
                                    <span>{item.quantity} * {item.sellingPrice}</span>
                                    <button onClick={(e) => removeOrder(e, item)} >حذف سفارش</button>
                                </div>
                            )
                        }) 
                        : <span>هیچ محصولی انتخاب نشده است</span>
                    }
                </div>
                <span>جمع کل</span> <span>{totalPrice}</span>
                <h5>تاریخ یادآوری</h5>
                <input onChange={handleChange} name="reminderDay" type="number" placeholder="5 روز" required />
                <div>
                    <button type="submit">ثبت</button> <br />
                </div>
            </form>
        </div>
    )
}
