# Student Admissions

Nexora provides an end-to-end admissions system: from public application forms and document uploads to multi-stage application review and single-click student conversion.

---

## 1. Publishing Public Admissions Forms

Nexora provides shortcodes to embed responsive application and tracking forms on any WordPress page or post.

### Admission Form Shortcode
Embed the full student registration form for active admission cycles:
```text
[nexora_admission_form]
```

### Inquiry Form Shortcode
Embed a lightweight inquiry form for prospective parents seeking information:
```text
[nexora_inquiry_form]
```

### Application Status Lookup Shortcode
Provide a self-service tracking portal where applicants check their review status using their reference number and date of birth:
```text
[nexora_application_status]
```

---

## 2. Configuring Admissions Settings

Configure required documents, review stages, and notification recipients before opening admissions:

1. Navigate to **Nexora > Settings > Admissions**.
2. Configure workflow parameters:
   * **Target Academic Session:** Specify which academic year applications apply to.
   * **Allowed Classes:** Select which grades/classes are accepting new admissions.
   * **Required Documents:** Toggle mandatory uploads:
     * Student Photograph
     * Birth Certificate
     * Previous Academic Marksheet / Report Card
     * Transfer Certificate (TC) / Migration Certificate
     * National ID / Aadhaar / Passport
   * **Notification Emails:** Enter email addresses that should receive instant alerts when a new application is submitted.
3. Click **Save Admissions Settings**.

---

## 3. The Application Review Pipeline

When an applicant submits a form, an **Application Reference** (e.g., `NX-APP-2026-0042`) is generated and the dossier appears in the admissions queue:

1. Navigate to **Nexora > Students > Admissions** (or **Admissions > Applications**).
2. Use status filters to manage the review pipeline:
   * **Submitted:** Newly submitted applications awaiting initial verification.
   * **Under Review:** Documents are being verified by the admissions desk.
   * **Interview / Test Scheduled:** Applicant is invited for entrance evaluation.
   * **Accepted:** Applicant has passed screening and is approved for enrollment.
   * **Waitlisted:** Application approved but held pending section vacancy.
   * **Rejected:** Application declined with optional rejection reason note.
3. Click on any applicant to view their full submission:
   * View student biodata, parent contact details, and uploaded documents.
   * Add internal staff review notes.
   * Update status directly from the review card.

---

## 4. Converting Applicants to Enrolled Students

Once an applicant is **Accepted** and registration fees are received, convert the application into a permanent student record:

1. Open the accepted application in **Nexora > Students > Admissions**.
2. Click **Convert to Student**.
3. In the conversion modal, configure enrollment details:
   * **Academic Session:** Select the active academic session.
   * **Class & Section:** Place the student into their designated grade and homeroom section.
   * **Admission Number:** Auto-generated from your custom sequence (e.g., `NX-ADM-2026-0105`) or manually specified.
   * **Student Number:** Auto-generated internal ID.
   * **Roll Number:** Assign the student's classroom roll number.
   * **Initial Fee Structure:** Optionally assign an initial admission/tuition fee structure.
4. Click **Confirm Conversion**.

### What Happens Upon Conversion?
* A permanent record is created in the **Student Directory (SIS)**.
* Primary parent and guardian records are created and linked to the student profile.
* Uploaded verification documents are permanently attached to the student document vault.
* The application status updates to `Admitted`.

---

## Next Steps

Manage active students, print identity cards, and handle bulk operations in [Student Directory & SIS](/nexora/student-directory).
