Open a new window in Chrome,

then locate the **Console** tab.

Voila! You now have access to the [Chrome V8 Engine](https://www.cloudflare.com/en-gb/learning/serverless/glossary/what-is-chrome-v8/).
Just like the Node REPL, you can input JavaScript code into the Console tab and the V8 engine will execute it.

Let's try an example.

In the Chrome console,
invoke the function `alert` with an input string of `"Hello world!"`;

What effect does calling the `alert` function have?
-> Answer: It pops up an alert box showing "developer.mozilla.org says Hello world!" and a "OK" button

Now try invoking the function `prompt` with a string input of `"What is your name?"` - store the return value of your call to `prompt` in an variable called `myName`.

What effect does calling the `prompt` function have?
-> Answer: It pops up a box saying "developer.mozilla.org says What is your name?", an input field, "Cancel" button and "OK" button
What is the return value of `prompt`?
--> Answer: If clicking "OK", it will be what I entered in the input field (eg: "text" or "" if I didn't fill in the space). If clicking "Cancel", it will be null.

