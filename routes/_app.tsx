import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Tasbeeh-Proshanti</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
        <footer class="bg-gray-800 p-4">
          <div class="text-center">
            <p class="text-white text-sm animate-pulse">
              Developed by &nbsp;
              <a href="https://github.com/InjamulCSE15" class="text-blue-500">
                Injamul Alam
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
