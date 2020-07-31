"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//npm run test
exports.config =
    {
        directconnect: true,
        framework: 'custom',
        frameworkPath: require.resolve('protractor-cucumber-framework'),
        capabilities: { browserName: 'chrome', },
        specs: ['../features/demo.feature'],
        cucumberOpts: {
            // require step definitions
            require: [
                './stepDefinations/*.js' // accepts a glob
            ]
        }
    };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGNBQWM7QUFFZCxPQUFPLENBQUMsTUFBTTtJQUNkO1FBQ0ksYUFBYSxFQUFFLElBQUk7UUFFbkIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsYUFBYSxFQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7UUFFaEUsWUFBWSxFQUFFLEVBQUUsV0FBVyxFQUFFLFFBQVEsR0FBRztRQUV4QyxLQUFLLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztRQUNuQyxZQUFZLEVBQUU7WUFDViwyQkFBMkI7WUFDM0IsT0FBTyxFQUFFO2dCQUNQLHdCQUF3QixDQUFDLGlCQUFpQjthQUMzQztTQUNGO0tBRU4sQ0FBQyJ9