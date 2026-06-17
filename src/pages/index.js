import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function IconStartHere() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="g-start" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3883FF"/>
          <stop offset="1" stopColor="#FB03B9"/>
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="15" stroke="url(#g-start)" strokeWidth="1.5" fill="none"/>
      <path d="M13 10l8 6-8 6V10z" fill="url(#g-start)"/>
    </svg>
  );
}

function IconAccount() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="g-account" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3883FF"/>
          <stop offset="1" stopColor="#FB03B9"/>
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="15" stroke="url(#g-account)" strokeWidth="1.5" fill="none"/>
      <circle cx="16" cy="13" r="4" fill="url(#g-account)"/>
      <path d="M8 24c0-4.418 3.582-7 8-7s8 2.582 8 7" stroke="url(#g-account)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </svg>
  );
}

function IconRunSpace() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="g-space" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3883FF"/>
          <stop offset="1" stopColor="#FB03B9"/>
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="15" stroke="url(#g-space)" strokeWidth="1.5" fill="none"/>
      <rect x="9" y="17" width="14" height="7" rx="1" stroke="url(#g-space)" strokeWidth="1.5" fill="none"/>
      <path d="M9 17l7-8 7 8" stroke="url(#g-space)" strokeWidth="1.5" strokeLinejoin="round" fill="none"/>
    </svg>
  );
}

function IconPolicies() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="g-policy" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3883FF"/>
          <stop offset="1" stopColor="#FB03B9"/>
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="15" stroke="url(#g-policy)" strokeWidth="1.5" fill="none"/>
      <rect x="10" y="9" width="12" height="14" rx="1.5" stroke="url(#g-policy)" strokeWidth="1.5" fill="none"/>
      <path d="M13 13h6M13 16h6M13 19h4" stroke="url(#g-policy)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

const topics = [
  {
    Icon: IconStartHere,
    title: 'Start here',
    description: 'New to Commonspace? Learn what the platform is, how it works, and how to set up your account and profile.',
    href: '/docs/start-here',
  },
  {
    Icon: IconAccount,
    title: 'Your account & memberships',
    description: 'Managing your profile, joining Spaces, memberships, benefits, and billing as a member.',
    href: '/docs/account-memberships',
  },
  {
    Icon: IconRunSpace,
    title: 'Run your Space',
    description: 'Creating and launching a Space, managing members, channels, branding, custom domains, and payouts.',
    href: '/docs/run-your-space',
  },
  {
    Icon: IconPolicies,
    title: 'Policies & support',
    description: 'Troubleshooting, refunds, community guidelines, account issues, and platform policies.',
    href: '/docs/policies-support',
  },
];

export default function Home() {
  return (
    <Layout title="Help Center" description="Browse help topics for Commonspace.">
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.heroTitle}>How can we help you?</h1>
          <p className={styles.heroSubtitle}>Browse by topic below.</p>
        </div>
        <div className={styles.grid}>
          {topics.map((topic) => (
            <div key={topic.href} className={styles.card}>
              <topic.Icon />
              <h2 className={styles.cardTitle}>{topic.title}</h2>
              <p className={styles.cardDescription}>{topic.description}</p>
              <Link to={topic.href} className={styles.cardLink}>
                Browse articles →
              </Link>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
