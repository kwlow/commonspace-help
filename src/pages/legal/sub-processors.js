import React from 'react';
import LegalPage from '@site/src/components/LegalPage';

const LAST_UPDATED = 'June 17, 2026';

const coreSubProcessors = [
  {
    name: 'Amazon Web Services (AWS)',
    category: 'Cloud Infrastructure & Hosting',
    purpose: 'Servers, storage, databases (S3, EC2, RDS)',
    location: 'United States (us-west-1)',
    dataProcessed: 'All Personal Data stored in the Services',
    effectiveDate: 'At launch',
  },
  {
    name: 'Cloudflare, Inc.',
    category: 'Cloud Infrastructure & Hosting',
    purpose: 'CDN, DDoS protection, DNS, network security',
    location: 'United States',
    dataProcessed: 'IP addresses, request metadata',
    effectiveDate: 'At launch',
  },
  {
    name: 'Stripe, Inc.',
    category: 'Payment Processing & Identity Verification',
    purpose: 'Payment processing, identity verification',
    location: 'United States',
    dataProcessed: 'Member payment and transaction data, identity verification data',
    effectiveDate: 'At launch',
  },
  {
    name: 'Twilio, Inc.',
    category: 'Communication & Messaging',
    purpose: 'SMS-based two-factor authentication',
    location: 'United States',
    dataProcessed: 'Phone numbers (for Members who enable SMS 2FA)',
    effectiveDate: 'At launch',
  },
  {
    name: 'SendGrid (Twilio)',
    category: 'Communication & Messaging',
    purpose: 'Transactional email delivery',
    location: 'United States',
    dataProcessed: 'Email addresses, email content',
    effectiveDate: 'At launch',
  },
  {
    name: 'Expo (650 Industries)',
    category: 'Communication & Messaging',
    purpose: 'Mobile app build and push notifications',
    location: 'United States',
    dataProcessed: 'Push notification tokens, device identifiers',
    effectiveDate: 'At launch',
  },
  {
    name: 'Google Firebase (Google LLC)',
    category: 'Communication & Messaging',
    purpose: 'Android push notifications (FCM)',
    location: 'United States',
    dataProcessed: 'Device tokens, notification payloads',
    effectiveDate: 'At launch',
  },
  {
    name: 'Apple Inc.',
    category: 'Communication & Messaging',
    purpose: 'iOS app distribution and push notifications (APNs)',
    location: 'United States',
    dataProcessed: 'Device tokens, notification payloads',
    effectiveDate: 'At launch',
  },
  {
    name: 'Google LLC',
    category: 'Security & Fraud Prevention',
    purpose: 'reCAPTCHA Enterprise (bot detection, fraud prevention)',
    location: 'United States',
    dataProcessed: 'IP address, interaction data',
    effectiveDate: 'At launch',
  },
  {
    name: 'Google LLC',
    category: 'Mapping & Location Services',
    purpose: 'Google Maps (address lookup, location display)',
    location: 'United States',
    dataProcessed: 'Location data',
    effectiveDate: 'At launch',
  },
];

const pluginSubProcessors = [
  {
    name: 'Zoom Video Communications',
    purpose: 'Video conferencing for Space events',
    location: 'United States',
    dataProcessed: 'Display name, meeting metadata, audio/video data',
    effectiveDate: 'At launch',
  },
  {
    name: 'Discord',
    purpose: 'Community chat integration',
    location: 'United States',
    dataProcessed: 'Display name, profile information, messages',
    effectiveDate: 'At launch',
  },
  {
    name: 'Shopify',
    purpose: 'E-commerce integration for Space stores',
    location: 'United States',
    dataProcessed: 'Display name, transaction data, shipping information',
    effectiveDate: 'At launch',
  },
  {
    name: 'WhatsApp (Meta Platforms)',
    purpose: 'Messaging integration',
    location: 'United States / EU',
    dataProcessed: 'Display name, phone number, messages',
    effectiveDate: 'At launch',
  },
];

const TableHeader = () => (
  <thead>
    <tr>
      <th>Sub-processor</th>
      <th>Purpose</th>
      <th>Location</th>
      <th>Data Processed</th>
      <th>Effective Date</th>
    </tr>
  </thead>
);

export default function SubProcessors() {
  const categories = [...new Set(coreSubProcessors.map(sp => sp.category))];

  return (
    <LegalPage title="Sub-processor List — Commonspace">
      <h1>COMMONSPACE SUB-PROCESSOR LIST</h1>
      <p><em>Last Updated: {LAST_UPDATED}</em></p>

      <p>This page lists the current Sub-processors authorized to process Personal Data on behalf of Space Owner Controllers under the <a href="https://help.common.space/legal/dpa">Commonspace Data Processing Addendum</a> ("DPA"). This list is maintained in accordance with Section 7.3 of the DPA.</p>

      <p>Commonspace may add or replace Sub-processors within an already-authorized category with at least 14 days' notice. Engaging a Sub-processor in a new category requires at least 30 days' notice. Notice is sent to the email associated with your Space Owner account. If you have a reasonable objection based on data protection grounds, you may notify us in writing within 15 days of receiving notice at <a href="mailto:privacy@common.space">privacy@common.space</a>.</p>

      <h2>Core Platform Sub-processors</h2>
      <p>The following Sub-processors are active for all Spaces on the platform.</p>

      {categories.map(category => (
        <div key={category}>
          <h3>{category}</h3>
          <table>
            <TableHeader />
            <tbody>
              {coreSubProcessors
                .filter(sp => sp.category === category)
                .map((sp, index) => (
                  <tr key={index}>
                    <td><strong>{sp.name}</strong></td>
                    <td>{sp.purpose}</td>
                    <td>{sp.location}</td>
                    <td>{sp.dataProcessed}</td>
                    <td>{sp.effectiveDate}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      ))}

      <h2>Optional Space Plugin Sub-processors</h2>
      <p>The following Sub-processors are only active for Spaces where the Controller has enabled the relevant Plugin. Personal Data is only processed for Members who actively opt in to use the Plugin within a Space.</p>

      <table>
        <TableHeader />
        <tbody>
          {pluginSubProcessors.map((sp, index) => (
            <tr key={index}>
              <td><strong>{sp.name}</strong></td>
              <td>{sp.purpose}</td>
              <td>{sp.location}</td>
              <td>{sp.dataProcessed}</td>
              <td>{sp.effectiveDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>The current list of available Plugins is maintained at <a href="https://help.common.space/legal/plugins">https://help.common.space/legal/plugins</a>.</p>

      <h2>Questions</h2>
      <p>For questions about this Sub-processor list or Commonspace's data processing practices, contact <a href="mailto:privacy@common.space">privacy@common.space</a>.</p>
    </LegalPage>
  );
}
