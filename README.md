# Suranga Nanayakkara

Personal site of Suranga Nanayakkara, Associate Professor of Computer Science at the
National University of Singapore and founder of the [Augmented Human Lab](https://ahlab.org).

One page, plain HTML/CSS/JS, no build step, free hosting on GitHub Pages. Every chapter and
venture gets an animated diagram, there is a "Motion on/off" switch, and the hero is a
dot-matrix map of the places lived so far.

## Publish

1. Create a GitHub repository named `<your-github-username>.github.io`.
2. Push this folder to its `main` branch.
3. It is live at `https://<your-github-username>.github.io/` within a minute or two.
   To use suranga.info instead, set it under Settings → Pages → Custom domain.

Preview locally: `python3 -m http.server 8000`, then open http://localhost:8000.

## Edit

| To change | Edit |
|---|---|
| Words, chapters, ventures, papers, links | `index.html` |
| Map: places, routes, trips | `assets/config.js` |
| Colours | `:root` at the top of `assets/style.css` |

`AGENTS.md` explains the card layout and how to draw the animated figures.

## Credits

Built from [Prasanth Sasikumar's site template](https://github.com/prasanthsasikumar/prasanthsasikumar.github.io),
itself inspired by [Shamane Siriwardhana's site](https://shamanez.github.io/). Map land data from
[Natural Earth](https://www.naturalearthdata.com/) (public domain). Fonts: Geist and Geist Mono.
Code is MIT licensed (see `LICENSE`).
