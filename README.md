# css-send
quick few lines of code made to make my life a teeny bit easier by using javascript to send data to css variables. i don't intend to formalize this unless it like randomly blows up but have some helpful tips below. feedback always accepted
## how to use
its pretty easy just go to css-send.js and copy paste the javascript into your file. its pretty simple just sends scroll data to css variables

### Current variables
`--scroll`: The current javascript `window.scrollY` value (there's no scrollX sorry unless you bug me about it)

`--scroll-percent`: A number between 0 and 100 of the current scroll percentage.


`--lastClickX`: The most recent click location in pixels relative to the window (or whatever math javascript does)

`--lastClickY`: Same thing as above but on the Y axis instead


`--lastMouseX`: Similar to `lastClickX`, except triggers on mouse movement and gets the current position of the mouse

`--lastMouseY`: Same thing as above but on the Y axis instead

### Conditionals

These are probably very janky and might slow down visible rendering so use at your own risk but so far they work pretty well in the small-scale contexts I have tried them in. To use a conditional css variable, create your variable (preferably in `:root` since thats where the JS will send the data anyway) using ternaries prefixed by `eval` to let the JS know its an equation. This is best described using an example, so below is an example of a div that changes background color based on scroll position. For javascript variables, use the css variables but styled in a javscript way i guess? `scroll`, `lastClickX`, etc.  

```
:root{
  --bg: "eval(scroll > 100 ? 'blue' : 'green')"
}

div{
  background-color: var(--bg, green)
}
```

### Might be helpful to know...

Since this only sends numbers without a unit, in css you can convert number to units by doing `calc(var(--var-name) * 1un)` where `un` is your desired unit

(more to be added as and when needed)

## To Do

- Better communication between CSS and JS
- Optimize `update()`
- Send movement data from JS to CSS
