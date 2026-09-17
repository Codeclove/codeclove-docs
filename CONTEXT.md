# Domain Context & Glossary

This document defines the canonical domain model, vocabulary, and entity relationships across CodeClove products.

---

## 1. Licensing & Entitlements

| Term | Definition |
|---|---|
| **License Key** | A unique software entitlement token issued upon purchase. Unlocks one-click in-dashboard updates and official support. |
| **Production Activation** | A license activation performed against a live public domain (e.g., `myschool.edu`, `company.com`). Consumes one site entitlement slot. |
| **Staging Activation** | A license activation performed on local development environments (`*.test`, `*.local`, `localhost`) or staging subdomains (`staging.*`). Does not consume site entitlement slots. |
| **License Renewal** | An annual license renewal completed via the CodeClove Account dashboard to extend automatic updates and priority support. |

---

## 2. Nexora

### 2.1 Academic Hierarchy
* **Academic Session (`academic_session`):** A discrete operational school year (e.g., `2026-2027`) binding all classes, student enrollments, attendance logs, and fee ledgers.
* **Academic Term (`academic_term`):** A subdivision within an academic session (e.g., Semester 1, Term 2, Quarter 3).
* **Academic Unit (`academic_unit`):** The primary grade level of students (e.g., *Class* in India, *Grade* in US, *Year* in UK).
* **Academic Group (`academic_group`):** A subdivision inside a unit (e.g., *Section* in India, *Homeroom* in US, *Form* in UK).
* **Subject (`subject`):** A course or curriculum subject taught within classes (e.g., Mathematics, Physics, English Literature).
* **Preset (`preset`):** A pre-configured country template (India CBSE/ICSE, US K-12, UK National) applying terminology, grading systems, and default grade structures without altering the underlying data schema.

### 2.2 Student Lifecycle & Admissions
* **Inquiry (`admission_inquiry`):** An initial lightweight prospective inquiry submitted via `[nexora_inquiry_form]`.
* **Admission Application (`admission_application`):** A formal prospective student application submitted via `[nexora_admission_form]`, containing applicant details and uploaded identity documents.
* **Application Reference:** A temporary tracking identifier (e.g., `NX-APP-2026-0042`) used by applicants to check application status via `[nexora_application_status]`.
* **Student Record (`student`):** A permanent Student Information System (SIS) record created solely after staff reviews, approves, and converts an admission application.
* **Admission Number (`admission_number`):** The permanent school admission identifier generated upon applicant conversion (e.g., `NX-ADM-2026-0105`).
* **Student Number (`student_number`):** An internal student identifier for daily administrative records.
* **Roll Number (`roll_number`):** A class- and section-specific ordering number assigned after unit/group enrollment.
* **Student Promotion (`student_promotion`):** The end-of-year academic transition moving students to the subsequent grade or retaining them based on academic criteria.

### 2.3 Staff & Roles
* **Staff Member (`staff_member`):** An employee or faculty record containing departmental assignment, designation, contact info, and linked WordPress user.
* **Staff Application (`staff_application`):** A prospective employment application submitted via `[nexora_staff_application_form]`.
* **Staff ID / Employee ID (`employee_id`):** A unique staff identifier (e.g., `NX-EMP-2026-0012`) assigned upon staff onboarding.
* **Role-Based Access Control (RBAC):** Permission matrix assigning specific operational capabilities to roles (Principal, Administrator, Teacher, Accountant, Front Desk).

### 2.4 Attendance & Timetable
* **Attendance Record (`attendance_record`):** A daily attendance entry for a student or staff member recording status (`Present`, `Absent`, `Late`, `Half-day`, `Excused`).
* **Period Slot (`period_slot`):** A configured time block within a daily school schedule (e.g., Period 1: 08:30 - 09:15).
* **Timetable Grid (`timetable`):** The master weekly scheduling matrix mapping Classes, Sections, Subjects, Faculty, and Classrooms.
* **Teacher Substitution (`substitution`):** A temporary reassignment of an absent teacher's scheduled period to available faculty.

### 2.5 Finance & Billing
* **Fee Type / Head (`fee_type`):** A reusable charge category (e.g., Tuition Fee, Laboratory Fee, Transport Fee, Admission Fee).
* **Fee Structure (`fee_structure`):** A composite billing template combining fee heads, payment schedules, and due dates assigned to specific classes.
* **Invoice (`invoice`):** A formal bill generated for an enrolled student.
* **Invoice Line Item (`invoice_line_item`):** An individual itemized charge inside an invoice.
* **Payment (`payment`):** A recorded financial transaction applied against one or more invoices (Cash, Cheque, Bank Transfer, Online).
* **Defaulter Record:** An overdue balance record tracking unpaid or partially paid student invoices.

---

## 3. HR Press Pro

* **Employee Profile (`employee_profile`):** The central HR record holding employment details, department, designation, emergency contacts, and linked WordPress user.
* **Department (`department`):** An organizational unit (e.g., Engineering, Operations, Marketing).
* **Designation (`designation`):** A specific job title assigned to an employee within a department.
* **Leave Type (`leave_type`):** A configured leave policy (e.g., Paid Time Off, Sick Leave, Casual Leave, Maternity Leave) defining annual quotas and carry-forward rules.
* **Leave Request (`leave_request`):** An employee-submitted time-off request routed through manager approval workflows.
* **Daily Web Clock-In (`attendance_log`):** Self-service timestamp logging for employee work shifts.
