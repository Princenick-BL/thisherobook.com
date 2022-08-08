import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='fr' data-page-type="ANSWER">
      <Head />
      <body className={false ? "bodyDark":"bodyLight"}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}