export function isPermitted(route) {
    let permissions = JSON.parse(localStorage.getItem('permissions'));
    if(route === "/products"){
        if(permissions.find(per => per.no === 4 && per.status === true))
            return true;
    }else if(route === "/orders"){
        if(permissions.find(per => per.no === 2 && per.status === true))
            return true;
    }else if(route === "/customers"){
        if(permissions.find(per => per.no === 6 && per.status === true))
            return true;
    }else if(route === "/reminders"){
        if(permissions.find(per => per.no === 3 && per.status === true))
            return true;
    }else if(route === "/discounts"){
        if(permissions.find(per => per.no === 8 && per.status === true))
            return true;
    }else if(route === "/order/add"){
        if(permissions.find(per => per.no === 1 && per.status === true))
            return true;
    }else if(route === "/employees"){
        if(permissions.find(per => per.no === 7 && per.status === true))
            return true;
    }else if(route === "/finance"){
        if(permissions.find(per => per.no === 5 && per.status === true))
            return true;
    }else if(route === "/" || route === "/register" || route === "/dashboard")
        return true;
    return true;   
}