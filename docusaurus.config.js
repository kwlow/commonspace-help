// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Commonspace Help',
  tagline: 'Help & Support for Commonspace',
  favicon: 'img/favicon.png',

  url: 'https://help.common.space',
  baseUrl: '/',

  organizationName: 'kwlow',
  projectName: 'commonspace-help',

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        max: 1920,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
    'docusaurus-plugin-image-zoom',
  ],

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
        gtag: {
          trackingID: 'G-PMYDFDZFGR',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    zoom: {
      selector: '.markdown img',
      background: {
        light: 'rgba(0,0,0,0.75)',
        dark: 'rgba(0,0,0,0.85)',
      },
      config: {
        margin: 48,
        scrollOffset: 0,
        container: { top: 72 },
      },
    },
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Help Center',
        logo: {
          alt: 'Commonspace',
          src: 'img/logo.svg',
        },
        items: [
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
              { label: 'Getting Started', to: '/docs/category/start-here' },
              { label: 'Accounts', to: '/docs/category/your-account--memberships' },
              { label: 'Run Your Space', to: '/docs/category/run-your-space' },
              { label: 'Policies', to: '/docs/category/policies--support' },
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'Terms of Use', to: '/legal/terms-of-service' },
              { label: 'Privacy Policy', to: '/legal/privacy-policy' },
              { label: 'Community Guidelines', to: '/legal/community-guidelines' },
              { label: 'Space Owner Agreement', to: '/legal/space-owner-agreement' },
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