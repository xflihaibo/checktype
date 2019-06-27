# 类型检测

<div align=center>
<img src="./Image/logo.jpeg" width="160px" align="center"  />
</div>

一个简单轻巧的 javascript 类型检测库,欢迎 👏👏fork

### init(expression,type,boolean)

> 传入参数，获取类型 判断

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
> true:严格模式
> false：非严格模式 string 类型 ‘’为 true，number 0 为 true
> 返回值: boolean

## 用法

```javascript
typeCheck.init('hello world');
typeCheck.init(true);
typeCheck.init(1234);
typeCheck.init([1, 3, 4]);
typeCheck.init({a: '12', b: '12'});

typeCheck.init('hello world', 'string');
typeCheck.init(true, 'boolean');
typeCheck.init(1234, 'number');

typeCheck.init([1, 2, 3], 'array', true);
typeCheck.init([], 'array', true);
typeCheck.init({a: '12', b: '12'}, 'object', true);
typeCheck.init({}, 'object', true);
```
