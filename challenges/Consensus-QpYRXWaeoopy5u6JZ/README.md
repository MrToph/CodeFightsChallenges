https://codefights.com/challenge/QpYRXWaeoopy5u6JZ/main
<p>A number of candidates are running for office. Each one has official positions on many issues, and these positions are given as a string, where the <code>i<sup>th</sup></code> character is a position on the <code>i<sup>th</sup></code> issue. A position can be Yes (<code>'Y'</code>), No (<code>'N'</code>), or undecided (<code>'?'</code>).</p>
<p>A <em>consensus position</em> is one where all candidates either agree or are undecided. While candidates can be undecided, a consensus position cannot be (i.e. it can't contain a <code>'?'</code> position on any issue).</p>
<p>Given positions of the candidates, your job is to figure out in how many ways the candidates can reach <em>consensus</em>.</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>candidate_positions = ["Y??", "??N"]</code>, the output should be<br>
<code>Consensus(candidate_positions) = 2</code>.<br>
There're two <em>consensus positions</em>: <code>"YYN"</code> and <code>"YNN"</code>.</p>
</li>
<li>
<p>For <code>candidate_positions = ["Y", "N"]</code>, the output should be<br>
<code>Consensus(candidate_positions) = 0</code>.<br>
It's impossible to reach <em>consensus</em> in this example.</p>
</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] array.string candidate_positions</strong></p>
<p>Array of strings of the same length. Each string contain only characters <code>'Y'</code>, <code>'N'</code> or <code>'?'</code>.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ candidate_positions.length ≤ 16</code>,<br>
<code>1 ≤ candidate_positions[i] ≤ 16</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The number of the position sets that all candidates can agree upon.</p>
</li>
</ul>
