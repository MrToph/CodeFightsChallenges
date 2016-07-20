https://codefights.com/challenge/Q6Ai4nxpRjFx5sYWj/main
<p>Find the <code>n<sup>th</sup></code> integer which is a palindrome when converted to a binary string containing <code>b</code> bits.</p>
<p>It is guaranteed that there is a result for each given combination of <code>b</code> and <code>n</code>.</p>
<p><strong>Example</strong></p>
<p>For <code>b = 6</code> and <code>n = 3</code>, the output should be<br>
<code>BinaryPalindrome(b, n) = 18</code>.</p>
<p>The first number which forms a palindrome when converted to a <code>6</code>-bit binary string is <code>0</code> (<code>000000</code> in binary). The second is <code>12</code> (<code>001100</code>) and the third is <code>18</code> (<code>010010</code>).</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer b</strong></p>
<p>The number of bits in the binary string.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ b ≤ 24</code>.</p>
</li>
<li>
<p><strong>[input] integer n</strong></p>
<p>The 1-based index of the number to return.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ n ≤ 4096</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
</li>
</ul>
