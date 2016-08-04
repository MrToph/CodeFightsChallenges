<p>Domain name forwarding lets GoDaddy domain owners automatically redirect their site visitors to a different site URL. Sometimes the visitors have to go through multiple redirects before ending up on the correct site.</p>
<p>Using the DNS Manager, GoDaddy customers can view redirects in a simple visual format. One handy feature is the ability to group the domains by the final website they redirect to. Your task is to implement this feature.</p>
<p>For the given <code>redirects</code> list, organize its domains into groups where for a specific group each domain eventually redirects visitors to the same website.</p>
<p><strong>Example</strong></p>
<p>For</p>
<pre><code>redirects = [["godaddy.net", "godaddy.com"], 
             ["godaddy.org", "godaddycares.com"], 
             ["godady.com", "godaddy.com"],
             ["godaddy.ne", "godaddy.net"]]
</code></pre>
<p>the output should be</p>
<pre><code>domainForwarding(redirects) = [["godaddy.com", "godaddy.ne", "godaddy.net", "godady.com"], 
                               ["godaddy.org", "godaddycares.com"]]
</code></pre>
<p>In the first group, <code>"godaddy.ne"</code> redirects to <code>"godaddy.net"</code>, which in turn redirects to <code>"godaddy.com"</code>. <code>"godady.com"</code> redirects visitors to <code>"godaddy.com"</code> as well.<br>
In the second group, <code>"godaddy.org"</code> redirects visitors to <code>"godaddycares.com"</code>.</p>
<p>Note, that domains in each group are sorted <em>lexicographically</em>. The first group goes before the second because <code>"godaddy.com"</code> is <em>lexicographically smaller</em> than <code>"godaddycares.com"</code>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] array.array.string redirects</strong></p>
<p>Each of <code>redirects[i]</code> consists of two domains. The second element is the domain to which the first element redirects. Each domain is a string that may consist of lowercase Latin letters, hyphens (<code>'-'</code>) and full stops (<code>'.'</code>).<br>
It is guaranteed that domain redirects do not contain cycles, i.e. it is impossible to get back to the current site after any number of redirects. It is also guaranteed that each domain redirects to no more than one another domain, i.e. for each <code>i ≠ j</code> <code>redirects[i][0] ≠ redirects[j][0]</code>.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ redirects.length ≤ 15</code>,<br>
<code>1 ≤ redirects[i][j].length ≤ 25</code>.</p>
</li>
<li>
<p><strong>[output] array.array.string</strong></p>
<p>Return the array of domain groups, such that each domain from <code>redirects</code> belongs to one of the group, and domains from one group redirect visitors to the same website. Arrange the domains in each group in <a href="keyword://lexicographical-order-for-strings">lexicographical order</a>, and sort the groups by the domains they redirect to (also <em>lexicographically</em>).</p>
</li>
</ul>