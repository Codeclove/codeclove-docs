# Staff & Faculty Management

Manage teaching and non-teaching faculty records, publish online job application forms, print staff ID cards, and link staff to WordPress user accounts.

---

## 1. Staff Directory

The Staff Directory provides a centralized record of all teachers, administrative personnel, accountants, and support staff:

1. Navigate to **Nexora > Staff & HR > Staff Directory**.
2. Filter staff by:
   * **Role / Designation:** e.g., Teacher, Principal, Accountant, Front Desk, Librarian.
   * **Department:** e.g., Science Department, Administration, Mathematics.
   * **Status:** `Active`, `On Leave`, `Resigned`, `Terminated`.
3. Click **Add New Staff** to create a profile manually:
   * **Personal Information:** Full Name, Date of Birth, Gender, Contact Email, Phone, Permanent Address.
   * **Employment Details:** Employee ID (auto-generated or custom), Designation, Department, Date of Joining, Qualification, Experience.
   * **WordPress User Link:** Link the staff member to an existing WordPress user account or automatically create a new user profile with their designated role.
4. Click **Save Staff Profile**.

---

## 2. Staff ID Card Generator

Print professional faculty badges and employee identity cards:

1. In **Nexora > Staff & HR > Staff Directory**, select the staff members to print.
2. Click **Print ID Cards**.
3. Choose layout options:
   * Display school logo, employee photograph, name, designation, department, blood group, and emergency contact.
   * Include a scannable Barcode / QR Code encoding the Employee ID.
4. Click **Print**.

---

## 3. Online Staff Onboarding Forms

Embed shortcodes on any page to collect staff applications online.

### Staff Application Form Shortcode
```text
[nexora_staff_application_form]
```
Embeds an application form capturing applicant details, resume/CV upload, educational qualifications, and teaching experience.

### Staff Application Status Shortcode
```text
[nexora_staff_application_status]
```
Enables applicants to check their hiring status using their application reference number and phone number.

---

## 4. Reviewing Staff Applications & Conversion

When a prospective employee applies online:

1. Navigate to **Nexora > Staff & HR > Onboarding** (or **Staff Applications**).
2. Click on an applicant's dossier to review their resume, qualifications, and references.
3. Update review status: `Submitted`, `Under Review`, `Interview Scheduled`, `Offer Extended`, `Accepted`, `Rejected`.
4. When hiring is confirmed, click **Convert to Staff**:
   * Auto-assign the official **Employee ID** (e.g., `NX-EMP-2026-0012`).
   * Assign primary **Department** and **Designation**.
   * Assign their system role (e.g., *Teacher* or *Accountant*).
   * Choose login creation behavior: create WordPress user immediately and email login credentials, or save profile without login.
5. Click **Confirm Staff Onboarding**.

---

## Next Steps

Configure system permissions and role capabilities in [Roles & Permissions](/nexora/roles-permissions).
