<p>GoDaddy makes a lot of different <em>top-level domains</em> available to its customers. A <em>top-level domain</em> is one that goes directly after the last dot (<code>'.'</code>) in the domain name, for example <code>.com</code> in <code>example.com</code>. To help the users choose from available domains, GoDaddy is introducing a new feature that shows the type of the chosen <em>top-level domain</em>. You have to implement this feature.<br>
To begin with, you want to write a function that labels the domains as <code>"commercial"</code>, <code>"organization"</code>, <code>"network"</code> or <code>"information"</code> for <code>.com</code>, <code>.org</code>, <code>.net</code> or <code>.info</code> respectively.<br>
For the given list of <code>domains</code> return the list of their labels.</p>
<p><strong>Example</strong></p>
<p>For <code>domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"]</code>, the output should be<br>
<code>domainType(domains) = ["organization", "commercial", "network", "information"]</code>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] array.string domains</strong></p>
<p>A list of domains, where each domain contains at least one dot. It is guaranteed that each <em>top-level domain</em> of these domains belongs to one of the types described above.</p>
<p><em>Constraints:</em><br>
<code>4 ≤ domains.length ≤ 25</code>,<br>
<code>5 ≤ domains[i].length ≤ 20</code>.</p>
</li>
<li>
<p><strong>[output] array.string</strong></p>
<p>The list of labels for the given domains.</p>
</li>
</ul>