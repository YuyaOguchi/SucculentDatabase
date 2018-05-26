# succulent-database

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd succulent-database`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

SURGE working fine
* refer to 
<a href= "http://surge.sh/"> This page</a> 
for surge download
* `ember build`
* `mv dist/index.html dist/200.html`
* `surge dist <url_you_want>.surge.sh`
* This repo uses `surge dist succulentdb.surge.sh`
* <a href="http://succulentdb.surge.sh/succulents"> http://succulentdb.surge.sh/succulents</a>

HEROKU Currently Failing
* refer to [How to deploy to Heroku](http://www.programwitherik.com/deploy-your-ember-application-to-heroku/) for more info
* `git push heroku master`

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
# SucculentDatabase
