// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  loginUrl: 'https://xau7p5lp03.execute-api.us-east-1.amazonaws.com/dev/login',
  matcherUrl: 'http://matcher.zzp-matcher-api.entreact.com:8001/findProposals',
  profileUrl: 'http://profile.zzp-matcher-api.entreact.com:8001/api/profile'
};
