https://codefights.com/challenge/3vZaAk4SrnfoHgr9C/main
<p>After years of preparation, each class of Squircle Academy starts to learn about Graph Theory. The course starts with a game called "King Chicken". The students run around for a certain amount of time, trying to "peck" each other.  If student A pecks student B, then B is called a <em>servant</em> of A, and B cannot peck A.  </p>
<p>After time is up, the group gets together, and the winners are the students who are <em>king chickens</em>. Student A is a <em>king chicken</em> if there is no one other than student A himself that he and his <em>servants</em> have not pecked. There can be more than one <em>king chicken</em>.</p>
<p>Brackie, a student in such class, wants as many people as possible to win, and therefore is thinking about the maximum number of <em>king chickens</em> in a game with <code>n</code> players. It's hard for Brackie to apply this problem to graph theory, however, and he needs your assistance.  Can you solve his problem?</p>
<p>_Example__</p>
<p><code>KingChicken(3) = 3</code></p>
<p>There are three players in the game, students A, B and C.  To achieve the maximum number of <em>king chickens</em>, A pecks B, B pecks C and C pecks A. </p>
<ul>
<li>A is a <em>king chicken</em> because A pecked B and B, A's <em>servant</em>, pecked C.  </li>
<li>B is a <em>king chicken</em> because B pecked C and C, B's <em>servant</em>, pecked A.  </li>
<li>C is a <em>king chicken</em> because C pecked A and A, C's servant, pecked B. </li>
</ul>
<p>Therefore, all players are <em>king chickens</em>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li><p><strong>[input] integer n</strong></p>
<p> The number of students in the game of "King Chicken".</p>
<p> <em>Constraints:</em><br>
 <code>1 ≤ n ≤ 10<sup>4</sup></code>.</p>
</li>
<li><p><strong>[output] integer</strong> </p>
<p> The maximum number of <em>king chickens</em> in the game.</p>
</li>
</ul>
