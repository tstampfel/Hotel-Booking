import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { createSchema } from "./utils/createSchema";
import connectRedis from "connect-redis";
import session from "express-session";
import { redis } from "./redis";
import http from "http";
import { startPostgresqlConnection } from "./db/postgresql";
import helmet from "helmet";
import cors from "cors";
import path from "path";
import express from "express";
import ServerUtils from "./utils/server-utils";

declare module "express-session" {
  interface SessionData {
    userId: string;
  }
}

const main = async () => {
  const schema = await createSchema();

  await startPostgresqlConnection();

  const RedisStore = connectRedis(session);

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({
      req,
      res,
    }),
    subscriptions: {
      onConnect: () => console.log("Connected to websocket"),
    },
  });

  const app = Express();

  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      name: process.env.REDIS_SESSION_NAME,
      secret: process.env.REDIS_SESSION_SECRET!,
      resave: false,
      saveUninitialized: false,
    })
  );
  app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );
  app.use(cors(ServerUtils.corsOptions));

  if (process.env.NODE_ENV === "production") {
    // Serve any static files
    app.use(express.static(path.join(__dirname, "../client/build")));

    app.get("*", function (_req, res) {
      res.sendFile(path.join(__dirname, "../client/build", "index.html"));
    });
  }

  apolloServer.applyMiddleware({ app, cors: false });

  const httpServer = http.createServer(app);
  apolloServer.installSubscriptionHandlers(httpServer);

  httpServer.listen(process.env.PORT || 4000, () => {
    console.log(
      `Server ready at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`
    );
    console.log(
      `Subscriptions ready at ws://localhost:${process.env.PORT}${apolloServer.subscriptionsPath}`
    );
  });
};

main().catch((err) => console.error(err));
