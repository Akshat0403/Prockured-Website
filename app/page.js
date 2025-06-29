// src/app/page.js
// This file is a Server Component by default.

import { Suspense } from "react"; // Still useful for granular control if needed, but primary Suspense is in layout.js
import ClientViewHandler from "./ClientViewHandler"; // Directly import the Client Component

/**
 * The main Page component for your application.
 * This is a Server Component that will render the initial shell.
 * It directly imports ClientViewHandler, which is a Client Component.
 * Next.js will handle the client-side rendering "bailout" for ClientViewHandler
 * because it uses hooks like `useSearchParams` that require the client environment.
 * The `Suspense` boundary in layout.js will provide a loading state during this process.
 */
export default function Page() {
  return (
    // Although layout.js has a Suspense, it's good practice to wrap components
    // that might 'suspend' (like client components using client-only hooks)
    // with their own Suspense boundary for more specific loading states if desired.
    // For this specific error, the Suspense in layout.js should be sufficient,
    // but keeping it here doesn't hurt and allows for finer-grained loading UIs.
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen bg-gray-50 text-xl font-medium text-gray-700">Loading view...</div>}>
      <ClientViewHandler />
    </Suspense>
  );
}