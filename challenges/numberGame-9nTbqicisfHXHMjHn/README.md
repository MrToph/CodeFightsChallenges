https://codefights.com/challenge/9nTbqicisfHXHMjHn/main
<p>You decided to visit an exotic country on your vacation, and picked it at random. The choice fell on South Codelandia, a country famous for the number of gambling games one can play on the streets. One game called <em>number game</em> gripped your attention.</p>
<p>In this game, you're given a number <code>n</code>. You can make <code>d</code> moves, and on the <code>i<sup>th</sup></code> move (1-based) you should delete one digit from <code>n</code> in such a way that the resulting number has at least one <strong>non-zero</strong> digit and is divisible by <code>d - i + 1</code>. If you fail to do it, the game stops. Otherwise, leading zeros (if any) are dropped and the resulting value is then used to make the next move. If you manage to make all <code>d</code> moves and end up with a non-zero value, you win.</p>
<p>You suspect that <em>number game</em> is some kind of a confidence trick, but still want to try it. In order not to lose all your money, you need to implement a function that will help you with it. Given <code>n</code> and <code>d</code>, determine the maximum number of moves you can make (note that <code>d</code> is an upper bound for that number).</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>n = "102045"</code> and <code>d = 4</code>, the output should be<br>
<code>numberGame(n, d) = 4</code>.</p>
<p>It is possible to win the game. For example, you can make the following moves:</p>
<ul>
<li>initially, <code>n = 102045</code>;</li>
<li><code>102045 -&gt; 10204</code>, divisible by <code>4</code>;</li>
<li><code>10204 -&gt; (0)204</code>, divisible by <code>3</code>;</li>
<li><code>204 -&gt; 20</code>, divisible by <code>2</code>;</li>
<li><code>20 -&gt; 2</code>, divisible by <code>1</code>.</li>
</ul>
</li>
<li>
<p>For <code>n = "5555"</code> and <code>d = 3</code>, the output should be<br>
<code>numberGame(n, d) = 1</code>.</p>
<p>You can remove one digit to make the number divisible by <code>3</code>, but that's the only move you can make.</p>
</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] string n</strong></p>
<p>A positive integer as a string without leading zeros.<br>
In order to be on the challenge leaderboard you only have to solve it for <code>n.length ≤ 6</code>.</p>
<p><em>Constraints:</em><br>
<code>2 ≤ n.length ≤ 15</code>.</p>
</li>
<li>
<p><strong>[input] integer d</strong></p>
<p>The number of moves you should make in order to win.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ d ≤ 15</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The maximum number of moves you can make.</p>
</li>
</ul>
