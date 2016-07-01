https://codefights.com/challenge/3j5Zd3nRMjghZttP2/main
<p>Little Chou has just learnt how to count and add numbers.</p>
<p>So his dad gave him an exercise to add all the terms of a finite sequence <code>a, a + 1, a + 2, a + 3...</code>.</p>
<p>Little Chou is a very intelligent boy but he was distracted while doing the exercise. He left out <strong>exactly one</strong> term of the sequence. He is a kid after all!</p>
<p>His dad easily spotted which term his son left out.  Can you?</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>a = 1</code> and <code>littleChouSum = 4</code>, the output should be<br>
<code>MissingTerm(a, littleChouSum) = 2</code>.<br>
Here the first term is <code>1</code>, and the sum that Little Chou calculates is <code>4</code>.  He forgot to add the <code>2<sup>nd</sup></code> term, which is <code>2</code>.</p>
</li>
<li>
<p><code>MissingTerm(4, 35) = 4</code>.</p>
</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer a</strong></p>
<p>The first term of the sequence.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ a ≤ 10<sup>4</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer littleChouSum</strong></p>
<p>The sum that little Chou ended up with.</p>
<p><em>Constraints:</em><br>
<code>0 ≤ littleChouSum ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The term that little Chou left out in his exercise.</p>
</li>
</ul>
