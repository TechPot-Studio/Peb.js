# Function `isdigit()`
**The last updated version of this function**: *3.0.0-pre.3* 
## Browser Support
| <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/chrome.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/firefox.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/safari.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/opera.svg" width="30" /> | <img src="https://raw.githubusercontent.com/TechPot-Studio/svg-gallery/master/edge.svg" width="30" /> |
| :---: | :---: | :---: | :---: | :---: |
| Yes | Yes | Yes | Yes | Yes |
## Usage
```javascript
peb.isdigit(obj)
```
Return boolean of string or number is digit
### *Example*
```javascript
peb.isdigit(123);  // true
peb.isdigit(1.23); // true
peb.isdigit(.123); // true
peb.isdigit(1.20); // true
peb.isdigit(".5"); // true
peb.isdigit("#1"); // false
```