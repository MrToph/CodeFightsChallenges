https://codefights.com/challenge/nwwqKRFbqg5iNhNNQ/main
<p>Recently Lucky learnt how to check if the given number is prime or not. Bunny, Lucky's friend, decided to give her a task to test her skills.</p>
<p>He introduced a new concept called <em>primacity</em>. He explains that the <em>primacity</em> of an integer is the number of distinct primes which divide it.</p>
<p>Bunny asked Lucky the following quesition: how many integers in the range <code>[l, r]</code> have a <em>primacity</em> of exactly <code>k</code>? Your task is to help Lucky answer this question.</p>
<p><strong>Example</strong></p>
<p>For <code>l = 5</code>, <code>r = 15</code> and <code>k = 2</code>, the output should be<br>
<code>luckyandprime2(l, r, k) = 5</code>.</p>
<p>There're <code>5</code> integers with <em>primacity</em> <code>2</code> in the range <code>[5, 15]</code>, which are: 6, 10, 12, 14 and 15.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer l</strong></p>
<p><em>Constraints:</em><br>
<code>1 ≤ l ≤ r</code>.</p>
</li>
<li>
<p><strong>[input] integer r</strong></p>
<p><em>Constraints:</em><br>
<code>l ≤ r ≤ 10<sup>4</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer k</strong></p>
<p><em>Constraints:</em><br>
<code>1 ≤ k ≤ 5</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The number of integers in the range <code>[l, r]</code> of <em>primacity</em> <code>k</code>.</p>
</li>
</ul>
