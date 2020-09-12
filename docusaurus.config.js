module.exports = {
  title: 'Aayush Gandhi Diff EQ Portfolio',
  tagline: 'This is the portfolio for the class AS.110.302, Differential Equations and Applications, taught in the Fall semester of 2020.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Home Page',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Portfolio',
          position: 'left',
        },
        {to: 'blog', label: 'About Me', position: 'left'},
        {
          href: 'https://github.com/AayushGithub',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        
        {
          title: 'Profiles',
          items: [
            {
              label: 'GitConnected',
              href: 'https://gitconnected.com/AayushGithub',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/gandhiaayush/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AayushGithub',
            },
            {
              label: 'Personal Website',
              href: 'https://aayushgandhi.netlify.app/',
            },
          ],
        },
        
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aayush Gandhi`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
