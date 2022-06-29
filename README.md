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
 "1": "first",
 "2": "second",
 "3": "third",
 "11": "eleventh",
 "07": "seventh",
 "20": "twentyth",
 "02": "secondsecond" 
}
```
Expected output
```json
{
 "1": "first",
 "3": "third",
 "2": "second",
 "11": "eleventh",
 "07": "seventh",
 "20": "twentyth",
 "02": "secondsecond" 
}
```
