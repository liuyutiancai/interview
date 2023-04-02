// 浅拷贝
function clone1(target){
    let cloneTarget = {}
    for(const key in target){
        cloneTarget[key] = target[key]
    }
    return cloneTarget
}
// 深拷贝
// 考虑到要要拷贝的对象不知道有多少层深度，使用递归来解决
// 基础版本
// 1.如果是原始类型，无需继续拷贝，直接返回
// 2.如果是引用类型，创建一个新的对象，遍历需要克隆的对象，将需要克隆对象的属性执行深拷贝后依次添加到新对象上
function deepClone1(target){
    if(typeof target === 'object'){
        let cloneTarget = {}
        for(const key in target){
            cloneTarget[key] = deepClone1(target[key])
        }
        return cloneTarget
    }else {
        return target
    }
}
// 考虑数组
function deepClone2(target){
    if(typeof target === 'object'){
        let cloneTarget = Array.isArray(target) ? [] : {}
        for(const key in target){
            cloneTarget[key] = deepClone2(target[key])
        }
        return cloneTarget
    } else {
        return target
    }
}
// 循环引用 使用map和weakmap区别是什么(为什么要使用weakmap)
function deepClone3(target, map = new WeakMap()) {
    if(typeof target === 'object'){
        let cloneTarget = Array.isArray(target) ? [] : {}
        if(map.get(target)){
            return map.get(target)
        }
        map.set(target,cloneTarget)
        for(const key in target){
            cloneTarget[key] = deepClone3(target[key])
        }
        return cloneTarget
    }else {
        return target
    }
}