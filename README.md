<p align="center"><img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/pebjs.png" width="299.2" height="137.6" title="Peb.js" alt="Peb.js Icon" /></p>

---

**We are about to rebuild the community of this project and rename this project. We are about to stop the update of Peb.js, but there will be exactly the same alternatives**

**Pecis is out! Use Pecis now! :D**

---

<p align="center">
  <a href="https://github.com/TechPot-Studio/peb.js/commits/master" title="Commit Activity"><img src="https://img.shields.io/github/commit-activity/m/TechPot-Studio/peb.js?logo=git&logoColor=white&style=flat-square" /></a>
  <a href="https://www.codacy.com/gh/TechPot-Studio/peb.js/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=TechPot-Studio/peb.js&amp;utm_campaign=Badge_Grade" title="Codacy"><img src="https://img.shields.io/codacy/grade/3cf32c2b188944b7bd1359d4d5a4cc7d?logo=codacy&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/peb.js/stargazers" title="Stars"><img src="https://img.shields.io/github/stars/TechPot-Studio/peb.js?logo=github&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/peb.js/issues" title="Issues"><img src="https://img.shields.io/github/issues/TechPot-Studio/peb.js?logo=github&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/peb.js/pulls" title="Pull Requests"><img src="https://img.shields.io/github/issues-pr/TechPot-Studio/peb.js?logo=github&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/peb.js/network/members" title="Forks"><img src="https://img.shields.io/github/forks/TechPot-Studio/peb.js?logo=github&style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/peb" title="NPM Version"><img src="https://img.shields.io/npm/v/peb?logo=npm&style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/peb" title="NPM Downloads"><img src="https://img.shields.io/npm/dw/peb?logo=npm&style=flat-square" /></a>
  <a title="jsdelivr hits"><img src="https://img.shields.io/jsdelivr/npm/hw/peb?label=jsdelivr%20hits&logo=jsdelivr&logoColor=white&style=flat-square" /></a>
  <a href="./LICENSE" title="License"><img src="https://img.shields.io/github/license/TechPot-Studio/peb.js?style=flat-square" /></a>
  <a href="https://discord.gg/EvsaWcB" title="Chat"><img src="https://img.shields.io/discord/711002879670091868?logo=discord&logoColor=fff&style=flat-square" /></a>
  <a href="" title="Contributors"><img src="https://img.shields.io/github/contributors-anon/TechPot-Studio/peb.js?logo=github&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/peb.js/releases" title="Lastest Release"><img src="https://img.shields.io/github/v/release/TechPot-Studio/peb.js?label=lastest%20release&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/peb.js/releases" title="Lastest Pre-Release"><img src="https://img.shields.io/github/v/release/TechPot-Studio/peb.js?include_prereleases&label=lastest%20prerelease&style=flat-square" /></a>
  <a href="//github.com/TechPot-Studio/peb.js/releases" title="Commits Since Latest Release"><img src="https://img.shields.io/github/commits-since/TechPot-Studio/peb.js/latest/master?include_prereleases&logo=github&style=flat-square" /></a>
  <a href="./src/peb.js" title="Size"><img src="https://img.shields.io/github/size/TechPot-Studio/peb.js/src/peb.js?style=flat-square" /></a>
  <a href="./dist/peb.min.js" title="Minified Size"><img src="https://img.shields.io/github/size/TechPot-Studio/peb.js/dist/peb.min.js?label=minified%20size&style=flat-square" /></a>
  <a title="Node.js Version"><img src="https://img.shields.io/static/v1?label=Node.js%20version&message=12&color=informational&logo=node.js&style=flat-square&logoColor=white" /></a>
  <a title="ECMAScript Version"><img src="https://img.shields.io/static/v1?label=ECMAScript%20version&message=6&color=informational&logo=JavaScript&style=flat-square&logoColor=white" /></a>
</p>

Looking for README in other languages?<br />
[简体中文](README.zh.md) | English

## About
ECMAScript 6 lightweight API that makes JS development easier. Make the code faster, more efficient, easier to read, and compatible with other parts of the API. Created by TechPot Studio, some methods are borrowed from jQuery, and basically conform to the writing habits of the public.
  
Microsoft's support for Internet Explorer has ended. We will also discontinue its compatible code since `v3.0.0`.

**Documents**: [View](./docs)
<p align="center">
<img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="NPM info" />
</p>

### JQuery Writing Habits
Peb.js 3.2.0+
```js
peb.sel('div#foo').toggleVisible();

peb.sel(document).DOMReady(function () {
    peb.log('READY');
});

peb.log.group('foo', true, function () {
    peb.log.warn('WARNING');
});
```
JQuery
```js
$('div#foo').toggle();

$(document).ready(function () {
    console.log('READY')
});

console.groupCollapsed('foo');
console.warn('WARNING')
console.groupEnd();
```

## Installation
### Using **NPM**
[![NPM information](https://nodei.co/npm/peb.png?compact=true)](https://www.npmjs.com/package/peb)

```shell
$ npm install peb
```
```javascript
/* ES6 */
import peb from 'peb'
/* CommonJS */
const peb = require('peb');
```
**Note**: If you use Node.js, version 14.0.0 or above is recommended. Lower versions may work, but there may be problems.

### Or, grab from other API.
#### jsdelivr
```html
<script src="//cdn.jsdelivr.net/npm/peb" type="module"></script>
```
#### unpkg
```html
<script src="//unpkg.com/peb" type="module"></script>
```
`type="module"` is only applicable after `v3.1.0`

And, we allowed download source code.
## Browser Support
Number is the **least** version it supports
| Browser | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/chrome.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/firefox.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/safari.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/edge.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/opera.svg" width="30" /> |
|---: | :---: | :---: | :---: | :---: | :---: |
| **Full Support** | 54 | 63 | 10.1 | 79 | 41 |

Go to the function documentation to view the specific supported browsers of the function  
**The source of this information: [*developer.mozilla.org*](//developer.mozilla.org)**

## Main Contributor
[@TechPot-Studio/peb](https://github.com/orgs/TechPot-Studio/teams/peb)

| Name | Contributes |
| :---: | :---: |
| [TheColdPot](https://github.com/TheColdPot) | 💻🐛📖🎨🤔🗃✏📦 |

## Special Thanks to
### Software Support
[WebStorm](https://www.jetbrains.com/webstorm/)  
[Visual Studio Code](https://visualstudio.com)   
