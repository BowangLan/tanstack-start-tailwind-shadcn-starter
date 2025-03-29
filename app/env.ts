type Env = {
  DATABASE_URL: string;
  HOST: string;
};

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

if (!process.env.HOST) {
  throw new Error("HOST is not set");
}

export const Env: Env = {
  DATABASE_URL: process.env.DATABASE_URL,
  HOST: process.env.HOST,
};
