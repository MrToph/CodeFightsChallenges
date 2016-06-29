https://codefights.com/challenge/rE6wJbeZB3vA8KADt/main
<p>A matrix is a 2D array of numbers.</p>
<p>Matrices can be multiplied by the following rule: if matrix <code>A</code> is of size <code>m × n</code> and matrix <code>B</code> is of size <code>n × r</code>, their product <code>A × B</code> will be of size <code>m × r</code>. Note, that it is possible to multiply two matrices only if the number of columns in the first matrix equals the number of rows in the second one.</p>
<p>(In this challenge you don't need to actually multiply any matrices.)</p>
<p>Matrix multiplication is an <em>associative</em> operation, so <code>A × B × C</code> can be grouped in any way with parentheses as long as the order is preserved: <code>A × B × C = (A × B) × C = A × (B × C)</code>.</p>
<p>The number of operations necessary to multiply two matrices of dimensions <code>m × n</code> and <code>n × r</code> equals <code>m * n * r</code>. Given a set of <code>N</code> matrices, such that the number of columns in the <code>i<sup>th</sup></code> matrix <code>n[i]</code> equals the number of rows in the <code>(i + 1)<sup>th</sup></code> matrix <code>m[i + 1]</code>, find the minimum number of operations required to compute their product by grouping the factors with parentheses.</p>
<p><strong>Example</strong></p>
<p>For <code>m = [10, 100, 5]</code> and <code>n = [100, 5, 50]</code>, the output should be<br>
<code>LongMatrixProduct(m, n) = 7500</code>.</p>
<p>Let the product be written as <code>A × B × C</code>, where <code>A</code> is of size <code>10 × 100</code>, <code>B</code> is <code>100 × 5</code>, and <code>C</code> is <code>5 × 50</code>.</p>
<p>Calculating their product as <code>(A × B) × C</code> will take just <code>10 * 100 * 5 + 10 * 5 * 50 = 7500</code> operations, and calculating it as <code>A × (B × C)</code> will require <code>100 * 5 * 50 + 10 * 100 * 50 = 75000</code>. Thus, the answer is <code>7500</code>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] array.integer m</strong></p>
<p>Array of integers, where <code>m[i]</code> is the number of rows in the <code>i<sup>th</sup></code> matrix.</p>
<p><em>Constraints:</em><br>
<code>3 ≤ m.length ≤ 100</code>,<br>
<code>1 ≤ m[i] ≤ 10<sup>4</sup></code>.</p>
</li>
<li>
<p><strong>[input] array.integer n</strong></p>
<p>Array of integers, where <code>n[i]</code> is the number of columns in the <code>i<sup>th</sup></code> matrix.</p>
<p><em>Constraints:</em><br>
<code>n.length = m.length</code>,<br>
<code>1 ≤ n[i] ≤ 10<sup>4</sup></code>,<br>
<code>n[i] = m[i + 1], i ≤ n.length - 1</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The minimum number of operations required to compute the product of matrices.</p>
</li>
</ul>
