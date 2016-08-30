https://codefights.com/challenge/siBMyi5TFEg7xCdtC/main
<p>There is a bulding consisting of <code>n</code> floors.</p>
<p>Floor <code>A</code> is called an <em>edge floor</em> if for each floor from <code>1</code> to <code>A</code> inclusive if the bottle falls out of the window it does not break, and for each floor from <code>A + 1</code> to <code>n</code> inclusive the bottle does break if you throw it out from there.</p>
<p>It is known that <code>n</code> cannot be the <em>edge floor</em>, and that the <em>edge floor</em> exists.</p>
<p>You have <code>2</code> bottles. Find the maximum number of times you have to throw the bottles out of the window to find <em>edge floor</em>, assuming that you're using the optimal strategy.</p>
<p>If a bottle gets broken, you can't use it anymore.</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>n = 2</code>, the output should be<br>
<code>Bottles_1(n) = 0</code>.</p>
<p><code>2</code> can't be the <em>edge floor</em>, so the <em>edge floor</em> is the first one, and there's no need to throw any bottles.</p>
</li>
<li>
<p>For <code>n = 3</code>, the output should be<br>
<code>Bottles_1(n) = 1</code>.</p>
<p>The <em>edge floor</em> is either the first, or the second. If you throw a bottle from the second floor it either breaks, which means that the first floor is <em>edge</em>, or doesn't, which means that the second floor is the <em>edge</em> one.</p>
</li>
<li>
<p>For <code>n = 6</code>, the output should be<br>
<code>Bottles_2(n) = 3</code></p>
<p>First, you should throw a bottle from the third floor. If it breaks, you should throw another bottle first from the first floor and then, if it doesn't break, from the second.<br>
If the first bottle doesn't break, you can throw it again either from the fifth, or from the sixth floor.<br>
All in all, you will have to make at most <code>3</code> throws. If you don't do as I've written, you will have to throw <code>3</code> or more times :)</p>
</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer n</strong></p>
<p>The number of floors.</p>
<p><em>Constrains:</em><br>
<code>2 ≤ n ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The maximum number of times you will have to throw the bottles to find the <em>edge floor</em>.</p>
</li>
</ul>
