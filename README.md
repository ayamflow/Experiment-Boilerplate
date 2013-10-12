# Experiment Boilerplate

A HTML5 Boilerplate for creating JS/Canvas experiments.

It includes a set of useful libraries availables through Github or Google code, and some basic custom classes for handling window size or scene.

## Included
* [RequireJS](requirejs.org) Easily handle AMD modules
* [TinyColor](bgrins.github.io/TinyColor/) Convenient color manager (HSL, RGB, …)
* [requestAnimationFrame shim](https://gist.github.com/ozke/6209435) "for smart animating"
* [dat.gui](http://workshop.chromeexperiments.com/examples/gui/#1--Basic-Usage) A nice UI to live-edit variables
* [Stats.js](https://github.com/mrdoob/stats.js/) FPS/MS overlay
* [Pixi.js](https://github.com/GoodBoyDigital/pixi.js) If needed, for a simple WebGLRenderer

## Helpers
* Resize.js A very simple helper to manage Window and access window size.
* Playground.js The global controller.

## Next to come
* Basic Object Pool
* Basic Particle class
* More helpers (Mouse, Extend/Class, …)

## About the current version
The first version included FlowUtils, a tiny library provinding a set of convenient functions for creating color range or calculating distance between points. Since I haven't worked a lot on it recently, I might drop it and just use TinyColor and create some Math helpers functions.