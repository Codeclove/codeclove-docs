# Roles & Permissions (RBAC)

Nexora includes a granular Role-Based Access Control (RBAC) system to ensure teachers, accountants, front-desk staff, and administrators only access the modules relevant to their responsibilities.

---

## 1. Built-in Default Roles

Nexora provides pre-configured role profiles out of the box:

| Role | Intended Audience | Access Scope |
|---|---|---|
| **Principal / School Admin** | Head of Institution / Main Admins | Full unrestricted access across all academic, student, financial, staff, and system settings. |
| **Teacher / Faculty** | Teaching Staff & Homeroom Mentors | Manage daily attendance for assigned classes, view student directory, access class timetables, and view academic schedules. |
| **Accountant / Bursar** | Finance & Billing Department | Full access to Fee Types, Invoices, Payment Recording, Defaulters Reports, and Receipt Printing. No access to system settings. |
| **Front Desk / Admissions Officer** | Reception & Admissions Desk | Manage student inquiries, review admission applications, update candidate statuses, and perform applicant lookups. |
| **Staff Member (General)** | General Employees / Support Staff | Access to personal profile, staff directory lookup, and personal attendance records. |

---

## 2. Managing Role Permissions

Administrators can inspect and customize capabilities assigned to any role:

1. Navigate to **Nexora > Staff & HR > Roles & Permissions**.
2. Select a role to view its permission matrix.
3. Toggle permissions across functional modules:
   * **Academics:** View/Edit Sessions, Classes, Sections, Subjects, and Master Timetables.
   * **Students:** View Directory, Edit Biodata, Convert Applicants, Print ID Cards, Execute Promotions.
   * **Admissions:** View Inquiries, Update Application Status, Review Documents.
   * **Attendance:** Mark Student Daily Attendance, View Monthly Attendance, Edit Historical Attendance.
   * **Finance:** Create Fee Heads, Generate Invoices, Record Payments, View Overdue Defaulters.
   * **Staff & HR:** View Staff Directory, Create Staff Profiles, Manage Leaves.
   * **Settings:** Access System Configuration, Country Presets, Numbering Sequences, and License Keys.
4. Click **Save Permissions**.

---

## 3. Creating Custom Staff Roles

For schools with specialized staffing requirements (e.g., *Transport Manager*, *Hostel Warden*, *Exam Coordinator*):

1. In **Nexora > Staff & HR > Roles & Permissions**, click **Add Custom Role**.
2. Enter the **Role Name** (e.g., `Exam Coordinator` or `Transport Supervisor`).
3. Select the base template to clone initial permissions from, or start with a clean profile.
4. Check the exact operational capabilities required for that role.
5. Click **Create Role**.
6. You can now assign this role to any staff member when creating or editing their staff profile.

---

## Next Steps

Learn how to record daily and monthly attendance in [Attendance Tracking](/nexora/attendance).
