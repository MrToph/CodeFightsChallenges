https://codefights.com/challenge/CJjYQBCnP73Noq6Cg/main
<p>Vasya faced a serious problem: he has to work with a bunch of numbers. Since he has to print them out, he wants to use as little paper as possible. And that is why he came up with the following idea: convert array of numbers into a string by the following rule.</p>
<ol>
<li>Converted each number to the base <code>26</code>. To write a number, Vasya will use lowercase letters of Latin alphabet: <code>'a' = 0</code>, <code>'b' = 1</code>, ..., <code>'z' = 25</code>;</li>
<li>Find the longest of the strings obtained by the conversion;</li>
<li>Turn all obtained strings of the same length by appending symbols <code>'a'</code> in front of the strings that are shorter than the longest one;</li>
<li>Combine the strings into one. The first symbol of the resulting string is the length of the each string as a letter (<code>'a'</code> for <code>1</code>, <code>'b'</code> for <code>2</code>, ..., <code>'z'</code> for <code>26</code>). After that all strings are written one by one in the order the numbers they were converted from appear in the array.</li>
</ol>
<p>Check out examples for better understanding.</p>
<p>Your task is to convert the given array <code>a</code> to a string as Vasya suggests.</p>
<p><strong>Example</strong></p>
<p>For <code>a = [1, 28, 55]</code>, the output should be<br>
<code>conversion(a) = "babbccd"</code>.</p>
<p>Here's how the numbers are converted:</p>
<ul>
<li><code>1 = "b"</code>;</li>
<li><code>28 = "bc"</code>;</li>
<li><code>55 = "cd"</code>.</li>
</ul>
<p>Since the longest string is of length <code>2</code>, number <code>1</code> should be turned into <code>"ab"</code>.</p>
<p>The final answer is <code>"babbccd"</code>, where:</p>
<ul>
<li>the first letter <code>'b'</code> stands for the length of the longest string;</li>
<li>the next two letters <code>"ab"</code> stand for the first number;</li>
<li>the following two letters <code>"bc"</code> stand for the second number;</li>
<li>the last two letters <code>"cd"</code> stand for the last number.</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] array.integer a</strong></p>
<p>Array of integers.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ a.length ≤ 100</code>,<br>
<code>1 ≤ a[i] ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] string</strong></p>
<p>A string into which <code>a</code> is converted.</p>
</li>
</ul>
