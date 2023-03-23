function  myInstanceof(obj, fun) {
    if(!['function','object'].includes(typeof obj) || obj === null) 
        return false
    let proto = obj.__proto__, prototype = fun.prototype
    while(proto != prototype){
        proto = proto.__proto__
        if(proto == null)
            return false
    }
    return true
}
console.log(myInstanceof('123', String));

