# webpack-sandbox

Just roughly following the "Getting Started" section here: <a href="https://webpack.js.org/guides/getting-started/" target="_new">https://webpack.js.org/guides/getting-started/</a>

## Prep (optional)

1. Updated my `.git/gitconfig` and added my usual command aliases to work quicker with git.

```
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.ci commit
git config --global alias.br branch
```

This doesn't get pushed to the repo, but my aliases are:

```
[alias]
    st = status
    co = checkout
    ci = commit
    br = branch
```

## Pre-flight checks

1. Check if you have `npm` installed, by running the line below, you should get a version number printed to the terminal, eg: "8.1.2"

`npm -v`

2. If you don't have `npm` installed yet, then download it here and follow the steps there to install it: <a href="https://nodejs.org/en/download/" target="_new">https://nodejs.org/en/download/</a>

## Setup - From this repo

**_(see "From Scratch" below)_**

1. `git clone git@github.com:monello/webpack-sandbox.git`
2. `npm install`

## Setup - From Scratch

1. Create a new repo on Github
2. Checkout the repo
   eg. `git clone git@github.com:monello/new-repo-name-goes-here.git`

3. Initialize `npm` - to create the `package.json` file.
   The `-y` flag means "_Yes, set up the `package.json` with default values and don't ask all the set-up questions_"

`npm init -y`

4. Install `webpack` and `webpack-cli` as `devDependencies`

`npm install --save-dev webpack webpack-cli`

5. Install `typescript` and `ts-loader` as `devDependencies`

`npm install --save-dev typescript ts-loader`

6. Add a `.gitignore` file in the root directory and add the the following in it so long:

```
node_modules
package-lock.json
```

Now would be a good time to do an initial commit for the project.
