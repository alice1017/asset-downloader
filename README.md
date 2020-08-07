# asset-downloader

[![Travis](https://img.shields.io/travis/alice1017/asset-downloader?logo=travis)](https://travis-ci.org/github/alice1017/asset-downloader)
[![Coveralls github](https://img.shields.io/coveralls/github/alice1017/asset-downloader?logo=coveralls)](https://coveralls.io/github/alice1017/asset-downloader)

A command-line tool to download asset file of Github repository.

## Workflow

First, this program **searches** Github repositories from the `--query` argument because you need the **author & name** of repository to download an asset file. If you already know these, skip this process by set repository full-name to `--repository` argument.
Second, this program gets **releases** of a repository and let the choice one of release of that.
Next, this program gets **asset files** of release and let the choice one of asset file if release has multiple assets.
Finally, this program downloads asset file.

## Usage

```sh
asset-downloader [options]
```

### Options

- `-q`, `--query` *\<query\>* - A query string.

- `-r`, `--repository` *\<repository\>* - A repository full name (author/name format) using when you don't need find.
