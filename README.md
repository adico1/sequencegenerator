<!-- TITLE/ -->

<h1>@adico/sequencegenerator</h1>

<!-- /TITLE -->

<!-- BADGES/ -->

<span class="badge-travisci"><a href="http://travis-ci.com/adico1/sequencegenerator" title="Check this project's build status on TravisCI"><img src="https://img.shields.io/travis/com/adico1/sequencegenerator/master.svg" alt="Travis CI Build Status" /></a></span>
<span class="badge-npmversion"><a href="https://npmjs.org/package/@adico/sequencegenerator" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@adico/sequencegenerator.svg" alt="NPM version" /></a></span>
<span class="badge-npmdownloads"><a href="https://npmjs.org/package/@adico/sequencegenerator" title="View this project on NPM"><img src="https://img.shields.io/npm/dm/@adico/sequencegenerator.svg" alt="NPM downloads" /></a></span>
<span class="badge-daviddm"><a href="https://david-dm.org/adico1/sequencegenerator" title="View the status of this project's dependencies on DavidDM"><img src="https://img.shields.io/david/adico1/sequencegenerator.svg" alt="Dependency Status" /></a></span>
<span class="badge-daviddmdev"><a href="https://david-dm.org/adico1/sequencegenerator#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://img.shields.io/david/dev/adico1/sequencegenerator.svg" alt="Dev Dependency Status" /></a></span>
<br class="badge-separator" />
<span class="badge-patreon"><a href="https://patreon.com/adico§" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/adico" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/adico" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-paypal"><a href="https://paypal.me/adico1" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

<!-- /BADGES -->

<!-- DESCRIPTION/ -->

Time Sortable Distributed Unique Id Generator based on Twitter Snowflake

<!-- /DESCRIPTION -->

## Usage

[Complete API Documentation.](http://master.sequencegenerator.adico1.surge.sh/docs/globals.html)

### API

Install locally `npm install --save @adico/sequencegenerator`, then use like so:

```javascript
import SequenceGenerator from '@adico/sequencegenerator'

// Generate Unique Id based on NodeId as hashed MAC address
console.log(new SequenceGenerator(254).nextId())
```

### Advanced

<!-- INSTALL/ -->

<h2>Install</h2>

<a href="https://npmjs.com" title="npm is a package manager for javascript"><h3>npm</h3></a>

<ul>
<li>Install: <code>npm install --save @adico/sequencegenerator</code></li>
<li>Import: <code>import * as pkg from ('@adico/sequencegenerator')</code></li>
<li>Require: <code>const pkg = require('@adico/sequencegenerator')</code></li>
</ul>

<h3><a href="https://editions.bevry.me" title="Editions are the best way to produce and consume packages you care about.">Editions</a></h3>

<p>This package is published with the following editions:</p>

<ul><li><code>@adico/sequencegenerator</code> aliases <code>@adico/sequencegenerator/index.js</code> which uses the <a href="https://github.com/bevry/editions" title="You can use the Editions Autoloader to autoload the appropriate edition for your consumers environment">Editions Autoloader</a> to automatically select the correct edition for the consumer's environment</li>
<li><code>@adico/sequencegenerator/src/index.ts</code> is <a href="https://www.typescriptlang.org/" title="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. ">TypeScript</a> source code with <a href="https://babeljs.io/docs/learn-es2015/#modules" title="ECMAScript Modules">Import</a> for modules</li>
<li><code>@adico/sequencegenerator/edition-esnext/index.js</code> is <a href="https://www.typescriptlang.org/" title="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. ">TypeScript</a> compiled against <a href="https://en.wikipedia.org/wiki/ECMAScript#ES.Next" title="ECMAScript Next">ESNext</a> for <a href="https://nodejs.org" title="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine">Node.js</a> with <a href="https://nodejs.org/dist/latest-v5.x/docs/api/modules.html" title="Node/CJS Modules">Require</a> for modules</li>
<li><code>@adico/sequencegenerator/edition-es5/index.js</code> is <a href="https://www.typescriptlang.org/" title="TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. ">TypeScript</a> compiled against ES5 for <a href="https://nodejs.org" title="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine">Node.js</a> with <a href="https://nodejs.org/dist/latest-v5.x/docs/api/modules.html" title="Node/CJS Modules">Require</a> for modules</li></ul>

<!-- /INSTALL -->

<!-- HISTORY/ -->

<h2>History</h2>

<a href="https://github.com/adico1/sequencegenerator/blob/master/HISTORY.md#files">Discover the release history by heading on over to the <code>HISTORY.md</code> file.</a>

<!-- /HISTORY -->

<!-- CONTRIBUTE/ -->

<h2>Contribute</h2>

<a href="https://github.com/adico1/sequencegenerator/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /CONTRIBUTE -->

<!-- BACKERS/ -->

<h2>Backers</h2>

<h3>Maintainers</h3>

These amazing people are maintaining this project:

<ul><li><a href="http://adico.tech">adico</a> — <a href="https://github.com/adico1/sequencegenerator/commits?author=adico1" title="View the GitHub contributions of adico on repository adico1/sequencegenerator">view contributions</a></li></ul>

<h3>Sponsors</h3>

No sponsors yet! Will you be the first?

<span class="badge-patreon"><a href="https://patreon.com/adico§" title="Donate to this project using Patreon"><img src="https://img.shields.io/badge/patreon-donate-yellow.svg" alt="Patreon donate button" /></a></span>
<span class="badge-flattr"><a href="https://flattr.com/profile/adico" title="Donate to this project using Flattr"><img src="https://img.shields.io/badge/flattr-donate-yellow.svg" alt="Flattr donate button" /></a></span>
<span class="badge-liberapay"><a href="https://liberapay.com/adico" title="Donate to this project using Liberapay"><img src="https://img.shields.io/badge/liberapay-donate-yellow.svg" alt="Liberapay donate button" /></a></span>
<span class="badge-paypal"><a href="https://paypal.me/adico1" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal donate button" /></a></span>

<h3>Contributors</h3>

These amazing people have contributed code to this project:

<ul><li><a href="http://adico.tech">adico</a> — <a href="https://github.com/adico1/sequencegenerator/commits?author=adico1" title="View the GitHub contributions of adico on repository adico1/sequencegenerator">view contributions</a></li>
<li><a href="http://github.com/apps/dependabot-preview">dependabot-preview[bot]</a> — <a href="https://github.com/adico1/sequencegenerator/commits?author=dependabot-preview[bot]" title="View the GitHub contributions of dependabot-preview[bot] on repository adico1/sequencegenerator">view contributions</a></li></ul>

<a href="https://github.com/adico1/sequencegenerator/blob/master/CONTRIBUTING.md#files">Discover how you can contribute by heading on over to the <code>CONTRIBUTING.md</code> file.</a>

<!-- /BACKERS -->

<!-- LICENSE/ -->

<h2>License</h2>

Unless stated otherwise all works are:

<ul><li>Copyright &copy; 2019+ <a href="http://adico.tech">adico</a></li></ul>

and licensed under:

<ul><li><a href="http://spdx.org/licenses/MIT.html">MIT License</a></li></ul>

<!-- /LICENSE -->
