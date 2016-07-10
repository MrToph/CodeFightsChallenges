https://codefights.com/challenge/SZRtfwnjeBTyk9yy5/main
<p>To enhance the power of his new technique, Minion created several shadow clones of himself. He knows that the <code>i<sup>th</sup></code> clone has power <code>A<sub>i</sub></code>. Now Minion needs to choose <code>2</code> of his clones to perform this technique. The power of the technique will equal the product of powers of the chosen clones.</p>
<p>But Minion is going to fight a very strange enemy named Pain. He will be able to defeat Pain only if the power of his technique is an even number. Now Minion wants to know in how many ways he can chose <code>2</code> of his clones so that he is able to defeat Pain.</p>
<p>Given array <code>A</code>, help Minion to calculate the number of ways to chose two clones to defeat Pain. It doesn't matter in which order the clones are chosen.</p>
<p><strong>Example</strong></p>
<p>For <code>A = [1, 2, 3, 4]</code>, the output should be<br>
<code>helptoclone(A) = 5</code>.</p>
<p>There're <code>5</code> ways to chose clones:</p>
<ul>
<li>clones with powers <code>1</code> and <code>2</code>;</li>
<li>clones with powers <code>1</code> and <code>4</code>;</li>
<li>clones with powers <code>2</code> and <code>3</code>;</li>
<li>clones with powers <code>2</code> and <code>4</code>;</li>
<li>clones with powers <code>3</code> and <code>4</code>.</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] array.integer A</strong></p>
<p>Array of clones' powers.</p>
<p><em>Constraints:</em><br>
<code>4 ≤ A.length ≤ 8000</code>,<br>
<code>1 ≤ A[i] ≤ 10<sup>5</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The number of ways to chose clones to defeat Pain.</p>
</li>
</ul>
