# Unexpected String Concatenation in JavaScript
This example demonstrates a common JavaScript bug caused by the language's loose typing system.  When adding a number and a string, JavaScript performs string concatenation instead of numerical addition, potentially leading to unexpected results.

The `bug.js` file contains the problematic code.  The `bugSolution.js` provides a corrected version, explicitly converting inputs to numbers before performing the addition.

This issue highlights the importance of careful type handling in JavaScript to prevent such errors.