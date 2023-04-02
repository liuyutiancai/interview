// 快速排序
function quickSort(array,left,right){
    if(Object.prototype.toString.call(array).slice(8,-1) === 'Array' && typeof left === 'number' && typeof right === 'number'){
        if(left >= right) return
        let target = array[left]
        let l = left,r = right
        while(l < r){
            while(l < r && target <= array[r]){
                r--
            }
            array[l] = array[r]
            while(l < r && target >= array[l]){
                l++
            }
            array[r] = array[l]
        }
        array[l] = target
        quickSort(array,left,r - 1)
        quickSort(array,r + 1, right)
    }else {
        console.log('type error');
    }
}
let arr = [3,44,38,5,47,15,36,26,27,2,46,4,19,50,48]
// console.log(Object.prototype.toString.call([1,2,3,4,5]).slice(8,-1));
// console.log(typeof 5);
quickSort(arr,0,arr.length - 1);
console.log(arr);