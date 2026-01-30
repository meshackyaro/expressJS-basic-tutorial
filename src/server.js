import { app } from "./app.js";
import { env } from "./config/env.js";

app.listen(env.port, () => {
    console.log(`\n         Server is running on port ${env.port}`);
});