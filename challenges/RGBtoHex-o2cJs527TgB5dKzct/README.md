https://codefights.com/challenge/o2cJs527TgB5dKzct/main
<p>Colors on the web may be specified as an RGB triplet or in hexadecimal format (a hex triplet). They may also be specified according to their common English names in some cases; however, web developers who want to get even more precise with their color choices can use hexadecimal and RGB color values.</p>
<ol>
<li>
<p><strong>Hexadecimal color (<code>#RRGGBB</code>):</strong> Hexadecimal values that represent mixtures of red, green and blue. For example, red can be expressed with the hexadecimal value of <code>#FF0000</code>: the value <code>FF</code> represents red, <code>00</code> represents green, and <code>00</code> represents blue. However Sometimes in CSS, Shorthand Hexadecimal color - an abbreviated, three (hexadecimal)-digit form is used. Expanding this form to the six-digit form is as simple as doubling each digit: <code>#09C</code> becomes <code>#0099CC</code>.</p>
</li>
<li>
<p><strong>RGB (Red, Green, Blue) colors</strong>: Color created by three numbers representing red, green, and blue. When mixed together, the three values create a specific color. For example purple can be represented as <code>rgb(128, 0, 128)</code>.</p>
</li>
</ol>
<p>Your task is to write a function which takes RGB values as an array and returns it's Hexadecimal form as a string. The returned string should be a valid Hexadecimal color or, if possible, a Shorthand Hexadecimal Color.</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>rgb = [255, 69, 0]</code>, the output should be<br>
<code>RGBtoHex(rgb) = "#FF4500"</code>.</p>
<p>Note the leading zero that appeared in the <em>blue</em> component.</p>
</li>
<li>
<p>For <code>rgb = [255, 255, 255]</code>, the output should be<br>
<code>RGBtoHex(rgb) = "#FFF"</code>.</p>
<p>The Hexadecimal is <code>"#FFFFFF"</code>, which can be shortened to <code>"#FFF"</code>.</p>
</li>
</ul>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] array.integer rgb</strong></p>
<p>RGB Color as a triplet.</p>
<p><em>Constraints:</em><br>
<code>rgb.length = 3</code>,<br>
<code>0 ≤ rgb[i] ≤ 255</code>.</p>
</li>
<li>
<p><strong>[output] string</strong></p>
<p>Hexadecimal Color (Shorthanded, if possible).</p>
</li>
</ul>
