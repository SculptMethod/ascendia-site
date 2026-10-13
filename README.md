# FortBoost AI — Premium Website Source

Next.js 15 + React 19 + TypeScript. Responsive English/French concept-stage website.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 (redirects to `/en`). Use `/fr` for French.

## Pages

`/en` and `/fr` plus `/product`, `/how-it-works`, `/benchmarks`, `/pricing`, `/download`, `/support`, `/account`, `/legal`, `/privacy`, `/terms`, `/refunds` under each locale.

## Real vs. not yet implemented

**Implemented:** responsive frontend, interactive example PC selector, detailed sample recommendation, illustrative frame-time visualization, FAQs, language navigation, complete informational routes, semantic buttons/links, accessible reduced-motion support.

**Not implemented (intentionally not faked):** actual Windows PC scan, Windows installer, production benchmark data, customer login, real orders, Stripe payments, license issuance, email support backend. These need real external credentials, production infrastructure, an actual Windows product and verified business/legal information.

### Production integrations to build

1. Configure PostgreSQL, authentication provider (e.g. Supabase Auth) and protected account pages.
2. Configure Stripe with server-side checkout session creation, validated webhook signatures and idempotent fulfillment; never trust client payment success alone.
3. Add license tables, hashed/revocable tokens, device activation policy, rate limiting and signed application-to-server requests.
4. Host signed Windows installers with verified SHA-256 hashes and code-signing. Only activate download CTA when verified.
5. Integrate product diagnostic results via authenticated APIs, respecting data minimization and user consent.
6. Add a real contact address and support system.
7. Replace draft legal pages with actual company details, finalized terms, refunds, privacy/cookie disclosures, VAT rules, and a GDPR-compliant consent setup where required.
8. Add analytics only after consent/legal evaluation; measure UTM attribution and conversion without fabricated claims.
9. Security review: CSP, headers, dependency scanning, webhook replay defense, backups, logging without sensitive data.
10. Test Lighthouse, browser compatibility, keyboard navigation, screen readers, mobile devices and localization.

## Design

Premium charcoal and acid-lime identity; Space Grotesk + DM Sans with local fallbacks. No fictional customer testimonials, fake benchmarks, pretend downloads or payment controls.

## Current status

**Frontend concept ready for local review. NOT a commercially deployable checkout/application.** The site clearly discloses its development status. The Windows optimization application is a separate project.
