<p>On Quora, a question can have a variety of answers submitted by the community. Questions are assigned topic tags to improve discoverability, and <em>views</em> are tracked at the answer level to identify top answers and surface them in the the feed and search results.</p>
<p>To be more specific, this is how the current system works:</p>
<ul>
<li>A user can write an answer to a question;</li>
<li>A question can have multiple answers;</li>
<li>A question can be assigned multiple topic tags;
<ul>
<li>For example, "How many software engineers are there at Google as of 2015?" is a question that is tagged with the topics "Silicon Valley", "Google", and "Software Engineering".</li>
</ul>
</li>
<li>An answer can get views.</li>
</ul>
<p><em>Most Viewed Writers</em> are the top <code>10</code> writers whose answers are the most viewed within a topic (when there are fewer than <code>10</code> writers, this would include all writers). An answer is said to be within a topic if it belongs to a question tagged with that topic.</p>
<p>Given the current state of the system provided below, compute the <em>Most Viewed Writers</em> in each topic, from the smallest <code>topic_id</code> to the largest one.<br>
For fixed <code>topic_id</code>, the set of <em>Most Viewed Writers</em> should be returned in the following format:</p>
<ul>
<li>&lt;user_id_1&gt; &lt;views_1&gt;</li>
<li>&lt;user_id_2&gt; &lt;views_2&gt;</li>
<li>...</li>
<li>&lt;user_id_N&gt; &lt;views_N&gt;</li>
</ul>
<p>where</p>
<ul>
<li><code>N</code> is the number of <em>Most Viewed Writers</em> in the topic <code>topic_id</code>;</li>
<li><code>user_id_i</code> is the id of <code>i<sup>th</sup></code> user in the set;</li>
<li><code>views_i</code> is the total number of views the user gets across all answers in that topic.<br>
When two users have the same number of views, the user with the smaller <code>user_id</code> should come first.</li>
</ul>
<p><strong>Example</strong></p>
<p>For <code>topicIds = [[1, 2, 3], [2, 3, 4], [1, 4], [2, 3]]</code>,<br>
<code>answerIds = [[6, 4], [1, 2], [5], [3]]</code> and<br>
<code>views = [[2, 1, 2], [6, 3, 5], [3, 3, 0], [5, 1, 1], [4, 2, 3], [1, 4, 2]]</code>, the output should be</p>
<pre><code>mostViewedWriters(topicIds, answerIds, views) = [
    [[3, 5], [2, 3], [1, 1]],
    [[3, 5], [2, 3], [1, 2], [4, 2]],
    [[3, 5], [2, 3], [1, 2], [4, 2]],
    [[1, 3], [4, 2]]
]
</code></pre>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] array.array.integer topicIds</strong></p>
<p><code>topicIds[i]</code> contains topic ids for the <code>i<sup>th</sup></code> question. Question may have no topics.</p>
<p><em>Constraints:</em><br>
<code>1 ≤ topicIds.length ≤ 5</code>,<br>
<code>0 ≤ topicIds[i].length ≤ 4</code>,<br>
<code>1 ≤ topicIds[i][j] ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[input] array.array.integer answerIds</strong></p>
<p><code>answerIds[i]</code> contains answer ids for the <code>i<sup>th</sup></code> question. Question may have no answers.</p>
<p><em>Constraints:</em><br>
<code>answerIds.length = topicIds.length</code>,<br>
<code>answerIds[i].length = topicIds[i].length</code>,<br>
<code>1 ≤ answerIds[i][j] ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[input] array.array.integer views</strong></p>
<p>For each valid <code>i</code>, <code>views[i]</code> contains informations about answer views:</p>
<ul>
<li><code>views[i][0]</code> - <code>answer_id</code>, the id of the answer. It is guaranteed that this id is contained in at least one <code>answerIds[i]</code> list, and for each answer id from <code>answerIds</code> there's a corresponding element in <code>views</code>;</li>
<li><code>views[i][1]</code> - <code>user_id</code>, the id of the user;</li>
<li><code>views[i][2]</code> - <code>views</code>, the number of views the answer <code>answer_id</code> gets.</li>
</ul>
<p><em>Constraints:</em><br>
<code>1 ≤ views.length ≤ 15</code>,<br>
<code>views[i].length = 3</code>,<br>
<code>0 ≤ views[i][j] ≤ 1000</code>.</p>
</li>
<li>
<p><strong>[output] array.array.array.integer</strong></p>
<p>An array, containing <em>Most Viewed Writers</em> for each topic, from the smallest <code>topic_id</code> to the largest one.</p>
</li>
</ul>