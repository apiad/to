# Custom redirect page

This is a super simple script to host your own redirection page directly on Github Pages.
Think of it like your own version of `bit.ly` without the fancy add-ons.

## How does it work?

Links are defined `links.json`, a dictionary mapping short version to long version. On landing, the page serves and `index.html` with a tiny JavaScript that does the redirection. Everything is logged on Google Analytics.

See some examples:
* [https://apiad.net/to/#me](https://apiad.net/to/#me) -- My homepage
* [https://apiad.net/to/#gh](https://apiad.net/to/#gh) -- My Github
* [https://apiad.net/to/#to](https://apiad.net/to/#to) -- This project

## Why?

Because I want to keep track of the links I post online and I don't want `bit.ly` or the likes owning my links and stats.
With this script everything goes directly posted to Google Analytics.

## Can I use it?

Sure, fork and set up your links, Github pages, and stuff. Remember to **set your own GA tracking code in `index.html`**.

## LICENSE

MIT License

Copyright (c) 2019 Alejandro Piad

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
