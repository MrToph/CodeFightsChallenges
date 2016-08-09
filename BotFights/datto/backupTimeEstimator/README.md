<p>Datto is working on creating a backup-time estimator. For simplicity's sake, let's assume that there is only one server completing multiple jobs (i.e. backups) in parallel. Without any parallelization, the <code>i<sup>th</sup></code> job takes <code>backupDuration<sub>i</sub></code> units of time to be backed up. But if there are <code>n</code> jobs running in parallel, the backup process goes <code>n</code> times slower for each job.</p>
<p>For the <code>i<sup>th</sup></code> job you know the value of <code>backupDuration<sub>i</sub></code> and the moment <code>startTimes<sub>i</sub></code> it was added to the backup queue. Your task is to estimate all the backup completion times. Note that it is impossible to have more than <code>maxThreads</code> threads performing backups in parallel. If there is more than one job waiting to be backed up, the one with the smallest initial backup time is chosen. It's guaranteed that all the jobs are added to the backup queue at different times.</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>startTimes = [461620201, 461620202, 461620203]</code>,<br>
<code>backupDuration = [2, 2, 2]</code> and <code>maxThreads = 2</code>,<br>
the output should be<br>
<code>backupTimeEstimator(startTimes, backupDuration, maxThreads) = [461620204.0, 461620206.0, 461620207.0]</code>.</p>
</li>
<li>
<p>At moment <code>461620201</code> the first job is added to the queue and its backup process starts.</p>
</li>
<li>
<p>At moment <code>461620202</code> the second job is added to the second thread, while the first job is <code>50%</code> complete in the first thread.</p>
</li>
<li>
<p>At moment <code>461620203</code> another job is added, but both of the threads are busy, so nothing happens (the first job is <code>75%</code> complete, and second one is <code>25%</code>).</p>
</li>
<li>
<p>At moment <code>461620204</code> the <strong>first job finishes</strong> in the first thread, and the third job starts to run. The second job is <code>50%</code> complete at the moment.</p>
</li>
<li>
<p>At moment <code>461620206</code> the <strong>second job finishes</strong>, and the third one is <code>50%</code> complete.</p>
</li>
<li>
<p>At moment <code>461620207</code> the <strong>third job finishes</strong> its work.</p>
</li>
</ul>
<p>Check out the image below for better understanding.<br>
<img src="https://codefightsuserpics.s3.amazonaws.com/tasks/backupTimeEstimator/img/example.jpg?_tm=1470252491403" alt=""></p>
<ul>
<li>For <code>startTimes = [461620201, 461620202, 461620203]</code>, <code>backupDuration = [2, 2, 2]</code><br>
and <code>maxThreads = 3</code>, the output should be<br>
<code>backupTimeEstimator(startTimes, backupDuration, maxThreads) = [461620204.5, 461620206.5, 461620207.0]</code>.</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] array.integer startTimes</strong></p>
<p>A sorted array of unique positive integers. The <code>i<sup>th</sup></code> element is the time the <code>i<sup>th</sup></code> job was added to the backup queue.</p>
<p><em>Constraints:</em><br>
<code>0 ≤ startTimes.length ≤ 400</code>,<br>
<code>1 ≤ startTimes[i] ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[input] array.integer backupDuration</strong></p>
<p>Array of positive integers of the same size as <code>startTimes</code>. For each valid <code>i</code> <code>backupDuration[i]</code> is the amount of time it takes to back up the <code>i<sup>th</sup></code> job if there is only one running thread.</p>
<p><em>Constraints:</em><br>
<code>backupDuration.length = startTimes.length</code>,<br>
<code>1 ≤ backupDuration[i] ≤ 10<sup>4</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer maxThreads</strong></p>
<p>The maximum number of threads that can work in parallel.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ maxThreads ≤ 45</code>.</p>
</li>
<li>
<p><strong>[output] array.float</strong></p>
<p>Array of the same length as <code>startTimes</code>, where the <code>i<sup>th</sup></code> element is the moment by which the <code>i<sup>th</sup></code> job is backed up.<br>
Your output will be considered correct if the absolute error of each output value does not exceed <code>10<sup>-5</sup></code>.</p>
</li>
</ul>