https://codefights.com/challenge/s7JsoEXRotKqD7q5Q/main
<p>Everybody knows that Mr. X is a geometry lover. Not long ago he found several points, whose polar coordinates were stored in an arran <code>coordinates</code>.</p>
<p>Mr. X wants to choose <code>3</code> point from the <code>coordinates</code> and draw a <em>super triangle</em>. He considers a triangle to be a <em>super triangle</em> if:</p>
<ol>
<li>its area is greater than <code>0</code>;</li>
<li>its either equilateral or right;</li>
<li>the center of its circumcircle is located at <code>(0, 0)</code>.</li>
</ol>
<p>Your task is find the number of <em>super triangles</em> Mr. X can draw.</p>
<p><strong>Example</strong></p>
<p>For</p>
<pre><code>coordinates = [[1,0], 
               [1,45], 
               [2,20], 
               [3,40], 
               [1,180]]
</code></pre>
<p>the output should be<br>
<code>Super_Triangle(coordinates) = 1</code>.</p>
<p>The only <em>super triangle</em> Mr. X can draw has vertices at <code>(1, 0)</code>, <code>(1, 45)</code> and <code>(1, 180)</code>. This triangle is right, and the center of its circumcircle is located at <code>(0, 0)</code>. Check out the image below for better understanding.</p>
<p><img src="https://i.gyazo.com/811de6739711fdb8d4d37351e0c2e5a0.png" alt=""></p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] array.array.integer coordinates</strong></p>
<p>Array of points' coordinates. Each point is given as an array of two elements, where the first element is the radial coordinate, and the second element is the angular coordinate.</p>
<p>It is guaranteed that all points are unique.</p>
<p><em>Constraints:</em><br>
<code>2 ≤ coordinates.length ≤ 1000</code>,<br>
<code>1 ≤ coordinates[i][0] ≤ 10<sup>5</sup></code>,<br>
<code>0 ≤ coordinates[i][1] &lt; 360</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The number of <em>super triangles</em> Mr. X can draw.</p>
</li>
</ul>
