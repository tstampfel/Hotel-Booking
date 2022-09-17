import { createConnection } from "typeorm";

export const startPostgresqlConnection = async () => {
  await createConnection().catch((error) => {
    console.error("Error: ", error);
  });
};
