# Nexora School ERP

**Nexora** is a self-hosted school management and ERP plugin for WordPress. It handles the administrative and academic operations of schools, colleges, and educational academies directly from the WordPress dashboard without recurring per-student SaaS fees.

---

## Core Operational Modules

* **Academic Architecture:** Multi-session support, flexible terms, classes/grades, sections/homerooms, and subject allocation with ready-to-use board presets (CBSE, ICSE, State Boards, US K-12, UK National Curriculum).
* **Admissions & Applicant Tracking:** Public-facing admission and inquiry shortcode forms, document verification pipelines, and single-click applicant-to-student conversion.
* **Student Information System (SIS):** Centralized student directories, multi-guardian relationship tracking, printable student ID cards, bulk CSV import, and end-of-year class promotion workflows.
* **Staff & HR Directory:** Faculty records, staff application forms, printable employee ID cards, and customizable Role-Based Access Control (RBAC).
* **Timetable & Scheduling:** Period configuration, interactive master weekly timetable grid, conflict prevention, and teacher leave substitution.
* **Daily & Monthly Attendance:** Fast roll-call attendance marking for students and staff with monthly timesheet summaries and SMS absence alerts.
* **Finance & Fee Management:** Customizable fee types, term-wise and monthly fee structures, batch invoice generation, multi-mode payment recording, arrears/defaulters reporting, and printable letterhead receipts.
* **SMS & Automated Notifications:** Multi-gateway SMS integration (Twilio, Msg91, Fast2SMS, Vonage) for parent alerts on admissions, attendance, and fee dues.
* **Custom Numbering & Localization:** Configurable identifier sequences (Admission Numbers, Student IDs, Employee IDs, Invoices), multi-currency support, and localized date/time formats.

---

## System Requirements

Nexora runs on standard WordPress-compatible PHP hosting environments.

| Requirement | Minimum | Recommended |
|---|---|---|
| **WordPress** | 6.2 or higher | Latest stable release (6.7+) |
| **PHP Version** | 8.0 or higher | PHP 8.2 or 8.3 |
| **MySQL / MariaDB** | MySQL 5.7+ / MariaDB 10.3+ | MySQL 8.0+ / MariaDB 10.6+ |
| **PHP Memory Limit** | 128 MB | 256 MB or higher |
| **Required PHP Extensions** | `curl`, `json`, `mbstring`, `zip` | Standard WordPress extensions |
| **HTTPS** | Required | SSL Certificate active |

---

## Documentation Navigation

| Topic | Description |
|---|---|
| [Installation & License Activation](/nexora/installation) | Plugin installation, activating license key, updates, and renewal |
| [Academic Setup & Board Presets](/nexora/academic-setup) | Sessions, classes, sections, subjects, and curriculum presets |
| [Timetable & Substitution](/nexora/timetable) | Period slots, weekly timetable matrix, and substitute teacher assignment |
| [Student Admissions](/nexora/admissions) | Online forms, review pipeline, and applicant-to-student conversion |
| [Student Directory & SIS](/nexora/student-directory) | Student profiles, ID card printing, CSV import, and promotion |
| [Staff Management](/nexora/staff-management) | Staff directory, onboarding forms, and employee ID generation |
| [Roles & Permissions](/nexora/roles-permissions) | Role matrix (Principal, Teacher, Accountant, Front Desk) |
| [Attendance Tracking](/nexora/attendance) | Daily roll-call and monthly attendance for students and staff |
| [Fee Management & Invoicing](/nexora/fee-management) | Fee types, batch invoicing, payment logs, and receipt printing |
| [SMS & Notifications](/nexora/notifications-sms) | Twilio, Msg91, Fast2SMS, Vonage setup and alert triggers |
| [Settings & Identifiers](/nexora/settings-identifiers) | School profile, custom numbering sequences, and localization |
| [Shortcode Reference](/nexora/shortcodes-reference) | Master reference for public forms and lookup widgets |
