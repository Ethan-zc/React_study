# React学习

- ### React元素渲染

  ```let h1 = <h1>helloworld</h1>;```

  使用JSX的写法，可以创建JS元素对象

  **注意： JSX元素对象，或者组件对象必须只有一个根元素（根节点）**

- ### React JSX

  优点：

  1. JSX执行更快，编译为Javascript代码时进行了优化（虚拟DOM）
  2. 类型更安全，编译过程如果出错就不能编译，及时发现错误
  3. JSX编写模板更加简单简单快速

  

  #### 注意：

  1. JSX必须要有一个根节点。
  2. 正常的普通HTML元素需要小写。如果是大写，默认认为是组件。

  

  **JSX内部表达式{{ ? : }}**

  - 一个括号只有一个表达式

  1. 由HTML元素构成
  2. 中间如果需要插入变量用{}
  3. {}中间可以使用表达式
  4. {}中间表达式中可以使用JSX对象
  5. 属性和HTML内容一样都是用括号来插入

- ###  JSC.STYLE 样式

  - ###### Class， style中不可以存在多个class属性	

  - style样式中，如果存在多个单纯的属性组合，第二个单词开始，首字母大写，或者用引号引起来，否则会报错

- ### React组件

  ​	函数式与类组件的区别和使用，函数式比较简单，一般用于静态没有交互事件内容的页面，

  ​	类组件一般又称为动态组件，一般会有交互或者数据修改的操作。

  ​	复合组件：组件中又有其他的组件，复合组件中，既可以有类组件又可以有函数组件。

- ### Props

  - 父传递给子组件的数据，单向流动，不能子传递给父。

  - props的传值，可以是任意的类型，

  - props可以设置默认值

    - HelloMessage.defaultProps = { name : "Zichen", msg:"HelloWorld" }

  - 注意：props可以传递函数，props可以传递父元素的函数，就可以修改父元素的状态，从而达到传递数据给父元素。

  - #### React 数据传递：子传父

    调用父元素的函数从而操作父元素的数据，从而实现数据从子元素传递至父元素

- ### React 事件

  - 特点

    1. React 事件绑定事件的命名，驼峰命名法。
    2. {}，传入一个函数，而不是字符串

    ``````javascript
    <button onClick={this.sendData}>传递Helloworld给父元素</button>
    ``````

    事件对象：React返回的事件对象是代理的原生的事件对象，如果想要查看事件对象的具体值，必须直接输出事件对象的属性

    **原生:阻止默认行为时，可以直接返回return false**

    **React: 阻止默认行为时，必须使用e.preventDefault()**

    #### React事件传传参数

    ``````javascript
    {/* 使用ES6剪头函数传递参数 */}
    <button onClick={(e)=>{this.parentEvent1('msg:Helloworld',e)}}>提交</button>
    
    {/* 不使用ES6剪头函数传递多个参数的方式 */}
    <button onClick={function(e){this.parentEvent1('不使用es6,msg:Helloworld',e)}.bind(this)}>提交</button>
    ``````

    

- ### React条件渲染

  React中条件渲染即和JavaScript中的条件运算，例如：if...else...三元运算符等。

  1. 直接通过条件运算返回要渲染的JSX对象
  2. 通过条件运算得出JSX对象，再将JSX对象渲染到模板中

- ### React列表渲染

  将列表的内容拼装成数组，放置到模板当中

  将数据拼装成JSX数组对象 

  在使用数组的map方法，对每一项数据按照JSX的形式进行加工，最终得到一个每一项都是JSX对象的数组，再将数组渲染到模板中。

  Key值需要放置到每一项中。

- ### JavaScript的for循环

// let arr = [1,2,3,4,5,6]
      // //对数组直接进行循环，相当于直接for循环，没有返回值
      // let result = arr.forEach((item, index,arr)=>{
      //   console.log(item)
      //   console.log(index)
      //   console.log(arr)
      //   return item
      // })

      // console.log(result)


      let arr2=['香蕉','苹果','雪梨']
      //map对数组的每一项进行加工，加工完成之后返回一个新的数组
      let result2 = arr2.map((item,index,arr)=>{
        let str = index + item + index
        return str
      })
    
      // console.log(result2)
    
      let arr3 = [1,2,3,4,5,6,7,8,9]
      //filter过滤，就是将想要的内容保留，不要的内容去除，最终返回想要的内容的数组
    
      let result3 = arr3.filter((item, index)=>{
        if (item % 2 == 0) {
          //通过返回true还是false进行选择，true就是想要，false就是去除
          return true
        }else {
          return false
        }
      })
    
      // console.log(result3)
      //reduce是对整个数组进行整合，比如将数组里所有的数字进行相加
      //将数组的每一项内容进行整合后，返回一个内容
      let arr4 = [1,2,3,4,5,6,7,8,9]
      let result4 = arr4.reduce((pre,next,index)=>{
        // console.log(pre)
        // console.log(next)
        // console.log(index)
        return pre+next
      },0)
    
      // console.log(result4)


      //for...in... 主要是为了遍历对象的，不适用于遍历数组 for (key in object)，里面的每一项是key
      //for...of... 可以用来遍历数组，类数组的对象，字符串，set/map,generator，for (item of arr)里面的每一项是内容


      let obj = {
        name:"Zichen",
        type:"cool",
        content:"front-end"
      }
    
      for(key in obj) {
        // console.log("key: " + key+";value: " + obj[key])
      } 
    
      let arr = ['范冰冰','李晨','鹿晗']
      //for of循环的是每一项
      for(let item of arr) {
        console.log(item)
      }
- ### React生命周期

  生命周期即是组件从实例化到渲染到最终从页面中销毁，整个过程就是生命周期，在这个生命周期中，我们有许多可以调用的事件，也俗称为钩子函数

  生命周期的三个状态：

1. Mount：挂载，将组件插入到DOM对象中
2. Update：将数据更新到DOM中
3. Unmountiing：将组件移出DOM



生命周期中的钩子函数（方法、事件）



**ComponentWillMount: 组件将要渲染**：用来做AJAX，添加动画前的类

**ComponentDidMount: 组件渲染完毕**：添加动画

**ComponentWillReceiveProps: 组件将要接收props数据**，查看接收props的数据是什么

**ShouldComponentUpdate: 在组件接收到新的状态state或者props，判断是否要更新。返回布尔值**

**ComponentWillUpdate: 组件将要更新**：动画，请求，发送

**ConponentDidUpdate: 组件完成更新**：

**ComponentWillUnmount: 组件将要卸载**：数据提交后台之类的





### 表单输入

**注意：必须绑定value值与oncChange事件**

- ### React插槽

在组件中写入内容，这些内容是可以被识别和控制的。React需要自己开发支持插槽的功能。

原理：

组件中写入的HTMl，可以传入到props中。

组件中的HTML内容直接全部插入

- ### React路由

根据不同的路径，显示不同的组件（内容），React使用的库react-router-dom

安装

``````
npm install react-roiter-dom
``````



ReactRouter三大组件：

Router: 所有路由组件的根组件（底层组件），包裹路由规则的最外层容器。

​			属性：basename->设置跟此路由根路径，Router可以在一个组件中写多个。

Route: 路由规则匹配组件，显示当前规则对应的组件

Link: 路由跳转的组件



注意：如果要精确匹配，那么可以再route上设置exact属性

Link组件可以设置to属性来进行页面的跳转，to属性可以直接写路径的字符串，也可以通过一个对象进行路径的设置。

### 重定向组件

如果访问某个组件时，如果有重定向组件，那么就会修改页面路径，使得页面的内容显示为所定向路径的内容。

### Switch组件

让switch组件内部的route只匹配一个，只要匹配到了，剩余的路由规则将不再继续匹配

- ### Redux

解决React数据管理（状态管理），用于中大型，数据比较庞大，组件之间数据交互多的情况下使用。如果你不知道是否需要使用Redux，那么你就不需要它

- 解决组件的数据通信。

- 解决数据和交互较多的应用

  

Redux只是一种状态管理的解决方案！



**Store**:数据仓库，保存数据的地方。

**State**: 是一个对象，数据仓库里的所有数据都放到一个State里面。

**Action**:一个动作，可以触发数据改变的方法。

**Dispatch**:将动作触发成方法。

**Reducer**:是一个函数，通过获取动作，改变数据，生成一个新的**state**，从而改变页面

- ### React-redux

安装

``````
npm install react-redux --save
``````

概念：

**Provider**组件：自动将store里的state和根组件进行关联。

**MapStateToProps**：这个函数用于将store的state映射到组件的props里

**MapDispatchToProps**：将store中的dispatch映射到组件的props里，实现了方法的共享

**connect**方法：将组件和数据（方法）进行连接。



使用：

**初始化数据，实例化得到store**



数据的获取，数据的修改

- 将state映射到组件的props中
- 将修改数据的方法映射到组件的props里

- ### UI框架 Ant 蚂蚁

### UI框架 Ant 蚂蚁

安装使用

`````
npm install antd-mobile --save
`````

全部导入样式和JS：

``````
import {Button} from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css';
``````

按需导入:

- 安装插件

  ``````
  npm install babel-plugin-import --save
  ``````

- 配置

  ``````
  npm run eject
  ``````

  

  在package.json里配置,自动import，直接用

  ``````
  "plugins": [
        ["import", { "libraryName": "antd-mobile", "style": "css" }] 
      ]
  ``````

  

  