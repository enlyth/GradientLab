<h1 align="center">
  <br>
  <a href="http://www.amitmerchant.com/electron-markdownify"><img src="https://gradientlab.space/static/media/logo.fe963339.png" alt="Markdownify" width="200"></a>
  <br>
  GradientLab
  <br>
  <h4 align="center"><a href="https://gradientlab.space/">https://gradientlab.space</a></h4>
</h1>
<p align="center">
  <a href="#what-is-this">What Is This?</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#usage">Usage</a> •
  <a href="#motivation">Motivation</a> •
  <a href="#dependencies">Dependencies</a> •
  <a href="#license">License</a>
</p>

## What is this?
GradientLab is a gradient picker made with React, aiming to let you choose aesthetically pleasing gradients quickly and intuitively.

Please note this is currently work in progress, and far from a final version.
 
## Screenshots
![Home](/media/screenshot-0.jpg)

![Settings](/media/screenshot-1.jpg)

## Usage
The UI should be quite intuitive and self explanatory. At the moment, there is no support for adjusting the location of the colours within the gradient.

You may define your own output function written in javascript, which will be evaluated and shown on the UI. The default output is a CSS linear gradient rule.

The application store and [chroma.js](https://github.com/gka/chroma.js/) objects are exposed in this function.

## Motivation
This was made foremost as a learning experience, but I thought it turned out quite well so I decided to polish it up a bit and open source it. 

At the moment, it focuses on LAB and LCH color spaces for interpolation, as they generally look the best to us aesthetically. See the following article for a bit more information:\
https://www.vis4.net/blog/2011/12/avoid-equidistant-hsv-colors/

## Dependencies
• [mobx-state-tree](https://github.com/mobxjs/mobx-state-tree) for state management\
• [mst-react-router](https://github.com/alisd23/mst-react-router) for routing\
• [pose](https://popmotion.io/pose/) for animations\
• [chroma.js](https://github.com/gka/chroma.js/) for colour calculations\
• [react-toastify](https://github.com/fkhadra/react-toastify) for notifications\
• [react-copy-to-clipboard](https://github.com/nkbt/react-copy-to-clipboard)

## License
MIT