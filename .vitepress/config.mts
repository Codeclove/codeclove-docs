import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'CodeClove Docs',
  description: 'Official documentation and setup guides for CodeClove WordPress plugins.',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://docs.codeclove.com',
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'CodeClove Docs' }],
    ['meta', { property: 'og:title', content: 'CodeClove Docs: Plugin Documentation & Setup Guides' }],
    ['meta', { property: 'og:description', content: 'Official setup guides, architecture, and references for CodeClove WordPress plugins including Nexora and HR Press Pro.' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'CodeClove Docs: Plugin Documentation & Setup Guides' }],
    ['meta', { name: 'twitter:description', content: 'Official setup guides, architecture, and references for CodeClove WordPress plugins.' }],
  ],
  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'CodeClove Docs',
    search: {
      provider: 'local',
      options: {
        placeholder: 'Search documentation, guides, and settings...',
      },
    },
    nav: [
      { text: 'Nexora', link: '/nexora/' },
      { text: 'HR Press', link: '/hr-press/' },
      { text: 'Live Demo', link: 'https://demo.codeclove.com', target: '_blank' },
      { text: 'CodeClove.com', link: 'https://codeclove.com', target: '_blank' },
    ],
    sidebar: {
      '/nexora/': [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/nexora/' },
            { text: 'Installation & Activation', link: '/nexora/installation' },
          ],
        },
        {
          text: 'Academic Setup',
          collapsed: false,
          items: [
            { text: 'Academic Sessions & Presets', link: '/nexora/academic-setup' },
            { text: 'Timetable & Substitution', link: '/nexora/timetable' },
          ],
        },
        {
          text: 'Students & Admissions',
          collapsed: false,
          items: [
            { text: 'Student Admissions', link: '/nexora/admissions' },
            { text: 'Student Directory & SIS', link: '/nexora/student-directory' },
          ],
        },
        {
          text: 'Staff & Permissions',
          collapsed: false,
          items: [
            { text: 'Staff & Faculty Management', link: '/nexora/staff-management' },
            { text: 'Roles & Permissions (RBAC)', link: '/nexora/roles-permissions' },
          ],
        },
        {
          text: 'Operations & Billing',
          collapsed: false,
          items: [
            { text: 'Attendance Tracking', link: '/nexora/attendance' },
            { text: 'Fee Management & Invoicing', link: '/nexora/fee-management' },
          ],
        },
        {
          text: 'Configuration & Reference',
          collapsed: false,
          items: [
            { text: 'SMS & Notifications', link: '/nexora/notifications-sms' },
            { text: 'Settings & Identifiers', link: '/nexora/settings-identifiers' },
            { text: 'Shortcode Reference', link: '/nexora/shortcodes-reference' },
          ],
        },
      ],
      '/hr-press/': [
        {
          text: 'Getting Started',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/hr-press/' },
            { text: 'Installation & Activation', link: '/hr-press/installation' },
          ],
        },
        {
          text: 'Configuration',
          collapsed: false,
          items: [
            { text: 'Organization & Employees', link: '/hr-press/organization-setup' },
            { text: 'Leave & Attendance', link: '/hr-press/leave-attendance' },
          ],
        },
      ],
    },
    outline: {
      level: [2, 3],
      label: 'On this page',
    },
    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page',
    },
    footer: {
      message: 'WordPress plugins & themes by CodeClove.',
      copyright: 'Copyright © 2026 CodeClove. All rights reserved.',
    },
  },
});
