import { Head, Html, Main, NextScript } from 'next/document';
import { getCssText } from '../styles';

/**
 * This file is similar to the index.html from the vitejs projects
 *
 * Everytime this file is changed we need to rerun the application
 *
 * Every page will have the code inserted in this file (be careful)
 */

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* all the stitches css classes will be inserted here, so it works even if js is disabled */}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        {/* equivalent to the div#root, where the content will be inserted */}
        <Main />
        {/* where the scripts will be inserted */}
        <NextScript />
      </body>
    </Html>
  );
}
