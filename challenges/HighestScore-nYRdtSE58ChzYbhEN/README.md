https://codefights.com/challenge/nYRdtSE58ChzYbhEN/main
<p>You and your friend are playing a game, where you are player one and he is player two. In this game, your task is to get the highest possible score. Your opponents goal is to make your final score as small as possible.</p>
<p>You are given a binary tree which represents the game. Each inner node of the tree represents a state of the game, and each leaf contains an integer which represents the final score.</p>
<p>After you make a move, your opponent makes a move that blocks one of your possible next moves.</p>
<p>Your task is to find the maximum number of points you can get by the end of the game.</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>game = "[7, 1]"</code>, the output should be<br>
<code>HighestScore(game) = 7</code>.</p>
<p>You make the first move and can instantly get to the leaf, which will give you <code>7</code> points.<br>
<img src="http://i.imgur.com/nm0Ydj6.png" alt=""></p>
</li>
<li>
<p>For <code>game = "[[10,8],5]"</code>, the output should be<br>
<code>HighestScore(game) = 8</code>.</p>
<p>At first, you should choose the left branch. Your opponent will then block branch <code>10</code> and leave you branch <code>8</code>.</p>
<p><img src="http://i.imgur.com/RwCIH3j.png" alt=""></p>
</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] string game</strong></p>
<p>A string containing an array representing the game tree as a binary tree of nested binary decision nodes.</p>
<p><em>Constraints:</em><br>
<code>2 ≤ number_of_leafs ≤ 6000</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The highest possible score for Player # 1.</p>
</li>
</ul>
