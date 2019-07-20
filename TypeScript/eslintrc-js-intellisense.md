Issue: ** eslint --init ** now default to **.eslintrc.js**, you may find it has not code intellisense.
Reason: missing type declaration for TS.
Solution: 
- step-1: add intellisense to eslint.js
>  install --save-dev @types/eslint

- step-2: add the following line at the top of **.eslintrc.js** file
> /**@type {import('eslint').Linter.Config} */
