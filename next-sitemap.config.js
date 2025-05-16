/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://samrudhraikote.me',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/admin', '/draft', '/blog/blog'],
  transform: (config, url) => {
    // Make sure we don't have duplicate https:// in URLs
    const fixedUrl = url.replace('https://https://', 'https://');
    return {
      loc: fixedUrl,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.lastmod ? new Date(config.lastmod).toISOString() : new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
