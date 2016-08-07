https://codefights.com/challenge/vj7GNBvrCeN8gH8fP/main
<p>Have you ever looked at the nutrition facts to see how many calories the food contains? Here's what you can find out if you take a look:</p>
<ul>
<li>Carbohydrates give you <code>4</code> calories per gram.</li>
<li>Fat has <code>9</code> calories per gram.</li>
<li>Protein has <code>4</code> calories per gram.</li>
</ul>
<p>Given the number of grams of <code>carbohydrates</code>, <code>fat</code>, and <code>protein</code> in a serving of an arbitrary food item, and given the maximum number of calories <code>maxCalories</code> you should intake in a day, figure out how many full servings you can eat.</p>
<p>It is guaranteed that the food can give you at least a bit nutritious.</p>
<p><strong>Example</strong></p>
<p>For <code>carbohydrates = 3</code>, <code>fat = 2</code>, <code>protein = 6</code> and <code>maxCalories = 300</code>,<br>
the output should be<br>
<code>simpleNutritionCalc(carbohydrates, fat, protein, maxCalories = 5</code>.</p>
<p>In this example, a serving has <code>3</code> grams carbohydrates, <code>2</code> grams fat, and <code>6</code> grams protein. You are allowed to eat <code>300</code> calories at most.</p>
<p>There're <code>3 * 4 + 2 * 9 + 6 * 4 = 54</code> calories in one serving, so you can eat <code>300 / 54 = 5.555555 --&gt; 5</code> servings a day.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer carbohydrates</strong></p>
<p>The number of grams of carbohydrates.</p>
<p><em>Constraints:</em><br>
<code>0 ≤ carbohydrates ≤ 10<sup>6</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer fat</strong></p>
<p>The number of grams of fat.</p>
<p><em>Constraints:</em><br>
<code>0 ≤ fat ≤ 10<sup>6</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer protein</strong></p>
<p>The number of grams of protein.</p>
<p><em>Constraints:</em><br>
<code>0 ≤ protein ≤ 10<sup>6</sup></code>.</p>
</li>
<li>
<p><strong>[input] integer maxCalories</strong></p>
<p>The maximum number of calories you can eat.</p>
<p><em>Constraints:</em><br>
<code>0 ≤ maxCalories ≤ 2 · 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The number of servings of food you can eat.</p>
</li>
</ul>
