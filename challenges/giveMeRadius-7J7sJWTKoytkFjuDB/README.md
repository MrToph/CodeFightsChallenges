https://codefights.com/challenge/7J7sJWTKoytkFjuDB/main
<p>Given a connected undirected weighted graph (possibly with cycles) as its adjacency <code>matrix</code>, calculate its <em>radius</em>.</p>
<p>The <em>radius</em> of a graph is the minimum <em>eccentricity</em> of any vertex, where the <em>eccentricity</em> of a vertex <code>v</code> is the greatest distance between <code>v</code> and any other vertex.</p>
<p>For more information on how distances are calculated, check out <a href="https://en.wikipedia.org/wiki/Distance_(graph_theory)">this</a> page.</p>
<p><strong>Example</strong></p>
<p>For</p>
<pre><code>matrix = [[-1, -1, 1, 3],
          [-1, -1, -1, 2],
          [1, -1, -1, 7],
          [3, 2, 7, -1]]
</code></pre><p>the output should be <code>giveMeRadius(matrix) = 4</code>.</p>
<p><img src="https://i.gyazo.com/637ff9ffdd616285fa87e33e0869a8eb.jpg" alt=""></p>
<p>In this example <em>eccentricity</em> of the first vertex is <code>5</code>, the second vertex is <code>6</code>, the third vertex is <code>6</code>, and the fourth vertex is <code>4</code>. So, <code><em>radius</em> = min({5,6,6,4}) = 4</code>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li><p><strong>[input] array.array.integer matrix</strong></p>
<p> Adjacency matrix of the given graph, which is guaranteed to be symmetric. If <code>matrix[i][j] &gt; 0</code>, the distance between vertices <code>i</code> and <code>j</code> is <code>matrix[i][j]</code>. Otherwise <code>matrix[i][j] = -1</code>, meaning that there's no edge between vertices <code>i</code> and <code>j</code>.</p>
<p> <em>Constraints:</em><br>
 <code>2 ≤ matrix.length &lt; 10</code>,<br>
 <code>matrix[i][j] = matrix[j][i]</code>,<br>
 <code>matrix[i][i] = -1</code>,<br>
 <code>matrix[0].length = matrix.length</code>,<br>
 <code>-1 ≤ matrix[i][j] &lt; 100</code>.</p>
</li>
<li><p><strong>[output] integer</strong> </p>
<p> <em>Radius</em> of the given graph.</p>
</li>
</ul>
