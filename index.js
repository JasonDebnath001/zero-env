import dotenv from "dotenv";

dotenv.config();

const env = new Proxy(process.env, {
  get(target, prop) {
    if (
      typeof prop === "symbol" ||
      prop === "then" ||
      prop === "toJSON" ||
      prop === "__esModule" ||
      prop === "constructor"
    ) {
      return Reflect.get(target, prop);
    }

    const value = target[prop];

    if (value === undefined || value === "") {
      const error = new Error(
        `\n\n CRASH: Missing Environment Variable \n` +
          ` You tried to access 'env.${String(
            prop
          )}' but it is not defined in your .env file. \n`
      );
      error.stack = null;
      throw error;
    }
    return value;
  },
});

export default env;
