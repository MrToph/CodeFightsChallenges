https://codefights.com/challenge/ifSxNwEhkPER6hExe/main
<p>Given a string <code>s</code>, perform the following algorithm:</p>
<ol>
<li>Replace every letter with its 1-based position in the alphabet;</li>
<li>Divide the obtained thus number by two, and round the result down to the nearest integer;</li>
<li>Replace every digit in the obtained number with the letter at the corresponding 0-based position in the alphabet;</li>
<li>Return the resulting string.</li>
</ol>
<p><strong>Example</strong></p>
<p>For <code>s = "abcde"</code>, the output should be<br>
<code>stringDivision(s) = "gbhc"</code></p>
<p>Here're the results obtained at each step of the algorithm:</p>
<ol>
<li><code>"abcde"</code> is changed to <code>12345</code>;</li>
<li><code>12345</code> becomes <code>12345 / 2 = 6172</code>;</li>
<li><code>6172</code> turns into <code>"gbhc"</code>;</li>
<li><code>"gbhc"</code> is returned.</li>
</ol>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] string s</strong></p>
<p>A string of lowercase Latin letters.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ s.length ≤ 35</code>.</p>
</li>
<li>
<p><strong>[output] string</strong></p>
<p>Result of the above described algorithm.</p>
</li>
</ul>
