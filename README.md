# ng-blueimp-gallery
Angular Directive for Blueimp Gallery

## Demo
[Angular blueimp Gallery Demo](https://alaminopu.github.io/ng-blueimp-gallery/)


# Dependencies
1. ![AngularJS](https://github.com/angular/angular.js)
2. ![blueimp-gallery](https://github.com/blueimp/Gallery)

> Make sure you load all dependencies before loading **ng-blueimp-gallery** files


## Setup

Copy the **css**, **img** and **js** directories from Blueimp gallery to your website.

Include the Gallery stylesheet in the head section of your webpage:

```html
<link rel="stylesheet" href="css/blueimp-gallery.min.css">
```

Include the Gallery script at the bottom of the body of your webpage:

```html
<script src="js/blueimp-gallery.min.js"></script>
```


Download `ng-blueimp-gallery.js` file from this repo and add it at the bottom of the body of your webpage. :

```html
<script src="js/ng-blueimp-gallery.js"></script>
```


Add `ui.blueimp.gallery` module to your app's dependencies.

```
var app = angular.module('app', ['ui.blueimp.gallery']);
```


# Create gallery

```
<ui-gallery list="list"></ui-gallery>
```

pass the `list` of images from a controller.