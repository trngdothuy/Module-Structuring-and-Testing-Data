## Objects

In this activity, we'll explore some additional concepts that you'll encounter in more depth later on in the course.

Open the Chrome devtools Console, type in `console.log` and then hit enter

What output do you get?
--> Answer: "ƒ log() { [native code] }"

Now enter just `console` in the Console, what output do you get back?
--> Answer: "console {debug: ƒ, error: ƒ, info: ƒ, log: ƒ, warn: ƒ, …}" with an arrow to expand more

Try also entering `typeof console`
--> Answer: 'object'

Answer the following questions:

What does `console` store?
--> Answer: It can store messages, errors, warnings,.. during development so we can debug

What does the syntax `console.log` or `console.assert` mean? In particular, what does the `.` mean?
--> 'console.log' to print out the message outputs to the console, 'console.assert' to write an error message to the console if the assertion is false, if the assertion is true, nothing happens. In particular, "." is to call the function that relating to the console object.
