# Function `classof()`
**The last updated version of this function**: *3.0.0-pre.3* 
## Browser Support
| <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/chrome.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/firefox.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/safari.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/opera.svg" width="30" /> | <img src="https://cdn.jsdelivr.net/gh/TechPot-Studio/svg-gallery/edge.svg" width="30" /> |
| :---: | :---: | :---: | :---: | :---: |
| Yes | Yes | Yes | Yes | Yes |
## Usage
```javascript
peb.classof(obj)
```

Return constructor name of obj
### *Example*
```javascript
peb.classof(123);                   // Number
peb.classof([]);                    // Array
peb.classof({});                    // Object
peb.classof("str");                 // String
peb.classof(function () {return;}); // Function
peb.classof(Date);                  // Function
peb.classof(new Date);              // Date
```
