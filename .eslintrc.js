module.exports = {
    "root": true,
    "ecmaVersion": 6,
    "sourceType": "module",
    "env": {
        "es6": true,
        "browser": true,
    },
    "ecmaFeatures": {
        "jsx": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-native/all"
    ],
    "plugins": [
        "react",
        "react-native"
    ],
    "parser": "babel-eslint",
    "rules": {
        "indent": [
            "off",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "no-console": 0,
        "no-unused-vars": 1,
        "no-empty": 1,
        "no-inner-declarations": 1,

        "react/prop-types": 1,

        "react-native/no-unused-styles": 1,
        "react-native/split-platform-components": 1,
        "react-native/no-inline-styles": 1,
        "react-native/no-color-literals": 1,
    },
    "globals": {
        "__DEV__": false,
        "require": false,
    }
};