import React from 'react'
import { Link } from 'react-router-dom';

export const Dashboard = ({show, handleClose}) => {
    return (
        <div>
            {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    Content for the offcanvas goes here. You can place just about any Bootstrap component or custom elements here.
  </div>
</div> */}
            <div class="offcanvas show offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                <ul>
                            <li>
                                <Link to="/order/add">ثبت سفارش</Link>
                            </li>
                            <li>لیست سفارشات</li>
                            <li>یادآوری</li>
                            <li>
                                <Link to="/products">محصولات</Link>
                            </li>
                            <li>مالی</li>
                            <li>مشتریان</li>
                            <li>حساب کاربری</li>
                            <li>تنظیمات</li>
                            <li>خروج</li>
                        </ul>   
                </div>
            </div>
        </div>
    )
}
