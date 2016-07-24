https://codefights.com/challenge/ZYcY8u59FAog4F5fk/main
<p>Given two strings, your task is to find out if there is a <em>swap sequence</em> that transforms the first string into the second string. A <em>swap sequence</em> is a sequence of strings, such that for each two consecutive string the one can be obtained from another after a swap of two characters in one of the strings.</p>
<p>Return <code>true</code> if a swap sequence exists and <code>false</code> otherwise.</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p><code>swapSequence("abcd", "dacb") = true</code>.</p>
<p>There is a <em>swap sequence</em> that transforms <code>"abcd"</code> into <code>"dacb"</code>. For example, this sequence can be: <code>"abcd" -&gt; "adcb" -&gt; "dacb"</code>. First, you swap the characters <code>'b'</code> and <code>'d'</code>, and after this, you swap the characters <code>'a</code> and <code>'d'</code>.</p>
</li>
<li>
<p><code>swapSequence("abcd","abab") = false</code></p>
<p>There is no <em>swap sequence</em> that transforms <code>"abcd"</code> into <code>"abab"</code>.</p>
</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] string a</strong></p>
<p>The first string, a string of lowercase English letters.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ a.length ≤ 20</code>.</p>
</li>
<li>
<p><strong>[input] string b</strong></p>
<p>The second string, a string of lowercase English letters.</p>
<p><em>Constraints:</em><br>
<code>b.length = a.length</code>.</p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<p><code>true</code> if there is a <em>swap sequence</em>, and <code>false</code> otherwise.</p>
</li>
</ul>
