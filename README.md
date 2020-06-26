# Find a childminder in Buckinghamshire

This is a very simple React app that demonstrates the capabilities of the Outpost service directory software.

It consumes an [Open Referral UK](https://openreferraluk.org/)-style API, such as the one provided by [outpost-api-service](github.com/wearefuturegov/outpost-api-service/).


## Running it locally

You need Node.js and npm installed, plus an API to consume data from.

First, clone the repo:

```
npm install
npm run dev
```

After install, it will attempt to grab the latest version of the taxonomy tree from the API.

It'll be on `localhost:3000`.

## Running it on the web

It's suitable for any static host, such as Netlify.

Run the `npm run build` command and then serve the `/build` folder.

## Configuration

- `REACT_APP_API_HOST`: the location of the API where service data can be read