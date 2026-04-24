# CelebGuessr

CelebGuessr is a static, golf-style celebrity guessing game. Each hole is one public figure, every extra reveal costs a stroke, and the goal is to finish the card with the lowest total score possible.

## Included modes

- `Daily 9`: one shared nine-hole course per day
- `Quick 3`: the first three holes from the daily card
- `Unlimited`: configurable free play with category and difficulty filters

## Current MVP

- deterministic daily course generation
- stylized portrait reveal system with layered clue stages
- tolerant answer matching with alias support
- local streak, best score, average score, and reveal histogram tracking
- result sharing via native share sheet or clipboard fallback

## Local usage

Because the app is fully static, you can open [`index.html`](/Users/Andrew/Documents/New%20project/celebguessr/index.html) directly in a browser or serve the folder locally.

One simple local server option:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
