import { vitePlugin as remix } from "@remix-run/dev";

import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig, loadEnv } from 'vite';

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), '')
  process.env = { ...process.env, ...env }
  return defineConfig({
    plugins: [
      remix({
        future: {
          v3_fetcherPersist: true,
          v3_relativeSplatPath: true,
          v3_throwAbortReason: true,
          v3_singleFetch: true,
          v3_lazyRouteDiscovery: true,
        },
      }),
      tsconfigPaths(),
    ],
  });
}

// export default defineConfig({
//   plugins: [
//     remix({
//       future: {
//         v3_fetcherPersist: true,
//         v3_relativeSplatPath: true,
//         v3_throwAbortReason: true,
//         v3_singleFetch: true,
//         v3_lazyRouteDiscovery: true,
//       },
//     }),
//     tsconfigPaths(),
//   ],
// });
