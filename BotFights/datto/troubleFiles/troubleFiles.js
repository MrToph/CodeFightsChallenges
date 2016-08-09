function troubleFiles (files, backups) {
  var troubles = new Array(backups.length).fill(0);
  var nextFile = 0;
  var curBackups = []; // start, end, index in troubles/backups
  for (var i = 0; i < backups.length; i++) {
    var start = backups[i];
    var end = start;

    console.log('========================');
    console.log('Current backup', i, start);
    for (;nextFile < files.length; nextFile++) {
      var curFile = files[nextFile];
      console.log('nextFile', nextFile, curFile[0]);
      // clean up non-active backups
      curBackups = curBackups.filter(x => curFile[0] <= x[1]);
      console.log('active backups', curBackups);

      // is this file in the future of my backup?
      // don't care about it in current backup
      if (curFile[0] > start) {
        break;
      }

      // is it a trouble file for any active backups?
      var bad = false;
      for (var k = 0; k < curBackups.length; k++) {
        if (curFile[0] > curBackups[k][0] && curFile[0] <= curBackups[k][1]) {
          troubles[curBackups[k][2]]++;
          bad = true;
        }
      }

      // if its not bad current backup time has to be adjusted
      if (!bad) {
        end += curFile[1];
      }
    }
    curBackups.push([start, end, i]);
    console.log('active backups2', curBackups);
  }
  var finish = () => {
    for (;nextFile < files.length; nextFile++) {
      var curFile = files[nextFile];
      console.log('nextFile', nextFile, curFile[0]);
      // clean up non-active backups
      curBackups = curBackups.filter(x => curFile[0] <= x[1]);
      console.log('active backups', curBackups);

      // is it a trouble file for any active backups?
      for (var k = 0; k < curBackups.length; k++) {
        if (curFile[0] > curBackups[k][0] && curFile[0] <= curBackups[k][1]) {
          troubles[curBackups[k][2]]++;
        }
      }
    }
  };
  finish();
  return troubles;
}
