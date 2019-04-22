# Custom redirect page

This is a super simple script to host your own redirection page directly on Github Pages.
Think of it like your own version of `bit.ly` without the fancy add-ons.

## How does it work?

Links are defined `links.json`, a dictionary mapping short version to long version. On landing, the page serves and `index.html` with a tiny JavaScript that does the redirection. Everything is logged on Google Analytics.

## Why?

Because I want to keep track of the links I post online and I don't want `bit.ly` or the likes owning my links and stats.
With this script everything goes directly posted to Google Analytics.

## Can I use it?

Sure, fork and set up your links, Github pages, and stuff. Remember to **set your own GA tracking code in `index.html`**.

## LICENSE


