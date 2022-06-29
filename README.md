# Pair Programming test for Javascript

## Approach
Treat this code as a merge request, so you will provide feedback to the developer (US).

You will have 15-20 minutes, don't worry if you can't address everything!

You don't need to rewrite the code, but you can modify or add comments as you go.

## Functionality
The purpose of the code in the PR: `The code sorts a JSON object by the key, which is a number`

The method is in `./index.js` and tests in `./index.test.js`

Example input:
```json
{
 "7": "seventh",
 "1": "first",
 "3": "third",
 "2": "second",
 "20": "twentyth",
 "11": "eleventh"
}
```
Expected output
```json
{
 "1": "first",
 "2": "second",
 "3": "third",
 "7": "seventh",
 "11": "eleventh",
 "20": "twentyth"
}
```
