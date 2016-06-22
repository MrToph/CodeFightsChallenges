https://codefights.com/challenge/sMP85aZRQeFfjHDR4/main
<p>Print out a pyramid with a symbol <code>'*'</code>. The arguments <code>count</code> and <code>direction</code> define how the pyramid should be drawn.</p>
<p>The pyramid should contain <code>count</code> rows, where the <code>i<sup>th</sup></code> row (1-based) consists of <code>i</code> <code>'*'</code> characters.</p>
<p>If <code>direction</code> is <code>true</code>,  the rows should be counted in top-down order, otherwise they should be counted from bottom to top.</p>
<p><strong>Example</strong></p>
<p>For <code>count = 5</code> and <code>direction = true</code>, the output should be</p>
<pre><code>printPyramid(count, direction) = ["*", 
                                  "**", 
                                  "***", 
                                  "****", 
                                  "*****"]
</code></pre><p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li><p><strong>[input] integer count</strong></p>
<p> The hight of the pyramid.</p>
<p> <em>Constraints:</em><br>
 <code>3 ≤ count ≤ 50</code>.</p>
</li>
<li><p><strong>[input] boolean direction</strong></p>
<p> Direction in which the rows should be counted, <code>true</code> for top-down and <code>false</code> for bottom-up.</p>
</li>
<li><p><strong>[output] array.string</strong> </p>
<p> A pyramid built as described above.</p>
</li>
</ul>
