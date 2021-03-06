https://codefights.com/challenge/bpdsXYzKqarCbJfD4/main
<p>Being an avid student, Jim loves to read books for his Roman classes such as those by Dante and Cicero. One day, he came across a huge string of Roman numerals and realized that it made no sense. Since Jim also loves misteries, he figured that the string must contain a hidden equation.</p>
<p>Help Jim figure out what equation is hidden in the given <code>RomanNumerals</code>. Only the following operators can be used:</p>
<ol>
<li>exactly one <code>=</code> sign;</li>
<li>exactly one of the operators <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, or <code>%</code> to the left of <code>=</code>.</li>
</ol>
<p>Here are all valid Roman Numerals:</p>
<pre><code>I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000
</code></pre><p>Anything above M will not be used in this challenge.</p>
<p>Make sure you understand how Roman numerals work, i.e.</p>
<pre><code>IV = 4
IX = 9
etc.
</code></pre><p>Given <code>RomanNumerals</code>, insert valid operators so that the obtained equation makes sense. If no answer can be found, return <code>"not possible"</code> instead.</p>
<p><strong>Example</strong></p>
<p>For <code>RomanNumerals = "MXIIICCCLXMCCCLXXIII"</code>, the output should be<br>
<code>RomanEquations(RomanNumerals) = "MXIII+CCCLX=MCCCLXXIII"</code>,<br>
because <code>1013 + 360 = 1373</code>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li><p><strong>[input] string RomanNumerals</strong></p>
<p> The sequence of Roman numerals.</p>
</li>
<li><p><strong>[output] string</strong> </p>
<p> A valid equation written in Roman Numerals, or <code>"not possible"</code> if it's impossible to find one.</p>
<p> It's guaranteed that only one answer exists.</p>
</li>
</ul>
