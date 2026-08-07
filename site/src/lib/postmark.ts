import { ServerClient } from "postmark";

let client: ServerClient | null = null;

export function getPostmarkClient(): ServerClient {
  if (!client) {
    const token = process.env.POSTMARK_SERVER_TOKEN;
    if (!token) throw new Error("POSTMARK_SERVER_TOKEN is not set");
    client = new ServerClient(token);
  }
  return client;
}
