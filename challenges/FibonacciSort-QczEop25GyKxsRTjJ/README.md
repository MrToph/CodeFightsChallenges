https://codefights.com/challenge/QczEop25GyKxsRTjJ/main
<p>A sequence is said to be <em>Fibonacci-sorted</em> if elements at the indices corresponding to the <a href="https://en.wikipedia.org/wiki/Fibonacci_number">Fibonacci numbers</a> are sorted.</p>
<p>The following sequence is formed by <em>Fibonacci numbers</em>:<br>
<code>0, 1, 1, 2, 3, 5, 8, 13, 21, ......</code></p>
<p>Given a <code>sequence</code>, your task is to <em>Fibonacci-sort</em> it, i.e. sort elements at indices <code>0, 1, 2, 3, 5, etc</code> in ascending order.</p>
<p><strong>Example</strong></p>
<p>For <code>sequence = [6, 5, 4, 3, 2, 1, 0]</code>, the output should be<br>
<code>FibonacciSort(sequence) = [1, 3, 4, 5, 2, 6, 0]</code>.</p>
<p>Elements at positions <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code> and <code>5</code> should be sorted. Those elements are <code>6</code>, <code>5</code>, <code>4</code>, <code>3</code>, and <code>1</code>, and they should be placed at positions marked as <code>?</code> in <code>[?, ?, ?, ?, 2, ?, 0]</code>. Thus, the final answer is <code>[1, 3, 4, 5, 2, 6, 0]</code>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] array.integer sequence</strong></p>
<p>A sequence of integers that should be <em>Fibonacci-sorted</em>.</p>
<p><em>Constraints:</em><br>
<code>3 ≤ sequence.length ≤ 100</code>,<br>
<code>-1000 ≤ sequence.length ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[output] array.integer</strong></p>
<p>A <em>Fibonacci-sorted</em> <code>sequence</code>.</p>
</li>
</ul>
