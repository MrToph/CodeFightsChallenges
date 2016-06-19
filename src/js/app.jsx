var fs = require('fs');
var id = 'AR4FRD52zPsnontuB';
var descriptionPath = './challenges/';
var jsPath = './src/solutions/';
var url = 'https://codefights.com/challenge/' + id + '/main';

var page = require('webpage').create();
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36';
page.viewportSize = { width: 1920, height: 1080 };
// page.onResourceRequested = function (request) {
//   console.log('Request ' + JSON.stringify(request.url, undefined, 4))
// }
// page.onResourceReceived = function (response) {
//   console.log('Receive ' + JSON.stringify(response, undefined, 4))
// }
page.onConsoleMessage = function (msg) {
  console.log(msg);
};
page.onLoadFinished = function () {
  window.setTimeout(function () {
    // Parse challenge name
    var challengeName = page.evaluate(function () {
      var title = document.title; //  <title>Challenge `ConwayRomanSum` | CodeFights</title>
      var regex = /`(.+)`/;
      var match = regex.exec(title);
      if (match.length < 2) console.error('Could not parse the challenge name. Regex did not match: ' + title);
      return match[1];
    });
    console.log('Parsing challenge: ' + challengeName);

    // Parse description
    var description = page.evaluate(function () {
      var el = document.querySelector('div.Markdown'); // <div data-reactroot="" class="Markdown">
      if (el == null) console.error('Could not parse the description.');
      return el.innerHTML;
    });
    description = url + '\r\n' + description;
    console.log('Parsed description.');
    fs.write(descriptionPath + challengeName + '-' + id + '.html', description, 'w');

    // Parse code
    var code = page.evaluate(function () {
      var el = document.querySelectorAll('div.CodeMirror-code .CodeMirror-line'); // line filters out the unwanted line numbers
      if (el.length === 0) console.error('Could not parse the code. CodeMirror-line list length: ' + el.length);
      var acc = '';
      for (var i = 0; i < el.length; i++) {
        acc += el[i].textContent;
      }
      return acc;
    });
    console.log('Parsed code: ' + code);
    fs.write(jsPath + challengeName + '-' + id + '.jsx', code, 'w');

    phantom.exit();
  }, 2000); // javascript on this page needs a lot of time to render
};

page.open(url, function (status) {});
