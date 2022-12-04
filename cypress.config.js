const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const oracledb = require("oracledb");

oracledb.initOracleClient({ libDir: "../../instantclient_21_7" }); //update to your path and delete the comment

// Fetch data from oracle DB
const queryData = async (query, dbconfig) => {
  let conn;
  try {
    conn = await oracledb.getConnection(dbconfig);
    return result = await conn.execute(query);
  } catch (err) {
    console.log("Error===>" + err)
    return err
  } finally {
    if (conn) {
      try {
        conn.close();
      } catch (err) {
        console("Error===>" + err);
      }
    }
  }
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      preprocessor.addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );

      // Oracle DB Config
      on("task", {
        sqlQuery: (query) => {
          return queryData(query, config.env.db);
        },
      });
      
      allureWriter(on, config);

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
    // setupNodeEvents,
    specPattern: "cypress/e2e/features/*.feature",
    // baseUrl: "https://prelive-travelinsurance.staysure.co.uk",
    chromeWebSecurity: false,
    projectId: 'd9ir7w',
    screenshotsFolder: './cypress/snapshots/base',
    trashAssetsBeforeRuns: true,
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 100000,
    requestTimeout: 100000,
    responseTimeout : 100000,
    numTestsKeptInMemory: 0,
    video: false,
    videoCompression: 32,
    videoUploadOnPasses: false,
    env: {
      allureReuseAfterSpec: true,
      "db": {
        "user": "STAYSURE",
        "password": "east_663!",
        "connectString": "soa-uni-training.c9qsur8an7x8.eu-west-1.rds.amazonaws.com:1521/UNITRA"
      },
      testenvironment: 'LIVE'

    },
  },
});
