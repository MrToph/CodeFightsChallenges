https://codefights.com/challenge/jHGYnJdmxD9SuJQYw/main
<p>Define <em>prime square</em> of an integer <code>x</code> as follows:</p>
<ul>
<li>if <code>x</code> is prime, its <em>prime square</em> is just <code>x * x</code>;</li>
<li>if <code>x</code> is not prime, its <em>prime square</em> equals the sum of squares of prime numbers in the range <code>[0, x]</code>, and composite numbers in the range <code>[0, x]</code>.</li>
</ul>
<p>Given an integer <code>n</code>, return its <em>prime square</em>.</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>n = 4</code>, the output should be<br>
<code>primeSquare(n) = 18</code>.</p>
<p><em>Prime square</em> of <code>4</code> equals <code>1 + 2 * 2 + 3 * 3 + 4 = 1 + 4 + 9 + 4 = 18</code>.</p>
</li>
<li>
<p>For <code>n = 5</code>, the output should be<br>
<code>primeSquare(n) = 5</code>.</p>
<p><code>5</code> is a prime number, so its <em>prime square</em> is just <code>5 * 5 = 25</code>.</p>
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
<code>1 ≤ n ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The <em>prime square</em> of <code>n</code>.</p>
</li>
</ul>
