# Getting Started

This project serves as a template that has the following setup done

```shell
1. White Labeling                       ✅
2. Code Linting                         ✅
3. Vite + TypeScript                    ✅
4. Code Testing (Jest + Cypress)        ✅
5. Theming using DaisyUI                ✅
5. Localisation (Crowdin)               ✅
6. React Router                         ✅
7. Redux Toolkit                        ✅
8. RTKQuery for APIs                    ✅
9. API Mocking using MSW                ✅
```

## Requirements

To run the project you need to have the latest version of Nodejs installed, i suggest using [NVM](https://formulae.brew.sh/formula/nvm) so you can manage your Node versions however you wish. At the time of writing the version running on my machine is `Node v18.12.1`.

To install this specific version with `nvm` you can:

```shell
$ nvm install 18.12.1
```

## Setup
Once you have the desired Node versions, simply clone the repository into your root `Relay` projects folder. 

> `NOTE: You don't need to clone it onto this Relay folder for this to work, its just nice and neat to have every related project in one place.`

```shell
$ git clone git@ssh.dev.azure.com:v3/d6-group/d6%20Relay/relay-web
```

```shell
$ cd relay-web
```

Install project dependencies

```shell
$ yarn 
```

Setup environment variables for the project, you will need 3 specific env files. These will help you be able to run the application with various modes (Local, Staging and Production)

```shell
.env.local=Local
.env.prod.local=Production
.env.staging.local=Staging
```

For these configs, you don not need to have all of them setup, this is just a matter of convenience. In your `.env*.local` paste the below variables and set the `NODE_ENV` to your appropriate mode.

```shell
NODE_ENV=local
VITE_ENV=local
VITE_API_BASE_URL=
VITE_SSO_AUTH_URL=
VITE_SSO_CLIENT_ID=
VITE_SSO_AUTH_SCOPE=
VITE_SSO_RESPONSE_TYPE=
VITE_SSO_CLIENT_ROOT=
VITE_GOOGLE_API_KEY=
VITE_BUGSNAG_KEY=
VITE_APP_ID=
```

Once you are done setting up your configs, you can go ahead and run your development environment.

```shell
$ yarn dev
```

# Folder Structure

```
├── README.md
├── index.html
├── package.json
├── postcss.config.cjs
└── public
└── cypress
└──src
    └── assets              - "Public assets which you expect to be cached"
    └── pages               - "Top level components that form present a full page"
    └── layouts             - "Components that are the base of a page"
    └── styles              - "Custom css styles that add on top of DaisyUI defaults"
    └── components          - "Small reusable chunks of code"
    └── helpers             - "Helper classes and functions"
    └── services            - "Service classes and utilities"
    └── api                 - "API request classes - A single class should only contain requests specific to the functionality for better separation"
    └── redux               - "Redux configurations store,slices"
    └── styles
├── cypress.config.ts
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── yarn.lock
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .prettierignore
├── .prettierrc.js
├── .storybook
├── .devops
```


# Web Apps

These are the list of available white-labels for web.

| Application | App ID|
|----------|-------------|
| App 1 | 1 |
| App 2 | 2 |
| App 3 | 3 |


# Useful links

[ViteJs](https://vitejs.dev/guide/)


[TypeScript](https://www.typescriptlang.org/)

### Design Systems

[TailwindCSS](https://tailwindcss.com/)

[DaisyUI](https://daisyui.com/)

[HeadlessUI](https://headlessui.com/)

### Routing

[React Router V6](https://reactrouter.com/en/main)

[React Router Examples](https://github.com/remix-run/react-router/tree/dev/examples)

### Code Testing

[Vitest](https://vitest.dev/guide/)

[Cypres](https://www.cypress.io/)

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

[Airbnb Code Style Guide](https://airbnb.io/javascript/react/)

[Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

### Running HTTPS on Localhost
[Vite mkcert](https://github.com/liuweiGL/vite-plugin-mkcert)

### Error Handling

[BugsnagJs](https://docs.bugsnag.com/platforms/javascript/react/capturing-render-errors/)
