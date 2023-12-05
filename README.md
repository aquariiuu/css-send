# scrollsend
quick few lines of code made to make my life a teeny bit easier by using javascript to send data to css variables. 
## how to use
its pretty easy just go to css-send.js and copy paste the javascript into your file. its pretty simple just sends scroll data to css variables

### Current variables
`scroll`: The current javascript `window.scrollY` value (there's no scrollX sorry unless you bug me about it)

`scroll-percent`: A number between 0 and 100 of the current scroll percentage.


`lastClickX`: The most recent click location in pixels relative to the window (or whatever math javascript does)

`lastClickY`: Same thing as above but on the Y axis instead


`lastMouseX`: Similar to `lastClickX`, except triggers on mouse movement and gets the current position of the mouse

`lastMouseY`: Same thing as above but on the Y axis instead
