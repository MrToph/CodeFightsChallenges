https://codefights.com/challenge/4HANW3Rbjcs9TZmMM/main
<p>Number <code>X</code> is called <em>twice even</em> if it is divisible by <code>2</code>, and number <code>X / 2</code> is also divisible by <code>2</code>, yet <code>X / 2 / 2</code> is not. For example, <code>X = 12</code> is <em>twice even</em>, since <code>12 / 2 = 6</code> - even, and <code>6 / 2 = 3</code> is not even.</p>
<p>You're given two numbers: <code>N</code> and <code>P</code>. Find the largest number <code>X</code>, such that <code>1 ≤ X ≤ P</code> and <code>X</code> is divisible by <code>2</code> exactly <code>N</code> times. If there's no such number, return <code>-1</code> instead.</p>
<p><strong>Example</strong></p>
<p>For <code>N = 2</code> and <code>P = 15</code>, the output should be<br>
<code>EvenNumbers(N, P) = 12</code>.</p>
<p><code>12 / 2 = 6</code> and <code>6 / 2 = 3</code>, which is not even.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer N</strong></p>
<p><em>Constraints:</em><br>
<code>0 ≤ N ≤ 30</code>.</p>
</li>
<li>
<p><strong>[input] integer P</strong></p>
<p><em>Constraints:</em><br>
<code>1 ≤ P ≤ 2 · 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The largest number <code>X</code>, such that <code>1 ≤ X ≤ P</code> and <code>X</code> is divisible by <code>2</code> exactly <code>N</code> times. If this number does not exist return <code>-1</code> instead.</p>
</li>
</ul>
