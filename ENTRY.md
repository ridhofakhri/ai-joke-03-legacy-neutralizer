# AI Judge Joke Entry

## Joke

> I asked my AI coding agent for a small refactor. It replied, “Sure—should I preserve the code or just the commit history?”

## Source

The executable source remains [`main.ts`](./main.ts):

```ts
const joke = "I asked my AI coding agent for a small refactor. It replied, “Sure—should I preserve the code or just the commit history?”";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
await Bun.write(`${outputDir}/entry.txt`, joke + "\n");
```

## Kit download command

```bash
curl -L -o ai-joke-03-kit.tar.gz https://make.fun/c/ai-joke-03/kit
```

`main.ts` is intentionally kept at the repository root for the make.fun entry checker. This Markdown file is the human-readable version.
