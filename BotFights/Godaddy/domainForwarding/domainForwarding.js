function domainForwarding (redirects) {
  'use strict';
  var findSink = (url) => {
    var run = true;
    while(run){
      run = false;
      for (var i = 0; i < redirects.length; i++) {
        if (redirects[i][0] == url) {
          url = redirects[i][1];
          run = true;
          break;
        }
      }
    }
    return url;
  };

  var sinks = redirects.map(x => [x[0], findSink(x[0])]);
  var ans = {};
  for (var i = 0; i < sinks.length; i++) {
    if (ans[sinks[i][1]] == undefined) {
      ans[sinks[i][1]] = [sinks[i][0], sinks[i][1]];
    } else {
      ans[sinks[i][1]].push(sinks[i][0]);
    }
  }
  var ans2 = Object.keys(ans).map(x => [ans[x].sort(), x]);
  ans2 = ans2.sort((a, b) => a[1] > b[1]);
  ans2 = ans2.map(x => x[0]);
  console.log(ans2);
  return ans2;
}
