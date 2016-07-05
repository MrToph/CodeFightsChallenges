https://codefights.com/challenge/3eZwiyP6btWXDxohS/main
<p>A <a href="http://en.wikipedia.org/wiki/Narcissistic_number">narcissistic number</a> is a number that is equal to the sum of its digits each raised to the power equal to the total number of digits. For example, <code>153</code> is a narcissistic number, since <code>1<sup>3</sup> + 5<sup>3</sup> + 3<sup>3</sup> = 153</code>.</p>
<p>Given the numbers <code>start</code> and <code>finish</code>, return all <em>narcissistic numbers</em> in range <code>[start, finish]</code> (inclusive).</p>
<p><strong>Example</strong></p>
<p>For <code>start = 100</code> and <code>finish = 200</code>, the output should be<br>
<code>NarcissisticNumber(start, finish) = [153]</code>.</p>
<p><code>153</code> is the only number in range <code>[100, 200]</code> which is <em>narcissistic</em>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer start</strong></p>
<p><em>Constraints:</em><br>
<code>1 ≤ start ≤ finish</code>.</p>
</li>
<li>
<p><strong>[input] integer finish</strong></p>
<p><em>Constraints:</em><br>
<code>start ≤ finish ≤ 10<sup>4</sup></code>.</p>
</li>
<li>
<p><strong>[output] array.integer</strong></p>
<p>A sorted array of <em>narcissistic numbers</em> between <code>start</code> and <code>finish</code> (inclusive).</p>
</li>
</ul>
