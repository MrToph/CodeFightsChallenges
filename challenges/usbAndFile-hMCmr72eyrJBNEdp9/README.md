https://codefights.com/challenge/hMCmr72eyrJBNEdp9/main
<p>Sean is trying to save a large file of the known <code>size</code> to a USB flash drive. He has several USB flash drives in his possession,  the <code>i<sup>th</sup></code> USB has a capacity <code>usbs[i]</code>. The file can be split into smaller pieces, so it's possible to save it using multiple USBs.</p>
<p>What is the minimum number of USB flash drives Sean has to use? It is guaranteed that Sean has enough USBs to save his file.</p>
<p><strong>Example</strong></p>
<p>For <code>size = 5</code> and <code>usbs = [2, 1, 3]</code>, the output should be<br>
<code>usbAndFile(size, usbs) = 2</code>.</p>
<p>It's enough to use flash drives of sizes <code>2</code> and <code>3</code>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer size</strong></p>
<p>Size of the file Sean wants to store.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ size ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[input] array.integer usbs</strong></p>
<p>A non-empty array of integers, capacities of the USB drives Sean has.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ usbs.length ≤ 1000</code>,<br>
<code>1 ≤ usbs[i] ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The minimum number of USB flash drives to write Sean's file, if he can split the file between drives.</p>
</li>
</ul>
