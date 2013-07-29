var GACookieParser = function(cookies) {
  if (typeof(cookies) == undefined) {
    cookies = document.cookies;
  }
  this.cookies = this.parseCookies(cookies);
  this.data = {};
  this.utmz = this.cookies['__utmz'];
  if (this.utmz === undefined) {
    // No Google Analytics cookie? That's all for the day
    return;
  }

  /* Google Analytics Cookie looks like that
   *   stuff.otherstuff.key=value|otherkey=othervalue|something.lastkey=value
   * We're trying to parse it to have:
   *   {key: 'value', otherkey: 'othervalue', lastkey: 'value'}
   * And if one key matches the GACookieParser.values, we put it in data
   */
  for (var key in this.values) {
    if (this.values.hasOwnProperty(key)) {
      var matches;
      if (matches = this.utmz.match("(?:\.|\|)" + key + "=([^|]*)(?:$|\|)"))
        this.data[key] = matches[1];
    }
  }
};

GACookieParser.prototype.parseCookies = function (cookies) {
  var cookiesList = cookies.split("; "),
      cookiesObject = {};

  for (var i in cookiesList) {
    var cookie = cookiesList[i],
        separator = cookie.indexOf("="),
        key = cookie.substring(0, separator),
        value = cookie.substring(separator+1);

    cookiesObject[key] = value;
  }

  return cookiesObject;
};

GACookieParser.prototype.values = {
  utmccn: 'campaign id',
  utmcsr: 'referral source',
  utmcct: 'referring url path',
  utmctr: 'last search term used',
  utmcmd: 'medium'
};

GACookieParser.prototype.get = function(key) {
  if (this.values.hasOwnProperty(key)) {
    return this.data[key];
  } else {
    return null;
  }
};
