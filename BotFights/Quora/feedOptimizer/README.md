<p>Quora shows a customized feed of recent stories on a user's home page. Stories in Quora refer to activities that happen on the site, such as when a user adds a question or upvotes an answer. Each story has a score, which represents the value that story brings to the user. The goal is to quickly generate a feed of the best and most recent stories for the user every time they reload their Quora home page.</p>
<p>Your task is to design the algorithm that picks the stories that are displayed in the feed.</p>
<p>You are given a list of stories, each with a time of publication, score, and a certain height in pixels that it takes to display the story. Given the total number of pixels in the browser available for displaying the feed, you want to maximize the sum of scores for the stories that you can display in the feed at each time the user reloads their home page. You must only consider recent stories, so a story can be displayed at some moment if it was posted not longer than <code>span</code> units of time before that moment. You do not have to use up all the pixels in the browser.</p>
<p><strong>Example</strong></p>
<p>For <code>span = 10</code>, <code>h = 100</code> and</p>
<pre><code>events = [[11, 50, 30], 
          [12],
          [13, 40, 20],
          [14, 45, 40],
          [15],
          [16],
          [18, 45, 20],
          [21],
          [22]]
</code></pre>
<p>the output should be</p>
<pre><code>feedOptimizer(span, h, events) = [[50, 1],
                                  [135, 1, 2, 3],
                                  [135, 1, 2, 3],
                                  [140, 1, 3, 4],
                                  [130, 2, 3, 4]]
</code></pre>
<p>There are <code>4</code> stories (with ids <code>1</code> to <code>4</code>) and <code>5</code> reload events.</p>
<ul>
<li>At the first reload, there is only one story with score of <code>50</code> available for display;</li>
<li>After the next two reloads, there are <code>3</code> stories that take up <code>90</code> of the <code>100</code> pixels available, for a total score of <code>135</code>;</li>
<li>After reloading at time <code>21</code>, there are <code>4</code> stories available for choosing, but only <code>3</code> will fit into the browser height. The best set is <code>[1, 3, 4]</code> for a total score of <code>140</code>;</li>
<li>At the last reload event, you should no longer consider story <code>1</code> when choosing stories because it is more than <code>10</code> time units old.</li>
</ul>
<p>The best set is thus <code>[2, 3, 4]</code>.</p>
<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li>
<p><strong>[input] integer span</strong></p>
<p>The number of time units elapsed prior to the reload event.</p>
<p><em>Constraints:</em><br>
<code>5 ≤ span ≤ 100</code>.</p>
</li>
<li>
<p><strong>[input] integer h</strong></p>
<p>The height of the browser in pixels.</p>
<p><em>Constraints:</em><br>
<code>50 ≤ h ≤ 500</code>.</p>
</li>
<li>
<p><strong>[input] array.array.integer events</strong></p>
<p>An array of events. A story event is described by <code>3</code> positive integers: the time of publication, score, and its height in pixels. A reload event is described by <code>1</code> positive integer: the timestamp of the reload.</p>
<p>The events are given in chronological order, and it is guaranteed that no two events occur at the same time.</p>
<p><em>Constraints:</em><br>
<code>5 ≤ events.length ≤ 100</code>,<br>
<code>1 ≤ events[i][j] &lt; 10<sup>9</sup></code>.</p>
</li>
<li>
<p><strong>[output] array.array.integer</strong></p>
<p>For each reload event, return an array where the first element is the best summary score, the other elements form the best set of ids. Ids should be returned in ascending order. Answer arrays should be ordered by their corresponding reload event times.</p>
<p>If two sets of stories give the same score, choose the set with fewer stories. If there is still a tie, choose the set which has the <a href="lexicographical-order-for-arrays">lexicographically smaller</a> set of ids.</p>
</li>
</ul>