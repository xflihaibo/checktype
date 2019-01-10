# 类型检测

<div align=center>
<img src="./Image/logo.jpeg" width="160px" align="center"  />
</div>

一个简单轻巧的 javascript 类型检测库,欢迎 👏👏fork

### init(expression,type,boolean)

> 传入参数，获取类型

#### expression

> 要验证的表达式
> 类型：any
> 默认：空
> 返回值: string

#### type

> 预期的的表达式类型
> 类型：string
> 默认：空
> 返回值: boolean

#### boolean

> 是否需要验证 数组 对象的空
> 类型：boolean
> 默认：false
> 返回值: boolean

## 用法

```javascript
console.log(typeCheck.init('hello world'));
console.log(typeCheck.init(true));
console.log(typeCheck.init(1234));
console.log(typeCheck.init([1, 3, 4]));
console.log(typeCheck.init({a: '12', b: '12'}));

console.log(typeCheck.init('hello world', 'string'));
console.log(typeCheck.init(true, 'boolean'));
console.log(typeCheck.init(1234, 'number'));

console.log(typeCheck.init([1, 2, 3], 'array', true));
console.log(typeCheck.init([], 'array', true));
console.log(typeCheck.init({a: '12', b: '12'}, 'object', true));
console.log(typeCheck.init({}, 'object', true));
```
