function Stack(){
    let items=[]
    this.push=function(elements){
        items.push(elements)
    }
    this.pop=function(){
        return items.pop();
    }
    this.peek=function(){
        return items[items.length-1]
    }
    this.isEmpty=function(){
        return items.length == 0
    }
    this.size=function(){
        return items.length
    }
    this.clear=function(){
        items = []
    }
    this.print=function(){
        console.log(items.toString())
    }
}
w = new Stack()
console.log(w)
