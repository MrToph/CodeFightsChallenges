https://codefights.com/challenge/CHD5wy6TYbL4phsRT/main
<p>CocaMinion is a minion who is very fond of Coke. He once went to a store with some <code>dollars</code> to buy his favourite beverage <em>Coca Cola</em>. The shop sells coke in two types of bottles: plastic and glass, each containing the same amount of coke. Each plastic bottle costs <code>plasticCost</code>, and each glass one costs <code>glassCost</code>. However, there're only <code>glassCnt</code> glass bottles (the number of plastic bottles is close to infinity, so CocaMinion didn't bother to count them).</p>
<p>What's the maximum number of bottles CocaMinion can buy?</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>dollars = 9</code>, <code>plasticCost = 2</code>, <code>glassCost = 4</code> and <code>glassCnt = 1</code>,<br>
the output should be<br>
<code>CocaMinion(dollars, plasticCost, glassCost, glassCnt) = 4</code>.</p>
<p>Plastic bottles cost less than glass ones, so CocaMinion can spend all his money to buy <code>4</code> bottles.</p>
</li>
<li>
<p>For <code>dollars = 9</code>, <code>plasticCost = 4</code>, <code>glassCost = 3</code> and <code>glassCnt = 5</code>,<br>
the output should be<br>
<code>CocaMinion(dollars, plasticCost, glassCost, glassCnt) = 3</code>.</p>
<p>CocoMinion can buy <code>3</code> glass bottles with all his money.</p>
</li>
<li>
<p>For <code>dollars = 9</code>, <code>plasticCost = 5</code>, <code>glassCost = 2</code> and <code>glassCnt = 2</code>,<br>
the output should be<br>
<code>CocaMinion(dollars, plasticCost, glassCost, glassCnt) = 3</code>.</p>
<p>CocoMinion can buy both glass bottles for <code>2</code> dollars each and one plastic bottle for <code>5</code> dollars.</p>
</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer dollars</strong></p>
<p>Number of Dollars CocaMinion has.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ dollars ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer plasticCost</strong></p>
<p>Price of each plastic bottle.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ plasticCost ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer glassCost</strong></p>
<p>Price of each glass bottle.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ glassCost ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer glassCnt</strong></p>
<p>The number of glass bottles.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ glassCnt ≤ 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The maximum number of Bottles CocaMinion can buy.</p>
</li>
</ul>
