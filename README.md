# pp-front-pub

Public repo for github pages of project [paxpar-tech/pp-front](https://github.com/paxpar-tech/pp-front).

Everything under folder `/docs` will be published as github pages.

## build 

From project `pp-front`

```shell
npx bun install
npx bun run generate
rm -Rf ../pp-front-pub/docs
mv .output/public ../pp-front-pub/docs
```