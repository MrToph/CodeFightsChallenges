https://codefights.com/challenge/W2QwLFvi2YbNY7RcL/main
<p>Bob recently visited a golf course in <a href="https://codefights.com/challenge/hukzJ5FskimR5Mf45/main">Poland</a> and now wants to make his own golf course.</p>
<p>Unfortunately he doesn't have any meadows on his property, so he decides to use an old ice rink and some hockey pucks instead.
He already planned a couple of courses and now needs to know if it is possible to complete them and how many strikes it would take.</p>
<p>On his plans, the course is given as follows:</p>
<ul>
<li><code>'@'</code> <strong>Puck</strong> - The start of the course</li>
<li><code>'o'</code> <strong>Hole</strong> - The goal of the course</li>
<li><code>'#'</code> <strong>Wall</strong> - Pucks will stop when they hit a wall</li>
<li><code>'~'</code> <strong>Water</strong> - Should be avoided</li>
<li><code>'.'</code> <strong>Sand</strong> - Pucks will stop on sand immediately</li>
<li><code>' '</code> <strong>Ice</strong> - Pucks will continue to slide until they hit something</li>
</ul>
<p>The puck can't move diagonally, only left, right, up and down.<br>
Pucks will not stop in front of water, only in front of walls, on sand and in the hole.<br>
The course is always rectangular.<br>
The course is always bordered by water or walls - no boundary checks required.<br>
There is always exactly one puck and one hole.</p>
<p><strong>Example</strong></p>
<p>For</p>
<pre><code>course = ["###########", 
          "#     ....#", 
          "#      ...#", 
          "#  ~    . #", 
          "# ~~~   . #", 
          "# ~~~~    #", 
          "# ~~~~    #", 
          "# ~~~~  o #", 
          "# ~~~~    #", 
          "#@~~~~    #", 
          "###########"]
</code></pre>
<p>the output should be<br>
<code>IceRinkPar(course) = 8</code>.</p>
<p><img src="http://i.imgur.com/G1Hy3rb.png" alt="Example Course"></p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] array.string course</strong></p>
<p>A rectangular golf course given as described above.</p>
<p><em>Constraints:</em><br>
<code>3 ≤ course.Length ≤ 300</code>,<br>
<code>3 ≤ course[0].Length ≤ 300</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The minimum number of strikes it takes to get the puck into the hole or <code>-1</code> if it is impossible.</p>
</li>
</ul>
