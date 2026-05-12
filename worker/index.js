/**
 * lehn.dev — Cloudflare Worker
 *
 * Serves static files from the Workers Sites KV namespace (__STATIC_CONTENT).
 * Deployed via Wrangler: `wrangler deploy`
 *
 * MIME types are set automatically by Wrangler for common extensions.
 * Add custom handling below if needed.
 */

import { getAssetFromKV, NotFoundError, MethodNotAllowedError } from '@cloudflare/kv-asset-handler';
import manifestJSON from '__STATIC_CONTENT_MANIFEST';

const assetManifest = JSON.parse(manifestJSON);

export default {
  async fetch(request, env, ctx) {
    try {
      // Serve the asset from KV
      return await getAssetFromKV(
        { request, waitUntil: ctx.waitUntil.bind(ctx) },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: assetManifest,
        }
      );
    } catch (e) {
      if (e instanceof NotFoundError) {
        return new Response('Not found', { status: 404 });
      }
      if (e instanceof MethodNotAllowedError) {
        return new Response('Method not allowed', { status: 405 });
      }
      return new Response('Internal error', { status: 500 });
    }
  },
};
