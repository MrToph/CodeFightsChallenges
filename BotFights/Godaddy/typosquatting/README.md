<div data-reactroot="" class="markdown"><p><em>Typosquatting</em> is a hack that relies on mistakes made by Internet users when inputting a website address into a web browser. So if a user is trying to go to <code>godaddy.com</code> but they accidentally type in <code>goddady.com</code> and someone else owns that domain, they could pretend to be GoDaddy and steal valuable user information.</p>
<p>Assume that GoDaddy is introducing a new feature that helps users protect their domains from typosquatting. It is known that a typosquatter's URL is usually similar to the victim's domain, but has some <em>typos</em> in it, where a <em>typo</em> means that letters in two adjacent positions have been swapped.</p>
<p>Given <code>n</code>, the number of additional domains the owner is willing to buy to protect their domain against typosquatting, GoDaddy calculates the maximum number <code>k</code> such that all of the domains with <code>k</code> or fewer <em>typos</em> can be bought (excluding the original domain itself).</p>
<p>Your task is to implement an algorithm that finds <code>k</code> given <code>n</code> and a domain name.</p>
<p><strong>Example</strong></p>
<ul>
<li>
<p>For <code>n = 7</code> and <code>domain = "godaddy.com"</code>, the output should be<br>
<code>typosquatting(n, domain) = 1</code>.</p>
<p>For <code>k = 1</code> the following <em>typos</em> can be made:</p>
<pre><code>"ogdaddy.com"
"gdoaddy.com"
"goadddy.com"
"goddady.com"
"godadyd.com"
"godaddy.ocm"
"godaddy.cmo"
</code></pre>
</li>
</ul>
<p><code>7</code> domains to buy altogether. That's exactly the number of domains the user can afford, so the answer is <code>1</code>.</p>
<ul>
<li>
<p>For <code>n = 9</code> and <code>domain = "omg.tv"</code>, the output should be<br>
<code>typosquatting(n, domain) = 2</code>.</p>
<ul>
<li>
<p>For <code>k = 1</code>, the following <em>typos</em> can be made:</p>
<pre><code>"mog.tv"
"ogm.tv"
"omg.vt"
</code></pre>
</li>
<li>
<p>For <code>k = 2</code>, <code>4</code> more <em>typos</em> can be obtained:</p>
<pre><code>"mgo.tv" (from "mog.tv")
"mog.vt" (from "mog.tv" or "omg.vt")
"gom.tv" (from "ogm.tv")
"ogm.vt" (from "ogm.tv" or "omg.vt")
</code></pre>
</li>
<li>
<p>For <code>k = 3</code>, there're <code>3</code> more <em>typos</em> to consider:</p>
<pre><code>"gmo.tv" (from "mgo.tv" of "gom.tv")
"mgo.vt" (from "mgo.tv" or "mog.vt")
"gom.vt" (from "gom.tv" or "ogm.vt")
</code></pre>
</li>
</ul>
<p>Since <code>n = 9</code>, it's not enough to buy all domains with <code>3</code> or fewer <em>typos</em>, but it's enough to buy with <code>2</code> or fewer, so the answer is <code>2</code>.</p>
</li>
</ul>
<p><em>Note that equal domain strings that may be obtained differently are considered the same.</em></p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer n</strong></p>
<p>The number of domains the domain owner is willing to buy.</p>
<p><em>Constraints:</em><br>
<code>0 ≤ n ≤ 10<sup>4</sup></code>.</p>
</li>
<li>
<p><strong>[input] string domain</strong></p>
<p>The domain to protect.</p>
<p><em>Constraints:</em><br>
<code>3 ≤ domain.length ≤ 20</code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<p>The maximum <code>k</code> such that all of the domains with <code>k</code> or fewer <em>typos</em> can be bought. If it is possible to buy all the domains which can be obtained from <code>domain</code> by an arbitrary number of <em>typos</em>, return <code>-1</code> instead.</p>
</li>
</ul>
</div>