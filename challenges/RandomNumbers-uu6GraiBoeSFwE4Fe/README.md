https://codefights.com/challenge/uu6GraiBoeSFwE4Fe/main
<p>Wedgie Hedgie, antithesis of Squircle Academy's mascot Hedgie Wedgie the Hedgehog, is planning to hack the school's computer system and steal lesson plans. To do so, he will need to generate some adequately random numbers for his computer program (which, unfortunately, has no built-in random number generator function). He came up with the following algorithm for random numbers generator:</p>
<p>Given a prime <code>p ≠ 5</code>, Wedgie Hedgie takes the Fibonacci numbers (<code>0, 1, 1, 2, 3, 5, 8, ...</code>) modulo <code>p</code>, and finds out how many terms it takes for the sequence to repeat. This number of terms he calls the <em>period</em> of the sequence. The random number generated by <code>p</code> will then be <code>p - 1</code> divided by the <em>period</em> if <code>p = ±1 mod 5</code>, or <code>2 * p + 2</code> divided by the <em>period</em> if <code>p = ±2 mod 5</code>. These random numbers have been proven to always be integers, so no need to worry about integer division.</p>
<p>Most mathematicians that Wedgie Hedgie asked said that the procedure he devised creates numbers quite randomly, although the numbers do tend to be equal to <code>1</code>. However, hacking the Squircle Academy network takes a lot of work and time, so Wedgie Hedgie is asking you to implement the function for him.  Can you take on his request?</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>p = 7</code>, the output should be<br>
<code>RandomNumbers(p) = 1</code>.</p>
<p>The Fibonacci sequence modulo <code>7</code> looks as follows:<br>
<code>0, 1, 2, 3, 5, 1, 6, 0, 6, 6, 5, 4, 2, 6, 1, | 0, 1, 2, 3, ...</code>.<br>
As you can see, the sequence repeats itself after <code>16</code> terms. Since <code>7 = 2 mod 5</code>, the random number generated is <code>(2 * 7 + 2) / 16 = 1</code>.</p>
</li>
<li>
<p>For <code>p = 199</code>, the output should be<br>
<code>RandomNumbers(p) = 9</code>.</p>
<p>The Fibonacci sequence modulo <code>199</code> looks starts with:<br>
<code>0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 34, 178, 13, 191, 5, 196, 2, 198, 1, | 0, 1, ...</code>.<br>
The sequence repeats itself after <code>22</code> terms. Since <code>199 = 4 mod 5</code>, the random number generated is <code>(199 - 1) / 22 = 9</code>.</p>
</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer p</strong></p>
<p>A prime number not equal to <code>5</code>.</p>
<p><em>Constraints:</em><br>
<code>2 ≤ p &lt; 2 · 10<sup>7</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>Random number generated by the function.</p>
</li>
</ul>
