## Contributing to Scrum Team App

### Branching

Always branch off of development branch.

Branch naming convention:

feat/[descrption], i.e., feat/log-out

```
feat/ a new feature
fix/ a bug fix branch
docs/ changes to documentation
style/ formatting, missing semi colons, etc; no code change
refactor/ refactoring production code
test/ adding tests, refactoring test; no production code change
chore/ updating build tasks, package manager configs, etc; no production code change

```

### Commits

A descriptive and insightful commit message is always encouraged

Commit message convention:

```
feat: added validation for team name field

- react boostrap uses glyphy icons for displaying form control feedback icons and currently doesn't display glyphy icons
- adding glyphy icons changes overall css styling
- using both font awesome and glyphy icons maybe redudant
```

```
feat: a new feature
fix: a bug fix
docs: changes to documentation
style: formatting, missing semi colons, etc; no code change
refactor: refactoring production code
test: adding tests, refactoring test; no production code change
chore: updating build tasks, package manager configs, etc; no production code change

```
Source: [udacity](https://udacity.github.io/git-styleguide/)

### Code style

Apply the following eslint style

```
{
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "no-const-assign": "warn",
        "no-this-before-super": "warn",
        "no-undef": "warn",
        "no-unreachable": "warn",
        "no-unused-vars": "warn",
        "constructor-super": "warn",
        "valid-typeof": "warn",
        "no-console": ["error", {"allow": ["warn", "error"]}],
        "strict": ["error", "global"],
        "curly": "warn",
        "quotes": ["error", "double"],
        "space-before-function-paren": ["error", "always"],
        "space-before-blocks": "error",
        "arrow-spacing": "error",
        "spaced-comment": ["error", "always"],
        "semi": ["error", "always"],
        "object-curly-spacing": ["error", "always"]
    }
}

```
Source: [eslintrc](https://raw.githubusercontent.com/keithb418/scrum-team-app/development/.eslintrc.json)



### Pull requests

Pull requests should be made to development branch and [Keith](https://github.com/keithb418) must always be included.

