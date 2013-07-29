// Fedora users run
//   $ js test.js
// Debian users run
//   $ smjs test.js

load("cookieparser.js");

assertEq(
    (new GACookieParser("foo=bar; bar=foo")).cookies['bar'],
    'foo'
);
print("ok");

assertEq(
    (new GACookieParser("foo=bar=bar; bar=foo")).cookies['foo'],
    'bar=bar'
);
print("ok");

assertEq(
    (new GACookieParser("__utmz=stuff.utmctr=value")).data['utmctr'],
    'value'
);
print("ok");

assertEq(
    (new GACookieParser("__utmz=stuff.utmctr=value")).get('utmctr'),
    'value'
);
print("ok");

assertEq(
    (new GACookieParser("__utmz=stuff.utmctr=value|other.utmccn=content|foo=bar")).get('utmctr'),
    'value'
);
print("ok");

assertEq(
    (new GACookieParser("__utmz=stuff.utmctr=value|other.utmccn=content|foo=bar")).get('utmccn'),
    'content'
);
print("ok");

assertEq(
    (new GACookieParser("__utmz=stuff.invalid=value")).get('invalid'),
    null
);
print("ok");
