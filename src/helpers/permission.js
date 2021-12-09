export function isPermitted(route) {
    let permissions = JSON.parse(localStorage.getItem('permissions'));
    if(route === "/products"){
        if(permissions.getProducts)
            return true;
    }else if(route === "/orders"){
        if(permissions.getOrders)
            return true;
    }else if(route === "/customers"){
        if(permissions.getCustomers)
            return true;
    }else if(route === "/reminders"){
        if(permissions.reminder)
            return true;
    }else if(route === "/discounts"){
        if(permissions.getDiscounts)
            return true;
    }else if(route === "/order/add"){
        if(permissions.addOrder)
            return true;
    }else if(route === "/employees" || route === "/employee/add"){
        if(permissions.getEmployees)
            return true;
    }else if(route === "/finance" || route === "/bills"){
        if(permissions.finance)
            return true;
    }else if(route === "/setting") {
        return true
    }
    else if(route === "/" || route === "/register" || route === "/dashboard" || route === "/account" || route === "/payment/delivery")
        return true;
    return false;   
}