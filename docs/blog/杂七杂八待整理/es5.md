# es5杂七杂八的题

## 面向对象

``` js
function Car(){}

function BMW(){}

BMW.call(Car)
BMW.prototype=Object.creat(Car)
BWM.prototype.constructor = BWM

```

## 深考buffer

``` js
const allocUnsafe = Buffer?Buffer.allocUnsafe:undefined;//判断是否有buffer
function cloneBuffer(buffer,isDeep){
    if(!isDeep){
        return buffer.slice()
    }
    const length = buffer.length()
    const result = allocUnsafe?allocUnsafe(length):new buffer.constructor(length);
}
