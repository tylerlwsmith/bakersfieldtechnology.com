# Bakersfield Technology website

> This project has been superseded by a new Go-powered version of the site. You can view the new repo [here](https://github.com/tylerlwsmith/go-bakersfieldtechnology).

This repo contains the landing page for [bakersfieldtechnology.com](https://bakersfieldtechnology.com). I built the site over the course of a few days as an experiment to see if I could rank up for technology related keywords in Bakersfield to generate leads.

The experiment has been unsuccessful so far 😅

The project was built using Next.js, TypeScript and Tailwind CSS. It's hosted for free on Netlify, which builds it as a static site and deploys it automatically upon new commits.

## Running locally

Before you can run the site locally, you must have Node.js and Yarn package manager installed.

To get started with development, clone the site, change into the project's directory, then run `yarn` in the terminal to install the project dependencies. To launch the development server, run `yarn dev`.

## Building

To build static export of the site locally, run the following command from the main project directory:

```sh
npm run export
```

To view the statically exported site locally, run the following command from the main project directory:

```sh
python3 -m http.server -d out 3000
```
