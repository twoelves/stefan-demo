import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Velkomin!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Velkomin á þessa síðu!" />
        <p className="description">
          Byrjum á að breyta <code>pages/index.js</code>
        </p>
    
const Prismic = require('@prismicio/client')

Prismic.client("https://prufutourdesk.cdn.prismic.io/api/v2",  { req: req }).then(function(api) {  return api.query(
    Prismic.Predicates.at('document.type', 'blog-post'),
    { orderings : '[my.blog-post.date desc]' }
  );
}).then(function(response) {
  // response is the response object, response.results holds the documents
});

      </main>

      <Footer />
    </div>
  )
}
