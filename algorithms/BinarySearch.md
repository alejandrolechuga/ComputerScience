
# Binary Search Algorithm

Binary Search is used to quicly find a value in a sorted sequence. 

For example we have the following array.

`[ 0 ][ 4 ][ 7 ][ 8 ][ 12 ][ 13 ][ 15 ][ 16 ][ 30 ][ 40 ]` 

And we want to find the number 16 right! we need an index for the start another for the end so start = 0 and end = 9
and then we canculate the middle element

* `start + ( end - start ) / 2 => 0 + ( 9 - 0 ) / 2 => 4.5` round up 5 , so the middle element is 5.
* Is the middle element the number we are looking for ? 5 isn't the number. 
* Is the number we are looking lower than the middle element ? No
* Is the number we are looking greater than the middle element ? Yes
  * Then we say that our start now will be the middle element and our scan will be only on 

`[ 13 ][ 15 ][ 16 ][ 30 ][ 40 ]`

Now we do the same steps 
* `start + (end - start) / 2 = > 5 + ( 9 - 5 ) /2 => 7` so the middle element is position 7 
* Is the middle element the number we are looking for ? Yes then we return it immediately 

So in the scenario we were looking for 30 it was going to repeat the steps until it got to the number.
If the number doens't exist by default we should return -1




sources: 
https://www.youtube.com/watch?v=j5uXyPJ0Pew&t=645s
https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
