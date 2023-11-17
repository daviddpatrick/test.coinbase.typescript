require("ts-node/register");
import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);
require("dotenv-safe").config({
  path: "./.env",
});

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  helpers: {
    REST: {
      endpoint: process.env.COIN_BASE_API_URL,
      timeout: 40000,
    },
    RESTHelperCoinBase: {
      require: "./common/rest/RESTHelperCoinBase.ts",
    },
    AssertWrapper: {
      require: "codeceptjs-assert",
    },
  },
  include: {
    I: './steps_file'
  },
  name: 'WebAndApiTest',
  plugins: {
    autoDelay: {
      enabled: true,
      delayAfter: 500,
    }
  },
  require: ["ts-node/register"],
}