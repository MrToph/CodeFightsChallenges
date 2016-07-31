<p>For the purposes of this problem, suppose Quora has <code>n</code> questions, and question <code>i</code> takes <code>t<sub>i</sub></code> time to read. Some questions are related to each other. If we connect related questions by edges, we obtain a graph such that there exists exactly one path from any question to another. In other words, the graph of related questions is a tree.</p>
<p>Each time Steve reads a question, he will see a list of questions directly related to it and navigate at random to one that he hasn't read yet. Steve will stop reading once there are no unread related questions.</p>
<p>Which question should we show first to Steve so that we minimize his total expected reading time? It is guaranteed that there is one unique question that is optimal.</p>
<p><strong>Example</strong></p>
<p>For <code>n = 5</code>, <code>t = [2, 2, 1, 2, 2]</code> and <code>edges = [[0, 1], [1, 2], [2, 3], [3, 4]]</code>, the output should be<br>
<code>relatedQuestions(n, t, edges) = 2</code>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer n</strong></p>
<p>The number of questions.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ n ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[input] array.integer t</strong></p>
<p>Array of positive integers. <code>t<sub>i</sub></code> is the time Steve needs to read question <code>i</code> for each valid <code>i</code>.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ t.length ≤ 1000</code>,<br>
<code>1 ≤ t[i] ≤ 5000</code>.</p>
</li>
<li>
<p><strong>[input] array.array.integer edges</strong></p>
<p>Array containing <code>n - 1</code> pairs of related questions. It is guaranteed that the questions form a tree.</p>
<p><em>Constraints:</em><br>
<code>edges.length = n - 1</code>,<br>
<code>0 ≤ edges[i][j] ≤ n - 1</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p><code>0</code>-based index of the best question to show first.</p>
</li>
</ul>