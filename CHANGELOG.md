# Change Log

## 1.1.0

Switch to using refs and intead of DOM elements! There were issues when, sometimes, the component would mount but the width and height would remain undefined. This happened because `element` was still null or undefined now this is fixed by using refs dirrectly.

## 1.0.9

Update react and typescript to latest versions
Removed build files from .gitignore since they were not published on npm

## 1.0.4

Fix invalid hook, moved react as dev dependency

## 1.0.3

Change readme title and add changelog :)

## 1.0.2

Fix bad module name in typing file

## 1.0.1

Change initial value of `width` and `height` from 0 to `undefined`

## 1.0.0

Initial version
