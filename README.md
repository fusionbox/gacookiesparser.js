GACookieParser.js
=================

Google Analytics Javascript Cookie Parser.

This parses google analytics cookies in javascript. This can be used to put
tracking data dynamically in forms and so on.


Usage
-----

Include the javascript code, or copy past in it in you page.

Then:

```javascript
var parser = new GACookieParser();
// or new GACookieParser("cookie=string; key=value");
// uses document.cookies by default
parser.get('utmccn'); // return campaing id
parser.get('utmcsr'); // return referral source
parser.get('utmcct'); // return referring url path
parser.get('utmctr'); // return last search term used
parser.get('utmcmd'); // return medium
```
