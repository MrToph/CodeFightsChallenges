https://codefights.com/challenge/saE68kntsJQzdNmWz/main
<p>A <em>repetition free</em> number is one in which each digit in the range <code>[1, 9]</code> appears at most once and the digit <code>0</code> does not appear.</p>
<p>Here are a couple of examples of <em>repetition free</em> numbers: <code>23</code>, <code>37</code>, and <code>198</code>.</p>
<p>Find the sum of the first <code>n</code> <em>repetition free</em> numbers. If the sum itself is <em>repetition free</em>, return that number; otherwise, find the smallest <em>repetition free</em> number greater than the sum and return it instead. If a <em>repetition free</em> number cannot be found, return <code>-1</code>.</p>
<p><em>Hint: the first repetition free number is 1.</em></p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>n = 3</code>, the output should be<br>
<code>repetitionFree(n) = 6</code>.</p>
<p><code>1 + 2 + 3 = 6</code>, which is also a <em>repetition free</em> number.</p>
</li>
<li>
<p>For <code>n = 4</code>, the output should be<br>
<code>repetitionFree(n) = 12</code>.</p>
<p><code>1 + 2 + 3 + 4 = 10</code>, which is not a <em>repetition free</em> number since it has a digit <code>0</code>. The smallest <em>repetition free</em> number greater than <code>10</code> is <code>12</code>.</p>
</li>
</ul>
<p><em>Credits: CalState LA Progfest Competition for some aspects of this problem.</em></p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer n</strong></p>
<p><em>Constraints:</em><br>
<code>1 ≤ n ≤ 2 · 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The sum of the first <code>n</code> <em>repetition free</em> numbers, or the smallest <em>repetition free</em> number greater than this sum.</p>
</li>
</ul>
