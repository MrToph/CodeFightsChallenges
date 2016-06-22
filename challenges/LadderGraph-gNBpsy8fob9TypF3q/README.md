https://codefights.com/challenge/gNBpsy8fob9TypF3q/main
<p>A <em>ladder graph L(N)</em> is a planar graph with <code>2 * N</code> nodes and <code>N + 2 * (N - 1)</code> edges. It is isomorphic to the grid graph with <code>2</code> lines and <code>N</code> columns:
<img src="https://i.gyazo.com/e8af25023ac00dd8ffdd9d2dab2060cc.png" alt=""></p>
<p>You want to delete a subset (possibly empty) of its edges so that the graph stays connected. Count the number of valid subsets of edges you can delete and return it modulo <code>10<sup>9</sup> + 7</code>.</p>
<p><em>Source: Second round of 26<sup>th</sup> informatics olympiad in Iran.</em></p>
<p><strong>Example</strong></p>
<ul>
<li><p>For <code>N = "1"</code>, the output should be<br>
<code>LadderGraph(N) = 1</code>.</p>
<p>There are two vertices in the graph, connected by a single edge. No edges can be removed, so only the empty subset should be counted.</p>
</li>
<li><p>For <code>N = 2</code>, the output should be<br>
<code>LadderGraph(N) = 5</code>.</p>
<p>The graph looks as follows:<br>
<img src="https://i.gyazo.com/c8472fb6c3d638f1d68e3a21e2e95a78.jpg" alt=""><br>
It is possible to remove an empty set of edges, or sets consisting of a single element - one of the edges. Thus, there are <code>5</code> sets altogether.</p>
</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li><p><strong>[input] string N</strong></p>
<p> Half of the numbers of vertices.</p>
<p> <em>Constraints:</em><br>
 <code>1 ≤ N ≤ 2<sup>51</sup></code>.</p>
</li>
<li><p><strong>[output] integer</strong> </p>
<p> The answer modulo <code>10<sup>9</sup> + 7</code>.</p>
</li>
</ul>
