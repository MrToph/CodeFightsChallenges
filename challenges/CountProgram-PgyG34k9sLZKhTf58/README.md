https://codefights.com/challenge/PgyG34k9sLZKhTf58/main
<p><em>Esoteric programming language</em>, or <em>esolang</em>, as the name suggests, is a kind of programming language that is meant to be only understood by a few people. The reasons for their existence vary, ranging from studying the mathematical structure of program to just having fun. Among all kinds of <em>esolangs</em>, <a href="https://en.wikipedia.org/wiki/Brainfuck">Brainfuck</a> is perhaps the most well known one. You can find the detail about this programming language following the link, but for the purpose of this challenge, let me briefly summarize what a Brainfuck program is.</p>
<p>A Brainfuck program is composed of eight types of commands, represented by these eight characters: <code>&gt;</code>, <code>&lt;</code>, <code>+</code>, <code>-</code>, <code>.</code>, <code>,</code>, <code>[</code> and <code>]</code>. A Brainfuck program is valid, if the brackets <code>[</code> and <code>]</code> are matched as parentheses do. As regular parenthesis, they can also be nested. For example, <code>+++</code>, <code>[-&gt;+&lt;]</code>, and <code>,&gt;++++[-&gt;++++++++[-&lt;&lt;+&gt;&gt;]&lt;]&lt;.[-]</code>
are all valid Brainfuck programs, but <code>+++&lt;[</code> and <code>[]],.</code> are not.</p>
<p>Because it has only eight kinds of commands, it is possible to count the number of valid programs of a specified length. This is your task: calculate the number of valid Brainfuck program of the given <code>length</code>. Since this number grows exponentially, return the answer modulo <code>10<sup>9</sup> + 7</code>.</p>
<p><strong>Example</strong></p>
<ul>
<li>For <code>length = 1</code>, the output should be<br>
<code>CountProgram(length) = 6</code>.</li>
<li>For <code>length = 2</code>, the output should be<br>
<code>CountProgram(length) = 37</code>.</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer length</strong></p>
<p>The specified length.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ length ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The number of valid Briainfuck programs of the given <code>length</code> modulo <code>10<sup>9</sup> + 7</code>.</p>
</li>
</ul>
