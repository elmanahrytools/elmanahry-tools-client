/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.alexprogress.com",
  generateIndexSitemap: false, // 👈 disable sitemap index
  generateRobotsTxt: true,

  // 👇 Exclude routes you don’t want
  exclude: ["/admin/*", "/login"],

  // 👇 Optional: customize transform to control changefreq/priority
  transform: async (config, path) => {
    // Skip admin/login (extra safety if they slip through)
    if (path.includes("/admin") || path.includes("/login")) {
      return null;
    }

    return {
      loc: path, // the URL
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
