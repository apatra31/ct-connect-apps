import { config } from 'dotenv';
config();
import { ClientBuilder } from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient } from "@commercetools/platform-sdk";

export const projectKey = process.env.CTP_PROJECT_KEY;
const clientId = process.env.CTP_CLIENT_ID;
const clientSecret = process.env.CTP_CLIENT_SECRET ?? "";
const apiUrl = process.env.CTP_HOST;
const authUrl = process.env.CTP_AUTH;

const authMiddlewareOptions = {
    host: authUrl,
    projectKey,
    credentials: {
        clientId,
        clientSecret,
    },
    scopes: [process.env.CTP_SCOPE ?? ""],
};

const httpMiddlewareOptions = {
    host: apiUrl,
    fetch,
};

const client = new ClientBuilder()
    .withProjectKey(projectKey)
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .withUserAgentMiddleware()
    .build();

export const apiRoot = createApiBuilderFromCtpClient(client).withProjectKey({ projectKey });
