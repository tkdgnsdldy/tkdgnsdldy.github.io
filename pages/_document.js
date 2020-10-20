import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

// 기본 문서 형식 지정
// 서버사이드에서 단 1회만 로드 
// SPA에서 변경할 수 없는 부분 (STATIC)
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
         <link rel="stylesheet" 
               href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" 
               integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" 
               crossOrigin="anonymous" />
        </Head>
        <body>
          <div id="root">
            <Main /> 
            <NextScript />
          </div>
        </body>
      </html>
    );
  }
}