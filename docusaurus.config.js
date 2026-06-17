// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Commonspace Help',
  tagline: 'Help & Support for Commonspace',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://help.common.space',
  baseUrl: '/',

  organizationName: 'kwlow',
  projectName: 'commonspace-help',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Commonspace',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'helpSidebar',
            position: 'left',
            label: 'Help Center',
          },
          {
            href: 'https://common.space',
            label: 'Back to Commonspace',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Help',
            items: [
              { label: 'Getting Started', to: '/docs/start-here/what-is-commonspace' },
              { label: 'Run Your Space', to: '/docs/run-your-space/creating-your-first-space' },
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'Community Guidelines', to: '/docs/policies-support/community-guidelines' },
              { label: 'Privacy Policy', to: '/docs/policies-support/privacy-policy-overview' },
              { label: 'Space Owner Agreement', to: '/docs/policies-support/space-owner-agreement' },
            ],
          },
          {
            title: 'Commonspace',
            items: [
              { label: 'Go to App', href: 'https://common.space' },
              { label: 'Contact Support', href: 'mailto:support@common.space' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Commonspace Platforms, Inc. All Rights Reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;