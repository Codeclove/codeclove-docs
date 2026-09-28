import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'CodeClove Docs',
  description: 'Documentation and setup guides for CodeClove plugins.',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://docs.codeclove.com',
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'CodeClove Docs' }],
    ['meta', { property: 'og:title', content: 'CodeClove Docs: Plugin Documentation & Setup Guides' }],
    ['meta', { property: 'og:description', content: 'Setup guides, architecture docs, and references for CodeClove School Management Pro and HR Press Pro.' }],
  ],
  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
  },
  themeConfig: {
    logo: '/logo.svg',
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'School Management Pro', link: '/school-management-pro/' },
      { text: 'HR Press', link: '/hr-press/' },
      { text: 'Live Demo', link: 'https://demo.codeclove.com', target: '_blank' },
      { text: 'CodeClove.com', link: 'https://codeclove.com', target: '_blank' },
    ],
    sidebar: {
      '/school-management-pro/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/school-management-pro/' },
            { text: 'Installation & Activation', link: '/school-management-pro/installation' },
          ],
        },
        {
          text: 'Academic Setup',
          items: [
            { text: 'Academic Sessions & Presets', link: '/school-management-pro/academic-setup' },
            { text: 'Timetable & Substitution', link: '/school-management-pro/timetable' },
          ],
        },
        {
          text: 'Students & Admissions',
          items: [
            { text: 'Student Admissions', link: '/school-management-pro/admissions' },
            { text: 'Student Directory & SIS', link: '/school-management-pro/student-directory' },
          ],
        },
        {
          text: 'Staff & Permissions',
          items: [
            { text: 'Staff & Faculty Management', link: '/school-management-pro/staff-management' },
            { text: 'Roles & Permissions (RBAC)', link: '/school-management-pro/roles-permissions' },
          ],
        },
        {
          text: 'Operations & Billing',
          items: [
            { text: 'Attendance Tracking', link: '/school-management-pro/attendance' },
            { text: 'Fee Management & Invoicing', link: '/school-management-pro/fee-management' },
          ],
        },
        {
          text: 'Configuration & Reference',
          items: [
            { text: 'SMS & Notifications', link: '/school-management-pro/notifications-sms' },
            { text: 'Settings & Identifiers', link: '/school-management-pro/settings-identifiers' },
            { text: 'Shortcode Reference', link: '/school-management-pro/shortcodes-reference' },
          ],
        },
      ],
      '/hr-press/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/hr-press/' },
            { text: 'Installation & Activation', link: '/hr-press/installation' },
          ],
        },
        {
          text: 'Organization & Staff',
          items: [
            { text: 'Organization & Departments', link: '/hr-press/organization-setup' },
            { text: 'Employee Directory', link: '/hr-press/employee-management' },
            { text: 'Shifts & Work Schedules', link: '/hr-press/shifts-schedules' },
          ],
        },
        {
          text: 'Time & Leave',
          items: [
            { text: 'Holiday Calendars', link: '/hr-press/holidays' },
            { text: 'Leave Management', link: '/hr-press/leave-management' },
            { text: 'Attendance Tracking', link: '/hr-press/attendance-tracking' },
          ],
        },
        {
          text: 'Payroll & Operations',
          items: [
            { text: 'Payroll & Payslips', link: '/hr-press/payroll' },
            { text: 'Company Announcements', link: '/hr-press/announcements' },
            { text: 'Reports & Exports', link: '/hr-press/reports' },
          ],
        },
        {
          text: 'Configuration & Reference',
          items: [
            { text: 'Settings & Email Notifications', link: '/hr-press/settings' },
            { text: 'Shortcode Reference', link: '/hr-press/shortcodes-reference' },
          ],
        },
      ],
    },
    footer: {
      message: 'WordPress plugins & themes by CodeClove.',
      copyright: 'Copyright © 2026 CodeClove. All rights reserved.',
    },
  },
});
