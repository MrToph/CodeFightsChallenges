var fs = require('fs');
var id = 'T9mZQb7SF3jo9Dxhm';
var path = './Challenges/';
var url = 'https://codefights.com/challenge/' + id + '/main';

var page = require('webpage').create();
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36';
page.viewportSize = { width: 1920, height: 1080 };
page.onConsoleMessage = function (msg) {
  log(msg);
};
page.onLoadFinished = function () {
  log('Page loaded');
  window.setTimeout(function () {
    log('setTimeout called');
    // Parse challenge name
    var challengeName = page.evaluate(function () {
      var title = document.title; //  <title>Challenge `ConwayRomanSum` | CodeFights</title>
      var regex = /`(.+)`/;
      var match = regex.exec(title);
      if (match == null || match.length < 2) {
        console.error('Could not parse the challenge name. Regex did not match: ' + title);
        return null;
      }
      return match[1];
    });
    if (challengeName == null) phantom.exit();
    log('Parsing challenge: ' + challengeName);

    // Parse description
    var description = page.evaluate(function () {
      var el = document.querySelector('div.markdown'); // <div data-reactroot="" class="markdown">
      if (el == null) {
        console.error('Could not parse the description.');
        return null;
      }
      return el.innerHTML;
    });
    if (description == null) phantom.exit();
    description = url + '\r\n' + description;
    console.log('Parsed description.');
    var realPath = path + challengeName + '-' + id;

    // Parse code
    var code = page.evaluate(function () {
      var el = document.querySelectorAll('div.CodeMirror-code .CodeMirror-line'); // line filters out the unwanted line numbers
      if (el == null || el.length === 0){
        console.error('Could not parse the code. CodeMirror-line list length: ' + (el != null ? el.length : ''));
        return null
      }
      var acc = '';
      for (var i = 0; i < el.length; i++) {
        acc += el[i].textContent;
      }
      return acc;
    });
    if (code == null) phantom.exit();
    console.log('Parsed code: ' + code);

    // everything worked
    fs.makeDirectory(realPath);
    fs.write(realPath + '/' + 'README.md', description, 'w');
    fs.write(realPath + '/' + challengeName + '.js', code, 'w');

    phantom.exit();
  }, 5000); // javascript on this page needs a lot of time to render
};
log('Loading page');
page.open(url, function (status) {});

function log(message){
  var currentdate = new Date();
  var time = currentdate.getHours() + ':' + currentdate.getMinutes() + ':' + currentdate.getSeconds();
  console.log(time + '| ' + message);
}