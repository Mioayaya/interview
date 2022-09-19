# 多行省略

# 1.私有属性
```css
p {
  height: 200px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
```

# 2.css伪元素
```css
p {
  height: 210px;
  position: relative;
  padding-right: 1em;
  text-align: justify;
}

p::before {
  content: "...";
  position: absolute;
  right: 0;
  bottom: 0;
}

p::after {
  content: "";
  background-color: blue;
  width: 1em;
  height: 1em;
  position: absolute;
  display: inline;
  right: 0;
}
```

# 3.背景渐变消失