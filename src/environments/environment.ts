// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  openWeather: {
    key: '76007c001fea7fa423986d8fa8dd9f44',
    url: 'https://api.openweathermap.org/data/2.5/',
  },
  coordNames: {
    // key: '76007c001fea7fa423986d8fa8dd9f44',
    key: '76007c001fea7fa423986d8fa8dd9f44',
    url: 'http://api.openweathermap.org/geo/1.0/'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
