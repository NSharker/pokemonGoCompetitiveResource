# Front End Server for PokemonGo Competitive Resource
### Built with `Node.js`, `Express.js`, `React.js` and `Redux`
- This part of the project serves HTML and static files to users. 
- Uses Google Cloud Platform Natural Language API, the Sentiment endpoint
## Getting started
Following instruction assume that you have cloned the [entire project](https://github.com/NSharker/pokemonGoCompetitiveResource) and [Ruby on Rails Data API server](https://github.com/NSharker/pokemonGoCompetitiveResource/tree/master/backend/pokemonGoComp)is up and running.

### 1. Install
```shell
$ cd frontend
$ npm install
```
### 2. Change Config for Rails API server
In `frontend/app/actions/index.js` change the address from `...herokuapp.com` to `http://localhost:3000` because that's where the Rails server is running on your local machine.

### 3. Obtain Google Cloud Platform API keys
Please complete steps 1 and 2 in [Before you Begin](https://cloud.google.com/natural-language/docs/quickstart#set_up_a_project) section of Google Cloud Platform docs

### 4. Run
For very new terminal session you have to make a new GOOGLE_APPLICATION_CREDENTIALS environment variable.
```
$ export GOOGLE_APPLICATION_CREDENTIALS="/this/is/where/JSON/service-account/keys/are/saved/file.json"
$ npm start
```
