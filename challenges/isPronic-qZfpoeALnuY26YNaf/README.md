https://codefights.com/challenge/qZfpoeALnuY26YNaf/main
<p>A <em>pronic</em> number (also known as <em>oblong</em> number, <em>rectangular</em> number or <em>heteromecic</em> number), is a number which is the product of two consecutive integers, i.e. it can be represented as <code>x * (x + 1)</code> for some integer <code>x</code>. The first few <em>pronic</em> numbers are:</p>
<pre><code>0, 2, 6, 12, 20, 30, 42...
</code></pre>
<p>Here's why:</p>
<ul>
<li><code>0 = 0 × 1</code></li>
<li><code>2 = 1 × 2</code></li>
<li><code>6 = 2 × 3</code></li>
<li><code>12 = 3 × 4</code></li>
<li><code>20 = 4 × 5</code></li>
<li><code>30 = 5 × 6</code></li>
<li><code>42 = 6 × 7</code></li>
</ul>
<p>Your task is to write a function <code>isPronic</code> which checks whether the number <code>n</code> is a <em>pronic</em> number and returns <code>true</code> if it is and <code>false</code> otherwise.</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>n = 0</code>, the output should be<br>
<code>isPronic(n) = true</code>.</p>
</li>
<li>
<p>For <code>n = 1</code>, the output should be<br>
<code>isPronic(n) = false</code>.</p>
</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer n</strong></p>
<p><em>Constraints:</em><br>
<code>0 ≤ n ≤ 2<sup>25</sup></code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<p><code>true</code> if <code>n</code> is a <em>pronic</em> number, <code>false</code> otherwise.</p>
</li>
</ul>
