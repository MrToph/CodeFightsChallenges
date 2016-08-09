const EPS = 0.00001;
function backupTimeEstimator (startTimes, backupDuration, maxThreads) {
  if (startTimes.length < 2) return startTimes;
  var ans = new Array(startTimes.length);
  var curTime = startTimes[0];
  var currentJobs = [[0, backupDuration[0]]]; // index and timeLeft at curTime
  var pendingJobs = []; // if maxThreads reached, cache them in here
  var activeThreads = 1;

  var calcNextFinishTime = () => {
    if (currentJobs.length === 0) return Infinity;
    var timeLeft = currentJobs[0][1];
    return curTime + timeLeft * activeThreads;
  };
  var simulateNextStep = (diff) => {
    currentJobs.forEach(x => x[1] -= diff / activeThreads);
    var finishedJobs = currentJobs.filter(x => Math.abs(x[1]) <= EPS);
    finishedJobs.forEach(x => {
      console.log('job-finished', x[0], curTime + diff);
      ans[x[0]] = curTime + diff;
    });
    currentJobs = currentJobs.filter(x => Math.abs(x[1]) > EPS);
  };
  var addPending = () => {
    while (pendingJobs.length > 0 && currentJobs.length < maxThreads) {
      var index = pendingJobs.shift(); // FIFO
      currentJobs.push([index, backupDuration[index]]);
    }
    currentJobs.sort((a, b) => a[1] - b[1]);
    activeThreads = currentJobs.length;
  };
  for (var i = 1; i < startTimes.length; i++) {
    // console.log(i, '===============')
    // console.log('curTime', curTime)
    // console.log('currentJobs', currentJobs)
    // console.log('pendingJobs', pendingJobs)
    var nextFinish = calcNextFinishTime();
    var nextStart = startTimes[i];
    while (nextFinish < nextStart) {
      simulateNextStep(nextFinish - curTime);
      addPending();
      // redo
      curTime = nextFinish;
      nextFinish = calcNextFinishTime();
    }
    // nextFinish > nextStart
    simulateNextStep(nextStart - curTime);
    pendingJobs.push(i);
    addPending();
    curTime = nextStart;
  }
  while (currentJobs.length > 0) {
    // console.log('curTime', curTime)
    // console.log('currentJobs', currentJobs)
    // console.log('pendingJobs', pendingJobs)
    nextFinish = calcNextFinishTime();
    simulateNextStep(nextFinish - curTime);
    addPending();
    curTime = nextFinish;
  }
  return ans;
}
