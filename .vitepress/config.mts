import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'CodeClove Docs',
  description: 'Official documentation and setup guides for CodeClove WordPress plugins.',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&family=JetBrains+Mono:wght@400;500&display=swap' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'CodeClove Docs',
    search: {
      provider: 'local',
      options: {
        placeholder: 'Search documentation, guides, and hooks...',
      },
    },
    nav: [
      { text: 'Nexora ERP', link: '/nexora/' },
      { text: 'HR Press', link: '/hr-press/' },
      { text: 'Live Demo', link: 'https://demo.codeclove.com', target: '_blank' },
      { text: 'CodeClove.com', link: 'https://codeclove.com', target: '_self' },
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
          text: 'Core Setup',
          collapsed: false,
          items: [
            { text: 'Academic Setup & Boards', link: '/nexora/academic-setup' },
            { text: 'Student Admissions', link: '/nexora/admissions' },
            { text: 'Fee Management', link: '/nexora/fee-management' },
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
    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page',
    },
    footer: {
      message: 'Self-hosted WordPress plugins by CodeClove.',
      copyright: 'Copyright © 2026 CodeClove. All rights reserved.',
    },
  },
});
