// module.exports = {
//   siteUrl: 'http://127.0.0.1:3000',
//   generateRobotsTxt: true,
//   // ...
// }

module.exports = {
  siteUrl: "https://www.NON_https://reasonofhope.com",
  generateRobotsTxt: true,
  sitemap: {
    // This assumes your pages are in the "pages" directory
    // Change this to match your actual directory structure
    exclude: ["/api/*"],
    routes() {
      const { data } = [
        "categories",
        "contact",
        "creation",
        "logic",
        "objections",
        "publications",
        "studies",
        "tags",
        "gospel",
        "our-faith",
      ];
      return data.map((page) => ({
        url: `/${page}`,
        changefreq: "daily",
        priority: 1,
        lastmod: page.updatedAt,
      }));
    },
  },
};
