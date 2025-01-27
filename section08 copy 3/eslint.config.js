import js from '@eslint/js'
<<<<<<< HEAD
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
=======
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
>>>>>>> 4b75030be70d6680d421911f645e175f0542c9b9

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
<<<<<<< HEAD
      "no-unused-vars":"off", //실제로 사용하지 않는 변수가 있는 경우 오류로 알려줌
      "react/prop-types":"off",
=======
      "no-unused-vars": "off", //사용되지 않는 변수를 남겨두지 않음: off
      "react/prop-types": "off"  // 프로토타입 검사 툴: off
>>>>>>> 4b75030be70d6680d421911f645e175f0542c9b9
    },
  },
]
