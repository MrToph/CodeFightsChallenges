https://codefights.com/challenge/WFRx6HvmG5KLABepG/main
<p>Consider the transcendental number <code>C = 0.123456789101112131415161718...</code>. In mathematics this is a constant known as the <a href="https://en.wikipedia.org/wiki/Champernowne_constant">Champernowne constant</a>. However, there is no real use for this constant in mathematics. The pattern to the <em>Champernowne constant</em> is that it is a concatenation of all the positive integers. A formula to calculate <code>C</code> is as follows:</p>
<p><img src="http://i.stack.imgur.com/3EUHj.png" alt=""></p>
<p>Now, note that in the decimal expansion of <code>C</code>, there lies the number <code>111</code>. Your task is to find how many three digit numbers lie in <code>C</code> such that all three digits are the same.</p>
<p>Suppose that <code>n</code> is an indicator of how long the sequence of digits of <code>C</code> are. For example if <code>n = 2</code>, <code>C = 0.123456789101112131415...10<sup>2</sup></code>. Given an integer <code>n</code>, calculate the number of three digit numbers in <code>C = 0.123456789101112131415...10<sup>n</sup></code>.</p>
<p><strong>Example</strong></p>
<p>For <code>n = 4</code>, the output should be<br>
<code>Truly_Random(n) = "397"</code>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer n</strong></p>
<p><code>10<sup>n</sup></code> is the number to count up to in <code>C</code>.</p>
<p><em>Constraints:</em><br>
<code>4 ≤ n ≤ 17</code>.</p>
</li>
<li>
<p><strong>[output] string</strong></p>
<p>The number of three digit numbers with the same digits that occur in <code>C</code> for the given <code>n</code>.</p>
</li>
</ul>
