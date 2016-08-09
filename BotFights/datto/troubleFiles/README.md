<p>Backing up files is a pretty straightforward process most of the time, but it can get much more complicated when you are backing up to the cloud. Let's assume that Datto backs up files in the cloud in batches. This works well until new files are added to the queue while a batch is already in the process of being backed up. We call these files <em>trouble files</em>, and identifying them is important when it comes to optimizing backup efficiency.</p>
<p>You are given an array, <code>files</code>, representing all files that need a backup, where:</p>
<ul>
<li><code>files[i][0]</code> is the time a file was added to the backup queue;</li>
<li><code>files[i][1]</code> is the size of the file.</li>
</ul>
<p>You are also given a sorted array, <code>backups</code>, representing multiple completed backups.</p>
<p><code>backups[i]</code> is the time the <code>i<sup>th</sup></code> backup was started. Each backup only backs up files that were not backed up or marked as <em>trouble</em> by the previous backups. If a backup started or finished at the same moment a file was added, assume that appending the new file to the queue occurred first. You can also assume that the time it takes to back up a list of files is equal to the sum of the sizes of those files.</p>
<p>Your goal is to calculate the number of <em>trouble files</em> for each completed backup, to estimate how severely they impacted the efficiency of the backup.</p>
<p><strong>Example</strong></p>
<p>For</p>
<pre><code>files = [[461618501, 3], 
         [461618502, 1], 
         [461618504, 2], 
         [461618506, 5], 
         [461618507, 6]]
</code></pre>
<p>and <code>backups = [461618501, 461618502, 461618504, 461618505, 461618506]</code>,<br>
the output should be<br>
<code>troubleFiles(files, backups) = [2, 0, 0, 0, 1]</code>.</p>
<ul>
<li>The first backup started at <code>461618501</code>, backing up the first file from the <code>files</code> list.</li>
<li>The second file was added to the queue at <code>461618502</code>, and labeled as <em>trouble</em>. After that the second backup started and immediately finished since there was nothing to back up.</li>
<li>At <code>461618504</code>, the third file was added and marked as <em>trouble</em> for the first backup, after which the first backup finished and the third one started. Yet there was nothing to back up for it, so it finished immediately.</li>
<li>At <code>461618505</code> the fourth backup started and immediately finished since there was still nothing to back up.</li>
<li>At <code>461618506</code> the fourth file was added to the queue, and the fifth backup process started.</li>
<li>Finally, at the seventh hour the last file was added and marked as <em>trouble</em> for the fifth backup.</li>
</ul>
<p>Here is the backups timeline:<br>
<img src="https://codefightsuserpics.s3.amazonaws.com/tasks/troubleFiles/img/example.png?_tm=1470157775210" alt=""></p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] array.array.integer files</strong></p>
<p>A non-empty array of files. Each file is given as an array of two positive integers, the first one being the time it was added, and the second one being its size. The arrays are sorted by their first elements. If for some <code>i</code> <code>files[i][0] = files[i + 1][0]</code>, assume that the <code>i<sup>th</sup></code> file was added first.</p>
<p><code>1 ≤ files.length ≤ 25</code>,<br>
<code>10<sup>8</sup> ≤ files[i][0] ≤ 10<sup>9</sup></code>,<br>
<code>1 ≤ files[i][1] ≤ 100</code>.</p>
</li>
<li>
<p><strong>[input] array.integer backups</strong></p>
<p>A non-empty sorted array of unique positive integers, where the <code>i<sup>th</sup></code> element is the time the <code>i<sup>th</sup></code> backup started.</p>
<p><code>1 ≤ backups.length ≤ 65</code>,<br>
<code>10<sup>8</sup> ≤ backups[i] ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] array.integer</strong></p>
<p>Array of the same length as <code>backups</code>, where the <code>i<sup>th</sup></code> element is the number of <em>trouble</em> files occurred during the <code>i<sup>th</sup></code> backup.</p>
</li>
</ul>