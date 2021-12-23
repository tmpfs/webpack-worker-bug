# Webpack Worker Bug

Reproduces an issue whereby a `Worker` is sometimes instantiated twice using `webpack@5`.

The messages *App is rendering* and *Creating worker* are always printed once, however *Worker is running* is sometimes printed twice. This may not be the first time the page loads and you may need to refresh the window/tab to reproduce this.

Note that this does not appear to only exist when running the dev server, production builds also exhibit this behavior.

Tested in Firefox 95.0.2 and Chrome 92.0.4515.107.
