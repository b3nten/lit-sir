import { render } from '@lit-labs/ssr';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';
import { html } from 'lit';
import { Hono } from "hono";
import * as fs from "fs/promises";
import { serve } from "@hono/node-server";
import "./client💻.js";

let shell = await fs.readFile("./shell🐚.html", "utf-8");
let client = await fs.readFile("./client💻.js", "utf-8");

let h = new Hono();

h.get(
  "/💻",
  (c) =>
    new Response(client, {
      headers: {
        "Content-Type": "application/javascript",
        "Cache-Control": "no-store",
      },
    }),
);

h.get("*", async (c) => c.html(shell + await collectResult(render(html`<app-root></app-root>`))))

let s = serve({ fetch: h.fetch, port: 8000 });

console.log("Server running at http://localhost:8000/");
