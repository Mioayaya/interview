# label标签的作用
- 用来定义表单控件的关系，当用户选择该标签时，浏览器会自动将焦点钻到和标签相关的表单控件上

- for
```html
<label for="name"> 姓名: </label>
<input type="text" id="name" />
```

- accesskey
```html
<label for="hot" accesskey="c"> 热键</label>
<input type="text" id="hot" />
```
按下 alt+c 将焦点转到hot上

