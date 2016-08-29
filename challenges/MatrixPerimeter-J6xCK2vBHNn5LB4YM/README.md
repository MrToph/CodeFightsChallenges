https://codefights.com/challenge/J6xCK2vBHNn5LB4YM/main
<p>You are given a <code>matrix</code> that contains booleans. If an element is <code>true</code>, it means that it is colored black, otherwise it is colored white.</p>
<p>Your task is to find perimeter of the objects colored black.</p>
<p><strong>Example</strong></p>
<p>For</p>
<pre><code>matrix = [[false, false, false,  true, false],
          [false,  true,  true,  true, false],
          [false, false, false,  true, false],
          [false,  true,  true,  true, false],
          [ true,  true, false, false, false]]
</code></pre>
<p>the output should be<br>
<code>MatrixPerimeter(matrix) = 22</code>.</p>
<p><img src="https://cdn2.scratch.mit.edu/get_image/project/118819555_10000x8000.png" alt="Example image"></p>
<p>As you can see, perimeter of the area colored black is <code>22</code>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] array.array.boolean matrix</strong></p>
<p>A rectangular matrix.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ matrix.length ≤ 100</code>,<br>
<code>1 ≤ matrix[i].length ≤ 100</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>Perimeter of the black figures.</p>
</li>
</ul>
