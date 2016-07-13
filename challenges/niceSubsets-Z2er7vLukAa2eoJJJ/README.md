https://codefights.com/challenge/Z2er7vLukAa2eoJJJ/main
<p>Let <code>n</code> be positive integer. Consider a set of first <code>2 * n</code> positive integers:
<code>T = {1; 2; 3; ...; 2 * n}</code>.</p>
<p>Let a subset <code>S</code> of <code>T</code> be called <em>nice</em> if the absolute difference of each two elements in it is greater than <code>n</code>. More formally, it is true that <code>∀ a, b ∈ S, |a - b| &gt; n</code>.</p>
<p>Your task is to calculate the number of <em>nice</em> subsets of <code>T</code> for the given <code>n</code>.</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>n = 1</code>, the output should be<br>
<code>niceSubsets(n) =</code>3`.</p>
<p>There're <code>3</code> <em>nice</em> sets: <code>{1}</code>, <code>{2}</code> and <code>∅</code>.</p>
</li>
<li>
<p>For <code>n = 2</code>, the output should be<br>
<code>niceSubsets(n) =</code>6`.</p>
<p><em>Nice</em> sets are <code>∅</code>, <code>{1}</code>, <code>{2}</code>, <code>{3}</code>, <code>{4}</code> and <code>{1;4}</code>.</p>
</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer n</strong></p>
<p><em>Constraints:</em><br>
<code>1 ≤ n ≤ 24</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The number of <em>nice</em> subsets of <code>T</code>.</p>
</li>
</ul>
