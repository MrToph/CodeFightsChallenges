https://codefights.com/challenge/hukzJ5FskimR5Mf45/main
<p>Find the minimal number of <em>strokes</em> that a mini golf player has to make to complete a given <em>course</em>.</p>
<p>Each <em>stroke</em> can move a ball an indefinite distance along one of the four cardinal directions: north, east, south, or west. The ball only has to stop when it encounters one of the many obstacles of the <em>course</em> - otherwise it may or may not stop, depending on how strongly it was hit.</p>
<p>The <em>course</em> is given as a matrix of characters from the following set:</p>
<ul>
<li><code>" "</code> - grass. The ball may pass it as well as stop on it.</li>
<li><code>"*"</code> - sand hazards. The ball may stop on them, but it cannot pass them within the same stroke. That means another stroke will be needed to get the ball out, even if it is in the same direction.</li>
<li><code>"#"</code>, <code>"~"</code> - walls and water hazards. These are impassable obstacles: the ball may neither pass over them nor stop on them.</li>
<li><code>"o"</code> - the initial position of the ball. Each course contains exactly one.</li>
<li><code>"@"</code> - the hole that the ball needs to reach. Each course contains exactly one.</li>
</ul>
<p><strong>Example</strong></p>
<p>For</p>
<pre><code>course = ["##~#######",
          "# ~  ****#",
          "#    ****#",
          "# ~  ****#",
          "# ~~  ***#",
          "# ~~~  **#",
          "#  ~~    #",
          "#  ~~    #",
          "#   ~    #",
          "# o ~~ @ #",
          "#   ~~   #",
          "####~~####"]
</code></pre>
<p>the output should be</p>
<pre><code>SetPar(course) = 7
</code></pre>
<p>One possible series of 7 <em>strokes</em> that complete the course is illustrated below:</p>
<p><img src="http://i.imgur.com/fIBNevk.png" alt="Sample mini golf course"></p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] array.string course</strong></p>
<p>Description of the <em>course</em> as explained above. A path between the ball and the hole always exists. The <em>course</em> is constructed in such a way that it is <strong>impossible</strong> for the ball to reach the boundaries of the matrix - the ball and the hole are always completely surrounded by impassable obstacles.</p>
<p><em>Constraints:</em></p>
<p><code>3 ≤ course.length ≤ 1000</code>,<br>
<code>3 ≤ course[0].length ≤ 1000</code>,<br>
<code>12 ≤ course.length × course[0].length ≤ 20000</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>Positive integer equal to the minimal number of <em>strokes</em> necessary to complete the <em>course</em>.</p>
</li>
</ul>
