https://codefights.com/challenge/HTPdz8fy2hiZGAXbJ/main
<p>You are given a <code>chain</code> of digits. The first element of the <code>chain</code> is the initial <em>offset</em>. Your task is to calculate the total <em>offset</em>, where <em>offset</em> is the sum of differences between two consecutive digits.</p>
<p><strong>Example</strong></p>
<p>For <code>chain = "14839"</code>, the output should be<br>
<code>offsets(chain) = 6</code>.</p>
<p>The total <em>offset</em> is calculated as follows:<br>
<code>1 + ((8 - 4) + (3 - 8) + (9 - 3)) = 1 + (4 - 5 + 6) = 6</code>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] string chain</strong></p>
<p>A string of digits.</p>
<p><em>Constraints:</em><br>
<code>5 ≤ chain.length ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The total <em>offset</em>.</p>
</li>
</ul>
