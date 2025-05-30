/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Aadil\'s Blog',
  author: 'Aadil',
  headerTitle: 'Aadil\'s Blog',
  description: 'Some cool stuff, maybe',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://aadilshabier.github.io',
  siteRepo: 'https://github.com/aadilshabier/aadilshabier.github.io',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  // mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'aadilshabier1@gmail.com',
  github: 'https://github.com/aadilshabier',
  // x: 'https://twitter.com/x',
  // facebook: 'https://facebook.com',
  // youtube: 'https://youtube.com',
  linkedin: 'https://www.linkedin.com/in/mohammad-aadil-shabier',
  // threads: 'https://www.threads.net',
  // instagram: 'https://www.instagram.com',
  // medium: 'https://medium.com',
  // bluesky: 'https://bsky.app/',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
