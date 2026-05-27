import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Seaum Siddiqui — Backend Engineer" },
      { name: "description", content: "Portfolio of Seaum Siddiqui, a Backend Engineer specializing in Java, Spring Boot, Microservices, and Full-Stack Development based in Dhaka, Bangladesh." },
      { name: "author", content: "Seaum Siddiqui" },
      { name: "robots", content: "index, follow" },
      { name: "keywords", content: "Seaum Siddiqui, Backend Engineer, Java Developer, Spring Boot, Microservices, Full-Stack Developer, Dhaka, Bangladesh, Software Engineer" },

      // Open Graph
      { property: "og:title", content: "Seaum Siddiqui — Backend Engineer" },
      { property: "og:description", content: "Portfolio of Seaum Siddiqui, a Backend Engineer specializing in Java, Spring Boot, and Microservices." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://seaumsiddiqui.vercel.app" },
      { property: "og:image", content: "https://seaumsiddiqui.vercel.app/og-image.png" },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Seaum Siddiqui — Backend Engineer" },
      { name: "twitter:description", content: "Portfolio of Seaum Siddiqui, Backend Engineer based in Dhaka, Bangladesh." },
      { name: "twitter:image", content: "https://seaumsiddiqui.vercel.app/og-image.png" },
    ],
    links: [
      // 1. The modern SVG icon for browsers that support it (including Safari)
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },

      // 2. Standard Favicons for desktop browsers
      { rel: "icon", href: "/icon16.png", sizes: "16x16", type: "image/png" },
      { rel: "icon", href: "/icon32.png", sizes: "32x32", type: "image/png" },
      { rel: "icon", href: "/icon48.png", sizes: "48x48", type: "image/png" },
      { rel: "icon", href: "/icon128.png", sizes: "128x128", type: "image/png" },

      // 3. Ultimate Fallback (Your file named 'favicon' without dimensions)
      { rel: "icon", href: "/favicon.ico", sizes: "any" }, 

      // 4. Android Chrome Large Icon
      { rel: "icon", href: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },

      // 5. Android / PWA Manifest mapping
      { rel: "manifest", href: "/site.webmanifest" },

      // Font and stylesheet links remain below...
      { rel: "preload", href: "/fonts/MagnatText-Bold.woff", as: "font", type: "font/woff", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=JetBrains+Mono:wght@500&family=Source+Sans+3:wght@400&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function FontLoader() {
  useEffect(() => {
    document.fonts.ready.then(() => {
      document.documentElement.classList.add("fonts-loaded");
    });
  }, []);
  return null;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <FontLoader />
      <Outlet />
    </QueryClientProvider>
  );
}
