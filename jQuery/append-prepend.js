$("h1").before("<p>Hello world!</p>");

/* The before() method inserts specified content in front of (before) the selected elements.
e.g. - <p>Hello World!</p> 
<h1> xyz </h1> */

$("h1").after("<p>Hello world!</p>");

/* The after() method inserts specified content after the selected elements. 
e.g. - <h1> xyz </h1>
<p>Hello World!</p> 
*/

$("h1").prepend("<p> Hello World!</p>");

/* The prepend() method inserts specified content at the beginning of the selected elements.
e.g. - <h1> <p> Hello World!</p> Hello. </h1>  */

$("h1").append("<p> Hello World!</p>");
/* The append() method inserts specified content at the end of the selected elements.
e.g. -  <h1> Hello.<p> Hello World!</p></h1> */
