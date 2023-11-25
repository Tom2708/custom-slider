# Custom Slider

### General info

This slider works with **Overflows**, when a slide is not active it's hidden due to overflow.

It works both ways, forward and backward

**The slider is automatic**, if you want to edit the sliding frequency you can by increasing/decreasing the number in the `setInterval` function at the bottom of the JS File.

`setInterval(nextSlide, 5000);`

If you don't want the slider to be automatic, delete/comment the `setInterval` lines.

### Slides

You can of course use **your own code inside the slides**, just be a little careful with dimensions and overflows.

### Dots

Dots under the slider **generates automatically** based on how many slides you have, the first dot will always be generated as `active`.

As of now, the dots can't be clicked to jump across slides, but this feature will be added.