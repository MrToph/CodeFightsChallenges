https://codefights.com/challenge/qqWWuFHbipD4B83Tv/main
<p>Given a multiple-digit number <code>num</code>, determine its <em>true value</em> by performing the following operations:</p>
<ol>
<li>The digit at the ones' place should be multiplied by <code>1</code>. The digit at the tens' place should be multiplied by <code>2</code>. The digit at the hundreds' place should be multiplied by <code>3</code>, and so on.</li>
<li>Sum the values obtained in the first step.</li>
<li>Repeat step <code>1</code> until the result becomes a one-digit number.</li>
</ol>
<p><strong>Example</strong></p>
<p>For <code>num = 234</code>, the output should be<br>
<code>TrueValue(num) = 8</code>.</p>
<p>The first iteration produces <code>4 * 1 +3 * 2 + 2 * 3 = 4 + 6 + 6 = 16</code>. After the second iteration, the number becomes <code>6 * 1 + 1 * 2 = 6 + 2 = 8</code>. Thus, its <em>true value</em> is <code>8</code>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer num</strong></p>
<p><em>Constraints:</em><br>
<code>10 ≤ num ≤ 2 · 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The <em>true value</em> of <code>num</code>.</p>
</li>
</ul>
