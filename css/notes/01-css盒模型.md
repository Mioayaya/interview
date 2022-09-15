# 01-css盒模型

## 是什么>
浏览器的渲染引擎会根据标准，将所有元素表示为一个个矩形的盒子  
一个盒子由四个部分组成，content、padding、border、margin

## 标准盒模型
盒子总宽度 = width + padding + border + margin  
盒子总高度 = height + padding + border + margin  
width/height 是盒子的内容大小，盒子的真实大小就变成了 (width/height + padding + border) 也就是调整padding和border 盒子大小会变化    
## IE 怪异盒子模型
盒子总宽度 = width + margin  
盒子总高度 = heigth + margin  
需要设置 box-sizing   
其中 width/height 包括了 padding和border的值

