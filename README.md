# GradientLab

GradientLab is a gradient picker made with together with React and [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree). Some fancy animations with the help of [pose](https://popmotion.io/pose/) are thrown in as well.

Please note this is currently work in progress, and far from a final version.

At the moment, it focuses on LAB and LCH color spaces for interpolation, as they generally look the best to us aesthetically. See the following article for a bit more information:\
https://www.vis4.net/blog/2011/12/avoid-equidistant-hsv-colors/

It features the option to define your own output function written in javascript, which will be evaluated and shown on the UI. The application store and [chroma-js](https://github.com/gka/chroma.js/) objects are exposed in this function.
 
## Screenshots
![Home](/media/screenshot-0.jpg)

![Settings](/media/screenshot-1.jpg)

## Demo
Demo will be deployed soon.

## License
MIT