https://codefights.com/challenge/DRDeYmmEGQMQNsJyb/main
<p>Have you ever played the game of fifteen?</p>
<p>The game board is a <code>4 × 4</code> matrix with distinct integers from <code>1</code> to <code>15</code> and one free cell.L et's call 2 cells adjacent, if they have a common side. On each step you can move the number adjacent to the free cell into it. When you do that, the cell from which the number came becomes empty.</p>
<p>For example having the following board:</p>
<table>
<tbody><tr>
<td>0</td> <td>1</td> <td>2</td> <td>3</td>
</tr>
<tr>
<td>4</td> <td>5</td> <td>6</td> <td>7</td>
</tr>
<tr>
<td>8</td> <td>9</td> <td>10</td> <td>11</td>
</tr>
<tr> 
<td>12</td> <td>13</td> <td>14</td> <td>15</td>
</tr>
</tbody></table>
where 0 is a free cell, you can move 1 leftwards and get
<table>
<tbody><tr>
<td>1</td> <td>0</td> <td>2</td> <td>3</td>
</tr>
<tr>
<td>4</td> <td>5</td> <td>6</td> <td>7</td>
</tr>
<tr>
<td>8</td> <td>9</td> <td>10</td> <td>11</td>
</tr>
<tr> 
<td>12</td> <td>13</td> <td>14</td> <td>15</td>
</tr>
</tbody></table>

<p>, or you can move 4 upwards and get</p>
<table>
<tbody><tr>
<td>4</td> <td>1</td> <td>2</td> <td>3</td>
</tr>
<tr>
<td>0</td> <td>5</td> <td>6</td> <td>7</td>
</tr>
<tr>
<td>8</td> <td>9</td> <td>10</td> <td>11</td>
</tr>
<tr> 
<td>12</td> <td>13</td> <td>14</td> <td>15</td>
</tr>
</tbody></table>

<p>For the given <code>gameboard</code> check if it is possible to turn it into </p>
<table>
<tbody><tr>
<td>1</td> <td>2</td> <td>3</td> <td>4</td>
</tr>
<tr>
<td>5</td> <td>6</td> <td>7</td> <td>8</td>
</tr>
<tr>
<td>9</td> <td>10</td> <td>11</td> <td>12</td>
</tr>
<tr> 
<td>13</td> <td>14</td> <td>15</td> <td>0</td>
</tr>
</tbody></table>
after some steps.<br><br>

<strong>Example</strong><br><br>

For 

<pre><code>gameboard= [[0, 1, 2, 3],
            [6, 7 , 8 , 4],
            [5, 9, 10, 11],
            [13, 14, 15, 12]]</code></pre>
the output should be<br>
<code>fifteen_game(gameboard) = true</code>.<br><br>

Here's how the initial board looks like:
<table>
<tbody><tr>
<td>0</td> <td>1</td> <td>2</td> <td>3</td>
</tr>
<tr>
<td>6</td> <td>7</td> <td>8</td> <td>4</td>
</tr>
<tr>
<td>5</td> <td>9</td> <td>10</td> <td>11</td>
</tr>
<tr> 
<td>13</td> <td>14</td> <td>15</td> <td>12</td>
</tr>
</tbody></table>
The first three steps produce
<table>
<tbody><tr>
<td>1</td> <td>2</td> <td>3</td> <td>0</td>
</tr>
<tr>
<td>6</td> <td>7</td> <td>8</td> <td>4</td>
</tr>
<tr>
<td>5</td> <td>9</td> <td>10</td> <td>11</td>
</tr>
<tr> 
<td>13</td> <td>14</td> <td>15</td> <td>12</td>
</tr>
</tbody></table>
One more step gives
<table>
<tbody><tr>
<td>1</td> <td>2</td> <td>3</td> <td>4</td>
</tr>
<tr>
<td>6</td> <td>7</td> <td>8</td> <td>0</td>
</tr>
<tr>
<td>5</td> <td>9</td> <td>10</td> <td>11</td>
</tr>
<tr> 
<td>13</td> <td>14</td> <td>15</td> <td>12</td>
</tr>
</tbody></table>
After four more steps it's possible to get
<table>
<tbody><tr>
<td>1</td> <td>2</td> <td>3</td> <td>4</td>
</tr>
<tr>
<td>5</td> <td>6</td> <td>7</td> <td>8</td>
</tr>
<tr>
<td>0</td> <td>9</td> <td>10</td> <td>11</td>
</tr>
<tr> 
<td>13</td> <td>14</td> <td>15</td> <td>12</td>
</tr>
</tbody></table>
And finally 
<table>
<tbody><tr>
<td>1</td> <td>2</td> <td>3</td> <td>4</td>
</tr>
<tr>
<td>5</td> <td>6</td> <td>7</td> <td>8</td>
</tr>
<tr>
<td>9</td> <td>10</td> <td>11</td> <td>12</td>
</tr>
<tr> 
<td>13</td> <td>14</td> <td>15</td> <td>0</td>
</tr>
</tbody></table>

<p><strong>Input/Output</strong></p>
<ul>
<li><strong>[time limit] 4000ms (js)</strong></li>
</ul>
<ul>
<li><p><strong>[input] array.array.integer gameboard</strong></p>
<p> A <code>4 × 4</code> matrix of distinct integers from <code>0</code> to <code>15</code>, where the cell with value <code>0</code> is free.</p>
</li>
<li><p><strong>[output] boolean</strong> </p>
<p> <code>true</code> if you can win the game, <code>false</code> otherwise.</p>
</li>
</ul>
