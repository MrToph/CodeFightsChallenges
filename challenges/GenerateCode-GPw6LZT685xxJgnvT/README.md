https://codefights.com/challenge/GPw6LZT685xxJgnvT/main
<p>Your task is to implement a function that generates automobile codes by their <code>label</code>, <code>year</code>, <code>model</code> and <code>number</code>. The code should have format <code>&lt;l&gt;&lt;y&gt;&lt;m&gt;&lt;num&gt;</code>, where:</p>
<ul>
<li><code>&lt;l&gt;</code> is a <code>label</code>;</li>
<li><code>&lt;y&gt;</code> consists of last to digits of <code>year</code>, or equals <code>0year</code>, if <code>year</code> has only one digit;</li>
<li><code>&lt;m&gt;</code> is a number that can be determined from <code>model</code>, a character in range <code>'A' - 'L'</code>;</li>
<li><code>&lt;num&gt;</code> is a <code>number</code> formatted so that the length of the code is <code>9</code> digits, i.e. it should either be truncated to its last digits, or be preceded by <code>'0'</code>s.</li>
</ul>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>label = "B"</code>, <code>year = 2015</code>, <code>model = 3</code> and <code>number = 678</code>,<br>
the output should be<br>
<code>GenerateCode(label, year, model, number) = "B15C00678"</code>.</p>
<p>In this example, <code>number</code> should be preceded by <code>'0'</code>s.</p>
</li>
<li>
<p>For <code>label = "XYZ"</code>, <code>year = 2017</code>, <code>model = 9</code> and <code>number = 10000</code>,<br>
the output should be<br>
<code>GenerateCode(label, year, model, number) = "XYZ17I000"</code>.</p>
<p>Here <code>number</code> is too long, so only its last <code>3</code> digits are taken.</p>
</li>
<li>
<p>For <code>label = "ABCD"</code>, <code>year = 1</code>, <code>model = 10</code> and <code>number = 8799</code>,<br>
the output should be<br>
<code>GenerateCode(label, year, model, number) = "ABCD01J99"</code>.</p>
<p>In this example <code>year</code> is written as <code>01</code> because it consists of a single digit, and <code>number</code> is truncated to last two digits.</p>
</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] string label</strong></p>
<p>A string of uppercase English letters.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ label.length ≤ 5</code>.</p>
</li>
<li>
<p><strong>[input] integer year</strong></p>
<p><em>Constraints:</em><br>
<code>1 ≤ year &lt; 10<sup>4</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer model</strong></p>
<p><em>Constraints:</em><br>
<code>1 ≤ model ≤ 12</code>.</p>
</li>
<li>
<p><strong>[input] integer number</strong></p>
<p><em>Constraints:</em><br>
<code>1 ≤ number ≤ 10<sup>4</sup></code>.</p>
</li>
<li>
<p><strong>[output] string</strong></p>
<p>A string of length <code>9</code>, automobile code.</p>
</li>
</ul>
