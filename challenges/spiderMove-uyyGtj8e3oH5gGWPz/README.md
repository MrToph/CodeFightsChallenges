https://codefights.com/challenge/uyyGtj8e3oH5gGWPz/main
<p>A spider is standing at the origin <code>(0, 0)</code> of a Cartesian plane and wants to move to the point <code>(X,Y)</code>. At each step, the spider can only move one square in two of the four directions: <code>U</code>(<em>up</em>), <code>D</code>(<em>down</em>,), <code>L</code>(<em>left</em>), <code>R</code>(<em>right</em>), depending on where it is heading:</p>
<ul>
<li>if <code>X ≥ 0</code>, <code>Y ≥ 0</code>. The spider can only go <code>U</code> or <code>R</code>.</li>
<li>if <code>X ≥ 0</code>, <code>Y ≤ 0</code>. The spider can only go <code>D</code> or <code>R</code>.</li>
<li>if <code>X ≤ 0</code>, <code>Y ≥ 0</code>. The spider can only go <code>U</code> or <code>L</code>.</li>
<li>if <code>X ≤ 0</code>, <code>Y ≤ 0</code>. The spider can only go <code>D</code> or <code>L</code>.</li>
</ul>
<p>Find the number of ways for the spider to get to the given point <code>(X, Y)</code>.</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>X = 2</code> and <code>Y = -2</code>, the output should be<br>
<code>spiderMove(X, Y) = 6</code>.</p>
<p>There are only 6 ways:</p>
<ul>
<li><code>RRDD</code>;</li>
<li><code>RDRD</code>;</li>
<li><code>RDDR</code>;</li>
<li><code>DRRD</code>;</li>
<li><code>DRDR</code>;</li>
<li><code>DDRR</code>.</li>
</ul>
</li>
<li>
<p>For <code>X = -3</code> and <code>Y = 0</code>, the output should be<br>
<code>spiderMove(X, Y) = 1</code>.</p>
<p>There is only one way:</p>
<ul>
<li><code>LLL</code>.</li>
</ul>
</li>
<li>
<p>For <code>X = 0</code> and <code>Y = 0</code>, the output should be<br>
<code>spiderMove(X, Y) = 1</code>.</p>
</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer X</strong></p>
<p><em>Constraints:</em><br>
<code>-15 ≤ X ≤ 15</code>.</p>
</li>
<li>
<p><strong>[input] integer Y</strong></p>
<p><em>Constraints:</em><br>
<code>-5 ≤ Y ≤ 25</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>It is guaranteed that the answer is smaller than <code>2<sup>31</sup></code>.</p>
</li>
</ul>
