https://codefights.com/challenge/XoSe5dJqjoMt3Y5N8/main
<p>Consider a plane divided into <code>1 × 1</code> squares, where each square is colored. The coloring is called <em>good</em>, if for each rectangular part of the plane with perimeter <code>2 * n</code> there are no <code>2</code> squares of the same color.</p>
<p>Find the minimal number of colors you need to create a <em>good</em> plane for the given <code>n</code>.</p>
<p><strong>Example</strong></p>
<p>For <code>n = 2</code>, the output should be<br>
<code>colouringThePlane(n) = 1</code>.</p>
<p>The only rectangle to consider is a square of size <code>1 × 1</code>, so it's ok to paint all squares in the same color.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li><p><strong>[input] integer n</strong></p>
<p> Half of perimeter of rectangles that define the <em>goodness</em> of the plane.</p>
<p> <em>Constraints:</em><br>
 <code>2 ≤ n &lt; 2000</code>.</p>
</li>
<li><p><strong>[output] integer</strong> </p>
<p> The minimal number of colors.</p>
</li>
</ul>
