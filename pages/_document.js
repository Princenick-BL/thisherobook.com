import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='fr'>
      <Head />
      <body className={false ? "bodyDark":"bodyLight"}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}