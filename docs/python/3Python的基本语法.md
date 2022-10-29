# 基本语法

## 程序的格式框架

- 通过严格的**缩进**来表示程序逻辑（增加了阅读性），一般缩进采用Tab键或者4个空格实现`（我喜欢4个空格,vscode会将Tab转化为4个空格）`，一般代码不需要缩紧，当表示分支，循环，函数，类等程序含义时才需要。

- 区分大小写

- 使用#表示一行注释的开始`(注释是给人看的，可以是任意内容，解释器会忽略掉注释)`

```python
a = "along"
age = 26

def hello(name,age):
    if name!='张三':
        print("你好"+name)
        print("你今年"+str(age)+"岁了，明年你就"+str(age+1)+"岁了")
    else:
        print("fine")

x = input("输入姓名")
年龄 = input("输入年龄")
hello(x,eval(年龄))

```

- 变量：其中a，age hello都是变量，
  1. 变量可采用字母，数字，下划线，中文等字符。
  2. 首字母不可为数字
  3. 中间不能有空格
- 保留字：其if，def 都是保留字。def是定义函数的标识。保留字还有:`and as assert break class continu def del elif else except False True finally for from global import in is lambda Node nonlocal not or pass raise return try while with yield`
- 表达式：= + - * / ++ -- == != // ** % 等。
- 输入/输出：input()/print()

## 控制结构

### 分支结构-if

```python
 if <条件>:
     <语句块1>
 elif <条件2>:
     <语句块2>
 ···
 else:
     <语句块3，都不满足时候>
```

### 循环结构

- for
  
```python
for <循环变量> in <遍历结构>:
    语句块
```

- while

```Python
while <条件>:
    <语句块>
```

- 循环控制break/continue 跳出循环/跳出当前循环

```python
import random
target = random.randint(1, 100)
guess_list = []
while True:
    guess = eval(input("请输入猜测的整数："))
    guess_list.append(guess)
    if guess > target:
        print("猜大了")
    elif guess < target:
        print("猜小了")
    else:
        print("你可太聪明了")
        break

logs = ''
for x in guess_list:
    logs += str(x)+" "

print("你一共猜测了"+str(len(guess_list))+"次数，记录为"+logs)
```

## 数据结构

### 数字

- 正数，浮点，复数
- 加减乘除，取余

### 字符串

- 拼接："字符串"+"字符串" ，"字符串"*n 翻倍
- 截取："截取"[m,n]
- 是否存在："字符串1" in "字符串2"，返回True/False
- 返回长度：len(x) 返回int
- 转换：str(x)  返回str
- 分割：str.split("符号") 返回list
- 替换：str.replace(old,new)
- 统计子串出现次数：str.coun t(sub) 返回int
- 大小写转换：str.lower(),str.upper()
- format():`print("你今年{}岁了，明年你就{}岁了".format(2,9))`

### 序列类型（list）

- 定义方式[,,,]或者list(x,y,z)
- 截取切片和字符串一样：`[m,n]`
- 添加：append(x)
- 插入：insert(i,x)
- 删除：pop(i)
- 删除第一个并返回：remove()
- 获取长度：len()

```python
a = ['safd','1231',123]
```

### 集合类型（set）

```python
s={"fasdf",123,0.9}

```

### 映射类型（dict）

```python
s={"a":123,"b":232}

```

## 函数

> 函数是一段有特定功能的，可以重用的代码断。

```Python
def <函数名>(<参数>):
    <函数体>
    return <返回值>
```
