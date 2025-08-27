## What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

** With getElementById we can get any element by it's Id, it is a uniqe identity so it's return single element on the other hand getElementsByClassName return a list of HTML Collection, it give us access to multiple elements.
querySelector return the first element that it found with CSS selector, on the other hand querySelectorAll returns a Nodelist of all elements that matches with the selector.

 ## How do you **create and insert a new element into the DOM**?

 ** First i collect the parent div with 'document.getElementById("id")' where i want to creat a new element.
I keep that in a variable.

Then i creat the element with document.creatElement("element") and put that in a variable.
    if i want to add something like(ex: id, classlist, innerText, innerHTML), i will use add method or element.(innerText) as example.
At last 
With appendChild, prepend, before, after method (like parentDiv.appendChild("element") i insert the element into the DOM.


 ## What is **Event Bubbling** and how does it work?

 ** Event Bubbling is a way where events in the DOM travel from child element up to last parent element. A event first happen to the closest element then it travel like a bubble to it's parents.


## What is **Event Delegation** in JavaScript? Why is it useful?

** Even Delegation is a method where we can attach a eventListener to a single parent elements instead of other child elements. It's work with Event bubbleng. It's work dynamic way with all the child elements which are not exist when the page loads.



## What is the difference between **preventDefault() and stopPropagation()** methods?


** preventDefault() use to stops the default browser action for an event, it's prevent from submission or navigation automataically.
stopPropagation() does the traveling the event bubbling up it does not prevent the default browser action.