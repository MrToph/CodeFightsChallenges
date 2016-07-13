https://codefights.com/challenge/kFWA4ZkJSfvwh4q8d/main
<p>A <em>labyrinth</em> is represented as a series of strings corresponding to the rows of a rectangular grid, with spaces (<code>' '</code>) indicating empty cells and asterisks (<code>'*'</code>) indicating walls. The entire perimeter of the labyrinth is filled with wall cells.</p>
<p>The walls are arranged in such a way that for any pair of cells in the labyrinth, there is only one path that connects them without backtracking. Your task is to find your way from the start cell (<code>'S'</code>) at the top left to the finish cell (<code>'F'</code>) at the bottom right. Return this path as a string of characters corresponding to the direction moved at each step (<code>'U'</code> = up, <code>'D'</code> = down, <code>'L'</code> = left, <code>'R'</code> = right).</p>
<p><strong>Example</strong></p>
<p>For</p>
<pre><code>data = ["*******", 
        "*S    *", 
        "*** * *", 
        "*   * *", 
        "* *****", 
        "*    F*", 
        "*******"]
</code></pre>
<p>the output should be<br>
<code>labyrinth2(data) = "RRDDLLDDRRRR"</code>.</p>
<p>The shortest path from the start <code>'S'</code> to the finish <code>'F'</code> is as follows: move two places to the right, down two places, left two places, down two places again, and finally right four places. This path is represented by the string <code>"RRDDLLDDRRRR"</code>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] array.string data</strong></p>
<p>A <em>labyrinth</em> as a rectangular matrix, given as described above. It is guaranteed that:</p>
<ul>
<li>the <em>labyrinth</em> is surrounded by walls;</li>
<li>there is exactly one <code>'F'</code> and <code>'S'</code> character in it;</li>
<li>there is only one path from <code>'F'</code> to <code>'S'</code>.</li>
</ul>
<p><em>Contraints:</em><br>
<code>3 ≤ data.length &lt; 100</code>,<br>
<code>3 ≤ data[0].length &lt; 100</code>.</p>
</li>
<li>
<p><strong>[output] string</strong></p>
<p>A string consisting of the characters <code>'U'</code>, <code>'D'</code>, <code>'L'</code> and <code>'R'</code> indicating the direction travelled at each step of the path through the labyrinth.</p>
</li>
</ul>
