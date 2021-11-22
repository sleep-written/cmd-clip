# cmd-copy

A small tool for execute commands, and copy to the clipboard the output. This package implements [clipboardy](https://www.npmjs.com/package/clipboardy) to access to the clipboard.

## How to install

Simply execute:
```bash
$ npm i --g cmd-copy
```

## How to use

Imagine that you want to execute `ls -lua`, and copy the output:
```bash
$ cmd-copy ls -lua
```

If you want to show the result of the command, you can add `verbose` before the command:
```bash
$ cmd-copy verbose ls -lua
```

