https://codefights.com/challenge/qQ762Pzrgm5KaBMT6/main
<p>Consider the following algorithm for the given positive integer <code>n</code>:</p>
<ol>
<li><code>print n</code></li>
<li>if <code>n = 1</code> then <code>STOP</code>;</li>
<li>if <code>n is odd</code> then <br>
<code>n = 3 * n + 1</code><br>
else<br>
<code>n = n / 2</code>;</li>
<li><code>goto 2</code></li>
</ol>
<p>For the given integer <code>n</code>, return the second largest value that will be printed by the algorithm above.</p>
<p><strong>Example</strong></p>
<p>For <code>n = 22</code>, the output should be<br>
<code>secondLargest(n) = 40</code>.</p>
<p>The following values will be printed:<br>
<code>22 11 34 16 52 26 13 40 20 10 5 16 8 4 2 1</code>.</p>
<p>The second largest number in this sequence is <code>40</code>, which is the answer.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer n</strong></p>
<p>An integer.</p>
<p><em>Constraints:</em><br>
<code>2 ≤ n ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The second largest number that will be printed.</p>
</li>
</ul>
