https://codefights.com/challenge/JhTtrzufR4hdrJPkQ/main
<p>Mr. Nonequation is bad at math. He sees a string of numbers, but he cannot figure out what operator to use to make an equation.</p>
<p>Given a string of numbers, turn it into a valid equation by inserting only one operator (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, or <code>%</code>) and one equals sign (<code>'='</code>) and return it. If it is not possible, return <code>"Not possible"</code> instead.</p>
<p>The operators should be to the left of the equals sign (<code>"="</code>)</p>
<ul>
<li><code>"+"</code> denotes addition</li>
<li><code>"-"</code> denotes subtraction</li>
<li><code>"*"</code> denotes multiplication</li>
<li><code>"/"</code> denotes <strong>non-integer</strong> division</li>
<li><code>"%"</code> denotes modulus (remainder)</li>
</ul>
<p>The operator should be place to the left of the equals  sign.<br>
It is guaranteed that there is only one possible answer. It is guaranteed that the numbers in the equation won't contain leading zeros.</p>
<p><strong>Example</strong></p>
<ul>
<li>For <code>nums = "123123246"</code>, the output should be<br>
<code>BasicEquationMaker(nums) = "123+123=246"</code>.</li>
<li>For <code>nums = "113"</code>, the output should be<br>
<code>BasicEquationMaker(nums) = "Not possible"</code>.</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li><p><strong>[input] string nums</strong></p>
<p> A string of numbers.</p>
<p> <em>Constraints:</em><br>
 <code>3 ≤ nums.length ≤ 15</code>.</p>
</li>
<li><p><strong>[output] string</strong> </p>
<p> A valid equation, or <code>"Not possible"</code> if it's impossible to construct one.</p>
</li>
</ul>
