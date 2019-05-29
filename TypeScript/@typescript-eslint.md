TypeScript lint rules
=====

```JavaScript
    "rules": {
        "indent": "off",
        // @typescript-eslint
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/indent": 0,
        "@typescript-eslint/type-annotation-spacing": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-use-before-define":[
            "error", {
                "functions": false,
                "classes": true,
                "variables": true,
            }
        ],
        // react-hooks
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",

    }
```
