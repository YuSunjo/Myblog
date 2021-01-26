// {
//     "parserOptions":{
//         "ecmaVersion": 2020,
//         "sourceType": "module",
//         "ecmaFeatures": {
//             "jsx": true
//         }
//     },
//     "env": {
//         "browser": true,
//         "node": true,
//         "es6": true
//     },
//     "extends": [
//         "eslint:recommended",
//         "plugin: react/recommended"
//     ],
//     "plugins": [
//         "import",
//         "react-hooks"
//     ],
//     "rules": {

//     }
// }

// {
//     "parser": "babel-eslint",
//     "parserOptions":{
//         "ecmaVersion": 2020,
//         "sourceType": "module",
//         "ecmaFeatures": {
//             "jsx": true
//         }
//     },
//     "env": {
//         "browser": true,
//         "node": true,
//         "es6": true
//     },
//     "extends": [
//         "airbnb"
//     ],
//     "plugins": [
//         "import",
//         "react-hooks"
//     ],
//     "rules": {
//         "jsx-a11y/label-has-associated-control": "off",
//         "jsx-a11y/anchor-is-valid": "off",
//         "no-console": "off",
//         "no-underscore-dangle": "off",
//         "react/forbid-prop-types": "off",
//         "react/jsx-filename-extension": "off",
//         "react/jsx-one-expression-per-line": "off",
//         "object-curly-newline": "off",
//         "linebreak-style": "off",
//         "no-param-reassign": "off",
//         "arrow-body-style": ["error", "always"],
//         "indent": ["error", 4],
//         "react/jsx-indent": ["error", 4],
//         "react/jsx-indent-props": ["error", 4],
//         "eol-last": ["error", "never"]
//     }
// }

module.exports = {
  extends: ['react-app', 'airbnb', 'prettier'],
  rules: {
    'react/jsx-filename-extension': 0,
    'no-unused-vars': 1,
    'react/prop-types': 0,
    'no-alert': 'off',
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-wrap-multilines': 0,
    'import/prefer-default-export': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
