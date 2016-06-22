https://codefights.com/challenge/GFYjkhHDsp3PyRYKc/main
<p>Amin and Sam are playing a game in which Amin gives Sam two binary numbers <code>a</code> and <code>b</code>, written as strings, and asks him to calculate the minimum number of right rotate of string <code>a</code> that minimize the <em>Hamming distance</em> between <code>a</code> and <code>b</code>. Help Sam answer this question for the given <code>a</code> and <code>b</code>.</p>
<p>A <em>Hamming distance</em> between strings of equal length <code>a</code> and <code>b</code> is defined as the number of positions <code>i</code>, such that <code>a[i] ≠ b[i]</code>.</p>
<p><strong>Example</strong></p>
<p>For <code>a="100"</code> and <code>b="001"</code>, the output should be<br>
<code>Hamming_Rotate(a, b) = 2</code>.</p>
<p>After <code>0</code> rotation, the <em>Hamming distance</em> between <code>"100"</code> and <code>"001"</code> is <code>2</code>.
After <code>1</code> rotation, the distance between <code>"010"</code> and <code>"001"</code> is still <code>2</code>.
After <code>2</code> rotations, the distance between <code>"001"</code> and <code>"001"</code> is <code>0</code>, so the answer is <code>2</code>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li><p><strong>[input] string a</strong></p>
<p> A string of <code>'0'</code>s and <code>'1'</code>s.</p>
<p> <em>Constraints:</em><br>
 <code>1 ≤ a.length ≤ 30</code>.</p>
</li>
<li><p><strong>[input] string b</strong></p>
<p> A string of <code>'0'</code>s and <code>'1'</code>s, which is guaranteed to have the same length as <code>a</code>.</p>
<p> <em>Constraints:</em><br>
 <code>b.length = a.length</code>.</p>
</li>
<li><p><strong>[output] integer</strong> </p>
<p> The number of right rotate that minimize the <em>Hamming distance</em>.</p>
</li>
</ul>
