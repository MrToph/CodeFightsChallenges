https://codefights.com/challenge/ATLKot3MTscKu2iqq/main
<p>You're given two integers, <code>n</code> and <code>m</code>. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.</p>
<p>Return the value of <code>2<sup>position_of_the_found_pair</sup></code> (0-based).</p>
<p><strong>Example</strong></p>
<p>For <code>n = 10</code> and <code>m = 11</code>, the output should be<br>
<code>equalPairOfBits(n, m) = 2</code>.</p>
<p><code>10<sub>10</sub> = 10<b><font color="red">1</font></b>0<sub>2</sub></code>, <code>11<sub>10</sub> = 10<b><font color="red">1</font></b>1<sub>2</sub></code>, the position of the rightmost pair of equal bits is the bit at position <code>1</code> (0-based) from the right in the binary representations.<br>
So the answer is <code>2<sup>1</sup> = 2</code>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer n</strong></p>
<p><em>Constraints:</em><br>
<code>0 ≤ n ≤ 2<sup>30</sup></code>.</p>
</li>
</ul>
<ul>
<li>
<p><strong>[input] integer m</strong></p>
<p><em>Constraints:</em><br>
<code>0 ≤ m ≤ 2<sup>30</sup></code>.</p>
</li>
</ul>
<ul>
<li><strong>[output] integer</strong></li>
</ul>
