const Prismic = require('@prismicio/client')

Prismic.client("https://prufutourdesk.cdn.prismic.io/api/v2",  { req: req }).then(function(api) {  return api.query(
    Prismic.Predicates.at('document.type', 'blog-post'),
    { orderings : '[my.blog-post.date desc]' }
  );
}).then(function(response) {
  // response is the response object, response.results holds the documents
});
