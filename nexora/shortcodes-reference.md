# Shortcode Reference

Nexora provides frontend shortcodes to embed public admissions forms, applicant tracking widgets, and staff onboarding portals onto any WordPress page, post, or block layout.

---

## 1. Summary of Available Shortcodes

| Shortcode | Purpose | Target Audience |
|---|---|---|
| `[nexora_admission_form]` | Embeds the complete online student admission registration form with document uploads. | Prospective Parents / Students |
| `[nexora_inquiry_form]` | Embeds a lightweight prospective inquiry form capturing contact info and grade of interest. | Prospective Parents |
| `[nexora_application_status]` | Embeds a reference tracking lookup tool for applicants to check their admission progress. | Prospective Applicants |
| `[nexora_staff_application_form]` | Embeds a public employment application form with resume/CV upload. | Job Candidates / Faculty Applicants |
| `[nexora_staff_application_status]` | Embeds a status lookup widget for staff candidates to check hiring pipeline status. | Job Candidates |

---

## 2. Detailed Shortcode Reference

### `[nexora_admission_form]`

Renders the full multi-step admission application form.

```text
[nexora_admission_form]
```

#### Supported Attributes
* `class_id` *(optional, integer)*: Pre-selects a specific class or restricts the application form to one grade level (e.g., `[nexora_admission_form class_id="4"]`).
* `session_id` *(optional, integer)*: Explicitly targets a specific academic session ID if multiple sessions are accepting enrollments.
* `redirect_url` *(optional, string)*: Custom thank-you page URL to redirect applicants after successful submission (e.g., `[nexora_admission_form redirect_url="/thank-you/"]`).

---

### `[nexora_inquiry_form]`

Renders a simplified inquiry form suitable for landing pages or sidebar widgets.

```text
[nexora_inquiry_form]
```

#### Supported Attributes
* `redirect_url` *(optional, string)*: Custom URL to redirect after submission.
* `show_notes` *(optional, boolean)*: `true` or `false`. Toggles display of the open message/query textarea field (default: `true`).

---

### `[nexora_application_status]`

Renders an applicant lookup form requiring the **Application Reference Number** and **Applicant Date of Birth** (or registered phone number).

```text
[nexora_application_status]
```

When submitted, it displays:
* Current pipeline stage (*Submitted*, *Under Review*, *Interview Scheduled*, *Accepted*, *Admitted*).
* Important date notices (interview schedule, fee payment deadline).
* Official applicant feedback notes from admissions desk.

---

### `[nexora_staff_application_form]`

Renders the teacher and faculty employment application form.

```text
[nexora_staff_application_form]
```

#### Fields Captured
* Personal Information (Full Name, Email, Phone, Address).
* Highest Qualification and Teaching Experience (Years).
* Department of Interest / Target Subject.
* Resume / CV File Upload (PDF, DOCX).
* Cover Letter.

---

### `[nexora_staff_application_status]`

Enables job applicants to track their hiring progress:

```text
[nexora_staff_application_status]
```

---

## 3. Embedding Shortcodes in WordPress

### In Gutenberg Block Editor
1. In your WordPress admin, create or edit a Page (**Pages > Add New Page**).
2. Click the `+` block inserter icon.
3. Search for **Shortcode** and insert the Shortcode block.
4. Paste the desired shortcode (e.g., `[nexora_admission_form]`).
5. Click **Publish** or **Update**.

### In Classic Editor or Page Builders
Paste the shortcode directly into any text, HTML, or shortcode widget element within Elementor, Divi, Beaver Builder, or the Classic WordPress editor.
