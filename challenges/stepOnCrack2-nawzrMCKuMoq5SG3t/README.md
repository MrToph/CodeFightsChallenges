https://codefights.com/challenge/nawzrMCKuMoq5SG3t/main
<p>This challenge is the evolution of the one published long ago: <em>stepOnCrack</em>.</p>
<p>Here is the original question :</p>
<blockquote>
<p>With which foot should I step on the <code>n<sup>th</sup></code> crack?</p>
<p>Ever since I was young, I used a pattern to decide with which foot I should step on the next crack in the ground. My goal was to 'balance', to the greatest extent possible, the number of times I stepped on cracks with each foot.</p>
<p>If the first time I stepped on a crack it was with my left foot, then the next time I stepped on the crack it would have to be with my right foot, so that I 'balanced' the fact that the left foot had already stepped on one.</p>
<p>Then the third time I stepped on a crack, it was again with my right foot, since even though each foot had had a turn, I had stepped with my left foot first, which was not completely 'balanced.' Now I had stepped twice with my right foot and once with my left foot, so in order to 'balance', the fourth time I would again step with my left foot.</p>
<p>Only when I was 21 years old and sitting in a course called Chaos Theory and Fractal Geometry in college, did I learn that this was actually a special pattern: the <a href="https://en.wikipedia.org/wiki/Thue%E2%80%93Morse_sequence">Thue-Morse sequence</a>.</p>
<p>Given the <code>first</code> foot with which I stepped on a crack, find the foot with which I should step on the <code>n<sup>th</sup></code> crack.</p>
</blockquote>
<p>In this challenge, the question is the same, but this time @GoldFibre has been cursed : he is immortal but has to walk like he used to when he was a child forever.
Will you be able to predict on which foot he will be standing after 2 steps? 100 steps? 100000000 steps?</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>first = "left"</code> and <code>n = 2</code>, the output should be<br>
<code>stepOnCrack2(first, n) = "right"</code>.</p>
</li>
<li>
<p>For <code>first = "right"</code> and <code>n = 3</code>, the output should be<br>
<code>stepOnCrack2(first, n) = "left"</code>.</p>
</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] string first</strong></p>
<p>The first foot with which @GoldFibre stepped on a crack. Either <code>"left"</code> or <code>"right"</code>.</p>
</li>
<li>
<p><strong>[input] string n</strong></p>
<p>The 1-based number of the crack on which @GoldFibre will step as a string.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ n ≤ 2<sup>51</sup></code>.</p>
</li>
<li>
<p><strong>[output] string</strong></p>
<p>The foot with which @GoldFibre should step on the <code>n<sup>th</sup></code> crack, either <code>"left"</code> or <code>"right"</code>.</p>
</li>
</ul>
