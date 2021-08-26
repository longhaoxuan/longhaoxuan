function porgram(numberA, stringOperate, numberB) {
  switch (stringOperate) {
    case "+":
      return Number(numberA) + Number(numberB);
      break;
    case "-":
      return Number(numberA) - Number(numberB);
      break;
    case "*":
      return Number(numberA) * Number(numberB);
      break;
    case "/":
        if (numberB==0) {
            return "除数不能为0"
        }
      return Number(numberA) / Number(numberB);
      break;
    default:
        return "格式错误"
      break;
  }
}

console.log(porgram("5","/","0"))

// 简单工厂模式

class Operation{
    constructor(numberA,numberB){
        this.numberA = numberA
        this.numberB = numberB
        this.result = 0
    }
    
    getResult(){
        return this.result
    }
}

class OperationAdd extends Operation{
    constructor(){
        super()
    }
    getResult(){
        return this.numberA+this.numberB
    }

}

class OperationFactory{
    // constructor(oper){
    //     this.oper=oper
    // }
    creatOper(oper){
        switch (oper) {
            case "+":
              return new OperationAdd
              break;
            case "-":
              return Number(numberA) - Number(numberB);
              break;
            case "*":
              return Number(numberA) * Number(numberB);
              break;
            case "/":
                if (numberB==0) {
                    return "除数不能为0"
                }
              return Number(numberA) / Number(numberB);
              break;
            default:
                return "格式错误"
              break;
          }
    }
}

a =  new OperationFactory.creatOper("+")
a.numberA=2
a.numberB=3
console.log(a.getResult())