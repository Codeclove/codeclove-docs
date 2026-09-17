# Student Directory & SIS

Manage student profiles, print official ID cards, import bulk records via CSV, and execute year-end class promotions.

---

## 1. Student Directory

The centralized Student Directory provides a searchable roster of all enrolled students:

1. Navigate to **Nexora > Students > Directory**.
2. Filter students using top-level filter controls:
   * **Academic Session:** View students in the active or previous sessions.
   * **Class & Section:** Narrow down to specific grade levels or homeroom sections.
   * **Enrollment Status:** `Active`, `Graduated`, `Transferred`, `Suspended`.
   * **Search:** Instant search across Student Name, Admission Number, Roll Number, or Parent Phone.

### Viewing Student Dossiers
Click on any student record to open the full profile:
* **Personal Biodata:** Date of Birth, Gender, Blood Group, National ID, Address.
* **Academic Details:** Admission Number, Student ID, Class, Section, Roll Number, Enrollment Date.
* **Guardian & Family:** Primary guardian, secondary contacts, emergency phone numbers, and billing email.
* **Document Vault:** Secure storage for birth certificates, transfer certificates, medical records, and ID proofs.
* **Fee Ledger:** Complete history of issued invoices, recorded payments, and outstanding balances.
* **Attendance History:** Real-time attendance rate and absence breakdown for the current session.

---

## 2. Student ID Card Generator

Generate and print standardized student identity cards with barcodes or QR codes:

1. Navigate to **Nexora > Students > Directory**.
2. Select individual students using checkboxes, or choose **Select All in Class/Section**.
3. In the bulk actions dropdown, select **Print ID Cards** (or click **Print ID Card** on a student profile).
4. Configure card layout parameters:
   * **Card Template:** Select portrait or landscape layout.
   * **Branding:** Include school logo, school name, and affiliation code from settings.
   * **Fields:** Display photo, name, class/section, roll number, blood group, and emergency contact.
   * **Barcode / QR Code:** Auto-encodes Admission Number or Student ID for gate scanning.
5. Click **Generate & Print**.

---

## 3. Bulk CSV Student Import

When onboarding a large number of existing students, use the CSV import wizard:

1. Navigate to **Nexora > Students > Directory** and click **Import Students**.
2. Click **Download Sample CSV Template** to obtain the standardized spreadsheet structure with required headers:
   * `first_name`, `last_name`, `gender`, `dob`, `admission_number`, `class_name`, `section_name`, `roll_number`, `guardian_name`, `guardian_phone`, `guardian_email`.
3. Fill out your student roster in Excel or Google Sheets and export as `.csv`.
4. Upload the CSV file in the import wizard.
5. Review the column mapping screen to ensure CSV columns match Nexora fields.
6. Click **Run Import**.
7. The import validator reports successful imports and flags rows with format errors for quick correction.

---

## 4. Year-End Student Promotion & Retention

At the conclusion of an academic year, transition students to the next grade or retain them in the current class:

1. Navigate to **Nexora > Students > Promotion** (or **Academic > Promotion**).
2. Configure promotion criteria:
   * **Source Session:** Select the concluding academic year (e.g., `2025-2026`).
   * **Target Session:** Select the upcoming academic year (e.g., `2026-2027`).
   * **Source Class & Section:** Select the current class being evaluated (e.g., `Class 9 - Section A`).
   * **Target Class & Section:** Select the promotion destination (e.g., `Class 10 - Section A`).
3. The student roster for that section loads with individual action toggles:
   * **Promote:** Enrolls the student in the target class for the new session.
   * **Retain / Repeat:** Keeps the student in the same class level for the new session.
   * **Graduate / Leave:** Marks final-year students as graduated and concludes active enrollment.
4. Update target section and roll numbers as needed.
5. Click **Execute Promotion**.

::: tip Session Isolation
Promoting students creates new enrollment entries in the target academic session while keeping historical grades, attendance, and fee records intact in the source session.
:::

---

## Next Steps

Manage faculty records and permissions in [Staff Management](/nexora/staff-management) and [Roles & Permissions](/nexora/roles-permissions).
