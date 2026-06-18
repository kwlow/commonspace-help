import React from 'react';
import LegalPage from '@site/src/components/LegalPage';

export default function DPA() {
  return (
    <LegalPage title="Data Processing Addendum — Commonspace">
      <h1>COMMONSPACE DATA PROCESSING ADDENDUM</h1>
      <p><em>Last Updated: June 17, 2026</em></p>

      <h2>1. Introduction</h2>
      <p>This Data Processing Addendum ("DPA") forms part of the Commonspace Space Owner Agreement ("Agreement") between Commonspace Platforms, Inc. ("Commonspace," "Processor," "we," "us") and the Space Owner ("Controller," "you") and governs Commonspace's processing of Personal Data on your behalf in connection with the Services.</p>
      <p>This DPA applies where and to the extent Commonspace processes Personal Data that is subject to Applicable Data Protection Law on behalf of the Controller in the course of providing the Services under the Agreement.</p>
      <p><em>This DPA is incorporated into and subject to the Space Owner Agreement. Capitalized terms not defined here have the meanings given in the Space Owner Agreement.</em></p>

      <h2>2. Definitions</h2>
      <p><strong>"Applicable Data Protection Law"</strong> means all applicable laws relating to the processing of Personal Data, including (as applicable): the EU General Data Protection Regulation (GDPR, Regulation 2016/679); the UK GDPR and Data Protection Act 2018; the Swiss Federal Act on Data Protection (FADP); the California Consumer Privacy Act and California Privacy Rights Act (CCPA/CPRA); Japan's Act on the Protection of Personal Information (APPI); and any other applicable data protection or privacy laws.</p>
      <p><strong>"Data Subject"</strong> means the identified or identifiable natural person to whom Personal Data relates (i.e., your Members).</p>
      <p><strong>"Personal Data"</strong> means any information relating to a Data Subject that is processed by Commonspace on your behalf through the Services, as further described in Annex 1.</p>
      <p><strong>"Processing"</strong> means any operation performed on Personal Data, including collection, recording, organization, structuring, storage, adaptation, retrieval, consultation, use, disclosure, combination, restriction, erasure, or destruction.</p>
      <p><strong>"Security Incident"</strong> means any accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, Personal Data processed by Commonspace on your behalf.</p>
      <p><strong>"Standard Contractual Clauses" or "SCCs"</strong> means the standard contractual clauses approved by the European Commission in Implementing Decision (EU) 2021/914, as may be amended or replaced.</p>
      <p><strong>"Sub-processor"</strong> means any third party engaged by Commonspace to process Personal Data on behalf of the Controller.</p>

      <h2>3. Scope and Roles</h2>

      <h3>3.1 Roles of the Parties</h3>
      <p>You are the Controller of your Members' Personal Data. Commonspace acts as a Processor when processing Personal Data on your behalf through the Services. This DPA does not apply to Personal Data that Commonspace processes as an independent Controller (such as your Account data as a Space Owner, or data collected for platform-wide purposes such as security, fraud prevention, and platform analytics).</p>

      <h3>3.2 Controller Obligations</h3>
      <p>You agree that:</p>
      <p>(a) You have a lawful basis for the processing of Personal Data and have provided all necessary notices and obtained all necessary consents from Data Subjects</p>
      <p>(b) You will comply with your obligations under Applicable Data Protection Law</p>
      <p>(c) You will use the Services in accordance with the Agreement and Applicable Data Protection Law</p>
      <p>(d) Your instructions to Commonspace for the processing of Personal Data will comply with Applicable Data Protection Law</p>

      <h2>4. Processing of Personal Data</h2>

      <h3>4.1 Instructions</h3>
      <p>Commonspace will process Personal Data only on your documented instructions, including with regard to transfers of Personal Data to a third country, unless required to do so by applicable law. In such case, Commonspace will inform you of that legal requirement before processing, unless the law prohibits such notification on important grounds of public interest.</p>
      <p>Your instructions are documented in this DPA, the Agreement, and your configuration of the Services. You may issue additional reasonable instructions consistent with the Agreement by contacting privacy@common.space.</p>

      <h3>4.2 Purpose Limitation</h3>
      <p>Commonspace will process Personal Data solely for the purpose of providing the Services to you under the Agreement and as further documented in Annex 1, and will not process Personal Data for any other purpose unless you provide prior written instructions.</p>

      <h3>4.3 Details of Processing</h3>
      <p>The subject matter, duration, nature, purpose, types of Personal Data, and categories of Data Subjects are described in Annex 1 to this DPA.</p>

      <h2>5. Confidentiality</h2>
      <p>Commonspace will ensure that persons authorized to process Personal Data have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality.</p>

      <h2>6. Security</h2>

      <h3>6.1 Security Measures</h3>
      <p>Commonspace will implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, as required by Article 32 of the GDPR, including as appropriate:</p>
      <p>(a) Encryption of Personal Data in transit and at rest</p>
      <p>(b) Measures appropriate to the current scale of processing to support the confidentiality, integrity, and availability of processing systems and services, including regular backups, monitoring, and plans to enhance infrastructure resilience as the platform grows</p>
      <p>(c) The ability to restore the availability and access to Personal Data in a reasonable timeframe in the event of a physical or technical incident, taking into account the current scale and architecture of the Services</p>
      <p>(d) A process for regularly testing, assessing, and evaluating the effectiveness of technical and organizational measures</p>

      <h3>6.2 Current Security Measures</h3>
      <p>Commonspace's current security measures include, but are not limited to: TLS encryption in transit; encryption at rest using Fernet symmetric encryption (AES-128-CBC with HMAC authentication) as a minimum standard, with comparable or stronger methods used as needed; secure password hashing; role-based access controls; regular security assessments; payment data handled exclusively by Stripe in accordance with PCI DSS standards; and access-controlled storage for non-public content (including paywall-gated, Member-only, and Benefit-restricted media) using time-limited, authenticated URLs that require valid authorization and expire automatically.</p>

      <h2>7. Sub-processors</h2>

      <h3>7.1 General Authorization</h3>
      <p>You provide general written authorization for Commonspace to engage Sub-processors to process Personal Data on your behalf, including Sub-processors within the categories listed in Annex 2. The current list of specific Sub-processors within each authorized category is maintained at <a href="https://help.common.space/legal/sub-processors">https://help.common.space/legal/sub-processors</a>.</p>

      <h3>7.2 Obligations on Sub-processors</h3>
      <p>Commonspace will:</p>
      <p>(a) Enter into a written agreement with each Sub-processor imposing data protection obligations no less protective than those in this DPA</p>
      <p>(b) Remain fully liable to you for the performance of each Sub-processor's obligations</p>

      <h3>7.3 Changes to Sub-processors</h3>
      <p>Commonspace may add or replace Sub-processors within an already-authorized category by updating the Sub-processor list at <a href="https://help.common.space/legal/sub-processors">https://help.common.space/legal/sub-processors</a> and sending notice to the email associated with your Space Owner account at least 14 days before the change takes effect.</p>
      <p>Commonspace will notify you at least 30 days before engaging a Sub-processor in a new category not listed in Annex 2.</p>
      <p>If you have a reasonable objection to a new or replacement Sub-processor based on data protection grounds, you may notify us in writing within 15 days of receiving notice. We will work with you in good faith to find a resolution. If no resolution is possible, either party may terminate the Agreement with respect to the affected Services.</p>

      <h2>8. Data Subject Rights</h2>

      <h3>8.1 Assistance</h3>
      <p>Commonspace will assist you in responding to Data Subject requests to exercise their rights under Applicable Data Protection Law (access, rectification, erasure, restriction, portability, objection), by providing technical measures and tools through the Services where feasible.</p>

      <h3>8.2 Notification</h3>
      <p>If Commonspace receives a Data Subject request directly regarding your Space, we will promptly redirect the Data Subject to you, unless legally prohibited from doing so.</p>

      <h2>9. Security Incidents</h2>

      <h3>9.1 Notification</h3>
      <p>Commonspace will notify you without undue delay, and in any event within 48 hours, after becoming aware of a Security Incident affecting Personal Data processed on your behalf. Notification will be sent to the email associated with your Space Owner account.</p>

      <h3>9.2 Notification Contents</h3>
      <p>The notification will describe, to the extent known:</p>
      <p>(a) The nature of the Security Incident, including the categories and approximate number of Data Subjects and records affected</p>
      <p>(b) The likely consequences of the Security Incident</p>
      <p>(c) The measures taken or proposed to address the Security Incident and mitigate its effects</p>
      <p>(d) A contact point for further information</p>

      <h3>9.3 Cooperation</h3>
      <p>Commonspace will cooperate with you and take reasonable steps to assist you in investigating, mitigating, and remediating the Security Incident, and in fulfilling your obligations to notify supervisory authorities and affected Data Subjects under Applicable Data Protection Law.</p>

      <h3>9.4 No Admission</h3>
      <p>Notification of a Security Incident is not an acknowledgment of fault or liability by Commonspace.</p>

      <h2>10. Data Protection Impact Assessments and Prior Consultation</h2>
      <p>Commonspace will provide reasonable assistance to you with data protection impact assessments and prior consultations with supervisory authorities, to the extent required under Article 35 and 36 of the GDPR, taking into account the nature of the processing and the information available to Commonspace.</p>

      <h2>11. Audit Rights</h2>

      <h3>11.1 Audit Information</h3>
      <p>Commonspace will make available to you all information reasonably necessary to demonstrate compliance with this DPA and Article 28 of the GDPR.</p>

      <h3>11.2 Audits</h3>
      <p>You (or a qualified third-party auditor appointed by you) may conduct an audit of Commonspace's processing of Personal Data under this DPA, subject to the following conditions:</p>
      <p>(a) You provide at least 30 days' prior written notice</p>
      <p>(b) Audits are limited to once per 12-month period, unless required by a supervisory authority or following a Security Incident</p>
      <p>(c) Audits are conducted during normal business hours with minimal disruption</p>
      <p>(d) The auditor is bound by appropriate confidentiality obligations</p>
      <p>(e) Audit scope is limited to Commonspace's compliance with this DPA</p>

      <h3>11.3 Third-Party Certifications</h3>
      <p>To the extent Commonspace maintains third-party certifications or audit reports (such as SOC 2 Type II or ISO 27001), Commonspace may satisfy audit requests by providing such reports upon request.</p>

      <h2>12. International Data Transfers</h2>

      <h3>12.1 Transfer Mechanism</h3>
      <p>Personal Data may be transferred to and processed in the United States. To the extent such transfer is subject to Applicable Data Protection Law requiring appropriate safeguards, the parties agree to rely on the Standard Contractual Clauses (EU Commission Implementing Decision 2021/914), which are hereby incorporated by reference.</p>

      <h3>12.2 SCC Module</h3>
      <p>For transfers of Personal Data from you (as Controller in the EEA/UK/Switzerland) to Commonspace (as Processor in the United States), Module Two (Controller to Processor) of the SCCs applies.</p>

      <h3>12.3 UK Transfers</h3>
      <p>For transfers of Personal Data subject to UK GDPR, the UK International Data Transfer Addendum to the EU SCCs (as issued by the Information Commissioner under Section 119A of the Data Protection Act 2018) is incorporated by reference.</p>

      <h3>12.4 Supplementary Measures</h3>
      <p>Commonspace implements supplementary technical and organizational measures to protect transferred Personal Data, including encryption in transit and at rest, access controls, and security monitoring.</p>

      <h2>13. Deletion and Return of Personal Data</h2>

      <h3>13.1 Upon Termination</h3>
      <p>Upon termination or expiry of the Agreement, Commonspace will, at your choice:</p>
      <p>(a) Return all Personal Data processed on your behalf, in a structured, commonly used, machine-readable format; or</p>
      <p>(b) Delete all Personal Data processed on your behalf and certify such deletion in writing</p>

      <h3>13.2 Retention Exceptions</h3>
      <p>Commonspace may retain Personal Data to the extent required by applicable law (such as tax and financial record retention requirements), in which case Commonspace will isolate and protect such data and limit processing to the purposes required by law.</p>

      <h3>13.3 Timeline</h3>
      <p>Deletion or return will be completed within 90 days of the effective date of termination, unless otherwise required by applicable law.</p>

      <h2>14. Liability</h2>
      <p>Liability under this DPA is subject to the limitation of liability provisions in the Agreement.</p>

      <h2>15. General</h2>

      <h3>15.1 Conflict</h3>
      <p>In the event of any conflict between this DPA and the Agreement, this DPA will prevail with respect to the processing of Personal Data.</p>

      <h3>15.2 Amendments</h3>
      <p>This DPA may be amended by Commonspace with 30 days' notice to reflect changes in Applicable Data Protection Law. Material changes will be communicated via email to your Space Owner account.</p>

      <h3>15.3 Governing Law</h3>
      <p>This DPA is governed by the law specified in the Agreement, except that the SCCs will be governed by the law of the EU Member State in which the Controller is established (or, if the Controller is not established in the EU, the law of the Netherlands).</p>

      <h2>Annex 1: Details of Processing</h2>
      <table>
        <thead>
          <tr>
            <th style={{width: '33%'}}>Element</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Subject matter</strong></td>
            <td>Processing of Personal Data in connection with hosting and operating the Controller's Space on the Commonspace platform</td>
          </tr>
          <tr>
            <td><strong>Duration</strong></td>
            <td>For the term of the Agreement, plus any applicable retention period</td>
          </tr>
          <tr>
            <td><strong>Nature and purpose</strong></td>
            <td>Hosting the Space; storing and displaying Member content; facilitating communications between Controller and Members; processing transactions; delivering notifications; providing analytics about Space activity</td>
          </tr>
          <tr>
            <td><strong>Types of Personal Data</strong></td>
            <td>Name; email address; @username; profile information; city/location; answers to Member Questions; Membership and purchase history; activity data within the Space; content posted (text, images, video); IP address; device information</td>
          </tr>
          <tr>
            <td><strong>Categories of Data Subjects</strong></td>
            <td>Members of the Controller's Space</td>
          </tr>
          <tr>
            <td><strong>Special categories</strong></td>
            <td>None intentionally processed. Controller must not configure the Services to collect special category data (e.g., health, racial/ethnic origin, religious beliefs) through Member Questions without ensuring a lawful basis under Article 9 GDPR</td>
          </tr>
        </tbody>
      </table>

      <h2>Annex 2: Authorized Sub-processor Categories</h2>
      <p>The following categories of Sub-processors are authorized to process Personal Data on behalf of the Controller. The current list of specific Sub-processors within each category, including effective dates of any changes, is maintained at <a href="https://help.common.space/legal/sub-processors">https://help.common.space/legal/sub-processors</a> and updated in accordance with Section 7.3 of this DPA.</p>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Purpose</th>
            <th>Location</th>
            <th>Examples of Current Providers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Cloud Infrastructure &amp; Hosting</strong></td>
            <td>Servers, storage, databases, CDN, networking</td>
            <td>United States</td>
            <td>Amazon Web Services (AWS), Cloudflare</td>
          </tr>
          <tr>
            <td><strong>Payment Processing &amp; Identity Verification</strong></td>
            <td>Transaction processing, fraud prevention, identity verification</td>
            <td>United States</td>
            <td>Stripe, Inc.</td>
          </tr>
          <tr>
            <td><strong>Communication &amp; Messaging</strong></td>
            <td>Transactional email, SMS, push notifications</td>
            <td>United States</td>
            <td>SendGrid (Twilio), Twilio, Expo (650 Industries), Apple (APNs), Google Firebase (FCM)</td>
          </tr>
          <tr>
            <td><strong>Security &amp; Fraud Prevention</strong></td>
            <td>Bot detection, abuse prevention, authentication</td>
            <td>United States</td>
            <td>Google LLC (reCAPTCHA Enterprise)</td>
          </tr>
          <tr>
            <td><strong>Mapping &amp; Location Services</strong></td>
            <td>Address lookup, location display</td>
            <td>United States</td>
            <td>Google LLC (Google Maps)</td>
          </tr>
          <tr>
            <td><strong>Error Monitoring &amp; Observability</strong></td>
            <td>Application performance monitoring, error tracking, logging</td>
            <td>United States</td>
            <td>See current list at sub-processors URL</td>
          </tr>
          <tr>
            <td><strong>Analytics</strong></td>
            <td>Platform and Space activity analytics</td>
            <td>United States</td>
            <td>See current list at sub-processors URL</td>
          </tr>
          <tr>
            <td><strong>AI &amp; Machine Learning</strong></td>
            <td>AI-powered features within the Services</td>
            <td>United States</td>
            <td>See current list at sub-processors URL</td>
          </tr>
          <tr>
            <td><strong>Space Plugins</strong></td>
            <td>Optional integrations activated per-Space by Controller; Member opt-in required on first access</td>
            <td>United States / EU (varies by Plugin)</td>
            <td>Zoom Video Communications, Discord, Shopify, WhatsApp (Meta Platforms)</td>
          </tr>
        </tbody>
      </table>
      <p>Plugin Sub-processors only process Personal Data for Members who actively opt in to use the Plugin within a Space. The Controller determines which Plugins to enable. The current list of available Plugins is maintained at <a href="https://help.common.space/legal/plugins">https://help.common.space/legal/plugins</a>.</p>
    </LegalPage>
  );
}
