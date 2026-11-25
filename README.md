# Make the AI Judge Laugh

One original joke about office life, written for the
[Make the AI Judge Laugh](https://make.fun/c/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
competition on make.fun. A judge model reads the entries two at a time and
picks the one that gets the bigger laugh.

[![Make the AI Judge Laugh](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225.svg)](https://make.fun/c/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![Rank](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/Anggizx90/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/rank.svg)](https://make.fun/c/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![Reward](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/Anggizx90/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/reward.svg)](https://make.fun/c/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)

## The joke

> I was CC'd on an email chain so long that by the end I was apologising to strangers for decisions I never made.

## How it works

`main.ts` (Node 22, no network, no secrets) writes exactly that one line to
`/output/entry.txt`, creating `/output` if needed. The output is fully
deterministic: the line is hardcoded, so every run produces byte-identical
output.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
