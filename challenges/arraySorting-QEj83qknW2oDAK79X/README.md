https://codefights.com/challenge/QEj83qknW2oDAK79X/main
<p>You are given an array <code>x</code> that consists of numbers <code>1, 2, ..., x.length</code> in some order. Your task is to sort the array in increasing order.</p>
<p>Each move, you can select one or more disjoint pairs of array's elements (not necessarily neighboring) and swap all the pairs simultaneously.</p>
<p>What is the minimum number of moves required to sort the array?</p>
<p><strong>Example</strong></p>
<p>For <code>x = [3, 1, 4, 2]</code>, the output should be<br>
<code>arraySorting(x) = 2</code>.</p>
<p>Here's the fastest way to sort the array. First, you swap the pairs <code>(3, 1)</code> and <code>(4, 2)</code> simultaneously and the array becomes <code>[1,3,2,4]</code>. Then, you swap the pair <code>(3,2)</code> and the array becomes <code>[1,2,3,4]</code>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] array.integer x</strong></p>
<p>An array of integers that contains the numbers <code>1, 2, ..., x.length</code> in some order</p>
<p><em>Constraints:</em><br>
<code>1 ≤ x.length ≤ 20</code>,<br>
<code>1 ≤ x[i] ≤ x.length</code>,<br>
<code>x[i] ≠ x[j], i ≠ j</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
</li>
</ul>
