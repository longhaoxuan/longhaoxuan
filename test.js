// const allocUnsafe = Buffer?Buffer.allocUnsafe:undefined;//判断是否有buffer
// function cloneBuffer(buffer,isDeep){
//     if(!isDeep){
//         return buffer.slice()
//     }
//     const length = buffer.length()
//     const result = allocUnsafe?allocUnsafe(length):new buffer.constructor(length);
//     buffer.copy(result)
//     return result
// }

// var a = Buffer.from('along')
// var c = Buffer.allocUnsafe(a.length)
// c.write("sdf")
// var b = a.copy(c)
// console.log(b.toString())


const allocUnsafe = Buffer?Buffer.allocUnsafe:undefined;//判断是否有buffer
function cloneBuffer(buffer,isDeep){
    if(!isDeep){
        return buffer.slice()
    }
    const length = buffer.length
    const result = allocUnsafe?allocUnsafe(length):new buffer.constructor(length);
    debugger
    buffer.copy(result)
    return results
}

var a = Buffer.from('along')
var b = Buffer.from(a)
// b = cloneBuffer(a,true)
b.write("afa")
a.write("aa")
console.log(b.toString())
console.log(a.toString())
