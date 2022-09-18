# meta 标签由name content熟悉定义，用来描述网页文档的熟悉
比如网页的作者、网页描述、网页关键词等

- charset: HTML文档的编码类型
```html
<meta charset="UTF-8">
```
- keywords: 页面关键词
```html
<meta name="keywords" content="关键词"/>
```
- description：页面描述
- refresh: 页面刷新，重定向
```html
<meta http-equiv="refresh" content="0;url="/>
```
- viewport 适配移动端
```html
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
```
  - content参数
    - width 宽度
    - height 高度
    - initial-scale 初始缩放比例
    - maximum-scale 最大缩放比例
    - minimum-scale 最小缩放比例
    - user-scalable 是否允许用户缩放
