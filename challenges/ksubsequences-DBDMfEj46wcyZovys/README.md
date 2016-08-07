https://codefights.com/challenge/DBDMfEj46wcyZovys/main
<p>Given a list of <code>n</code> positive integers, count the numbers of <em>k-Sub sequences</em> in it.
A <em>k-Sub sequence</em> is defined as follows:</p>
<ul>
<li>it is a sequence of consecutive elements of <code>n</code>;</li>
<li>the sum of its elements is evenly divisible by <code>k</code>.</li>
</ul>
<p><strong>Example</strong></p>
<p>For <code>k = 3</code> and <code>nums = [1, 2, 3, 4, 1]</code>, the output should be<br>
<code>ksubsequences(k, nums) = 4</code>.</p>
<p>There're <code>4</code> <em>3-Sub sequences</em> in <code>nums</code>:</p>
<ul>
<li><code>[1, 2]</code></li>
<li><code>[1, 2, 3]</code></li>
<li><code>[2, 3, 4]</code></li>
<li><code>[3]</code></li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer k</strong></p>
<p><em>Constraints:</em><br>
<code>1 ≤ k ≤ 100</code>.</p>
</li>
<li>
<p><strong>[input] array.integer nums</strong></p>
<p><em>Constraints:</em><br>
<code>1 ≤ nums.length ≤ 5000</code>,<br>
<code>1 ≤ nums[i] ≤ 10000</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The number of <em>k-Sub sequences</em> in <code>nums</code>.</p>
</li>
</ul>
