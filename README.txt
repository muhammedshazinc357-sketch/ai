SHAZIN AI ASSISTANT WEBSITE
===========================

Files:
- index.html: page layout and contact links
- style.css: responsive design
- script.js: chat behavior and answer matching

HOW TO RUN
1. Extract the ZIP file.
2. Open index.html in a modern browser.
3. Type a question or tap one of the suggested prompts.

This is a front-end demo built with HTML, CSS, and vanilla JavaScript. It does not connect to an online AI service; it answers using keyword-matched responses in script.js. The current time is read from the visitor's device.

TO ADD MORE ANSWERS
Open script.js and add another `if` rule inside answerQuestion(), before the fallback response. Example:
if (/\b(your favorite color)\b/.test(q)) return "My favorite color is blue.";

Contact details are displayed publicly on the page as requested. Review them before publishing the website online.
