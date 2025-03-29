type Env = {
  DATABASE_URL: string;
};

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

export const Env: Env = {
  DATABASE_URL: process.env.DATABASE_URL,
};
