https://codefights.com/challenge/rPgBvZjXDFwNHrrhS/main
<p>In this challenge, given an integer <code>n</code>, your task is to write all the numbers from <code>0</code> to <code>2<sup>n</sup> - 1</code>, so that for each two successive values their binary form differ in only one bit.</p>
<p>Concatenate the values in a string and return this string.</p>
<p><strong>Example</strong></p>
<p>For <code>n = 3</code>, the output should be<br>
<code>grayCode(n) = "01326754"</code>.</p>
<p>Here's how the string was obtained:</p>
<pre><code>decimal binary
   0     0000
   1     0001
   3     0011
   2     0010
   6     0110
   7     0111
   5     0101
   4     0100
</code></pre>
<p>Note, that in binary notation each two consecutive values differ only in one digit.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer n</strong></p>
<p><em>Constraints:</em><br>
<code>1 ≤ n ≤ 13</code>.</p>
</li>
<li>
<p><strong>[output] string</strong></p>
<p>A string of concatenated numbers.</p>
</li>
</ul>
