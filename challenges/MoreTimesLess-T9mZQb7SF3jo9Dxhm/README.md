https://codefights.com/challenge/T9mZQb7SF3jo9Dxhm/main
<p>Some positive integers can be written as the difference of the squares of <code>2</code> positive integers, i.e., <code>n = a² - b²</code>.</p>
<p>For instance, <code>3</code> can be written as <code>2² - 1²</code>.</p>
<p>Some numbers can be written in that format in more than one way. For example, <code>15</code> can be written as <code>4² - 1²</code> or <code>8² - 7²</code>.</p>
<p>Your task is, given a positive integer <code>n</code>, to calculate the number of such pairs <code>(a, b)</code>, where <code>n = a² - b²</code> and both <code>a</code> and <code>b</code> are positive integers.</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>n = 1</code>, the output should be<br>
<code>MoreTimesLess(n) = 0</code>.</p>
<p>It is impossible to write <code>1</code> as a difference of two squares.</p>
</li>
<li>
<p>For <code>n = 3</code>, the output should be<br>
<code>MoreTimesLess(n) = 1</code>.</p>
<p><code>3 = 2<sup>2</sup> - 1<sup>2</sup></code>.</p>
</li>
<li>
<p>For <code>n = 15</code>, the output should be<br>
<code>MoreTimesLess(n) = 2</code>.</p>
<p><code>15 = 4<sup>2</sup> - 1<sup>2</sup> = 8<sup>2</sup> - 7<sup>2</sup></code>.</p>
</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] string n</strong></p>
<p><em>Constraints:</em><br>
<code>1 ≤ n ≤ 10<sup>13</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The number of pairs  <code>(a, b)</code> such that <code>n = a² - b²</code>, where <code>a</code> and <code>b</code> are positive integers.</p>
</li>
</ul>
