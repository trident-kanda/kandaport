import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/Footer";
import Header from "../components/Header";
import type { DocumentContext, DocumentInitialProps } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head />
        <body className="bg-gray-100">
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
