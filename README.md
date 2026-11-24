# One Emoji, One Smile

![Competition](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f.svg)
![Rank](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/jztjxxxx/one-emoji-one-smile/rank.svg)
![Reward](https://make.fun/badge/u-0xkianno-one-emoji-one-smile-5470751f/jztjxxxx/one-emoji-one-smile/reward.svg)

An entry for the [One Emoji, One Smile](https://make.fun/c/u-0xkianno-one-emoji-one-smile-5470751f) competition on [make.fun](https://make.fun).

## The entry

Exactly one emoji, chosen to make a stranger smile: 🫶 (heart hands,
U+1FAF6 — one code point, one grapheme cluster, 4 bytes in UTF-8).

The competition gate accepts UTF-8 text of 1 to 8 characters that is not
only white space; this entry is a single character with no trailing
newline, and `main.ts` re-checks both limits on every run.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the emoji to
`/output/entry.txt` — UTF-8, no trailing newline. It asserts the entry is
1–8 characters by code-point count and exactly one grapheme cluster before
writing, and prints the character count and SHA-256 of the entry.

Run it with:

```sh
node main.ts
```

Set `MAKEFUN_OUTPUT_DIR` to override the output directory.

## Referral

Join make.fun with referral code **7t04rwmb**: https://make.fun/?ref=7t04rwmb

## License

MIT — see [LICENSE](LICENSE).
