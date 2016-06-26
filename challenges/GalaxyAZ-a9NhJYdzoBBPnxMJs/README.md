https://codefights.com/challenge/a9NhJYdzoBBPnxMJs/main
<p>GalaxyAZ uses its very own numeric system. Instead of using certain integers (base 1-10) as well as certain letters (A-F for base 16, for example), they use letters to label different bases.</p>
<pre><code>Base Z is base 1
Base Y is base 2
Base X is base 3
...
Base B is base 25
Base A is base 26
</code></pre><p>They also use a different numbering for bases greater than <code>10</code>: <code>'Z'</code> equals <code>10</code>, <code>'Y'</code> equals <code>11</code>, and so on.</p>
<p>Given a <code>number</code> in <em>base10</em> and a <code>base</code> (letter), return the value of <code>number</code> in <code>base</code> without leading zeroes.</p>
<p><strong>Example</strong></p>
<p>For <code>number = 10</code> and <code>base = 'A'</code>, the output should be<br>
<code>GalaxyAZ(number, base) = "Z"</code>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li><p><strong>[input] integer number</strong></p>
<p> An integer.</p>
<p> <em>Constraints:</em><br>
 <code>4 ≤ number ≤ 10<sup>9</sup></code>.</p>
</li>
<li><p><strong>[input] char base</strong></p>
<p> An uppercase English letter (<code>'A' - 'Y'</code>).</p>
</li>
<li><p><strong>[output] string</strong> </p>
<p> The value of <code>number</code> in the given <code>base</code>.</p>
</li>
</ul>
