import Document, { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/Footer";
import Header from "../components/Header";
class MyDocument extends Document {
  render() {
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
