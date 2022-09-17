# React 18更新了什么

## 1 render API => createRoot
```JavaScript
const app = document.getElementById('app');
// 之前
render(<App tab="home"/>,app);
// ------------------  //
// 之后
const root = createRoot(app);
root.render(<App tab="home"/>);
```

## 2. Automatic Batching
- 自动批量更新 
  - promise
  - setTimeout 等state的更新

## 3. Concurrent 并发渲染
- React 18 之前 渲染时线性的，且触发后无法停止
- React 18 之后 
  - 渲染可以被终端，继续，终止的
  - 渲染可以在后台进行
  - 渲染可以有优先级
  - 不是新功能，时一种新的底层机制

## 4. Transitions 区别渲染
- 区别渲染优先级
- 应对同时又大量渲染的情况

## 5. suspense
- 两个请求，可以先加载先请求完毕的值
- 边获取边渲染

