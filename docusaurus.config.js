module.exports = {
  title: 'Aayush Gandhi Diff EQ Portfolio',
  tagline: 'This is the portfolio for the class AS.110.302, Differential Equations and Applications, taught in the Fall semester of 2020.',
  url: 'https://diffeqportfolio.netlify.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'AayushGithub', // Usually your GitHub org/user name.
  projectName: 'Diff_EQ_Portfolio_Web_App', // Usually your repo name.
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
            'https://github.com/AayushGithub/Diff_EQ_Portfolio_Web_App',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/AayushGithub/Diff_EQ_Portfolio_Web_App',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
