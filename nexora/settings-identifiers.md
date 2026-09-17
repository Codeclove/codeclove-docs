# Settings, Identifiers & Localization

Configure school identity, custom numbering sequences for student and financial records, localization preferences, and system diagnostics.

---

## 1. General School Profile

Store institution-level metadata used across student ID cards, invoices, receipts, and public admission forms:

1. Navigate to **Nexora > Settings > General**.
2. Configure profile fields:
   * **School Name:** Official institution name (e.g., *St. Jude International Academy*).
   * **School Code / Affiliation Number:** e.g., *CBSE/AFF/10304* or *DCS-092*.
   * **School Logo:** Upload high-resolution logo (PNG/SVG) rendered in dashboard headers, receipts, and ID badges.
   * **Official Letterhead:** Upload header/footer graphic for printed documents.
   * **Contact Information:** Primary school email, telephone, emergency helpline, and website URL.
   * **Campus Address:** Complete physical address rendered on printable tax invoices.
3. Click **Save General Settings**.

---

## 2. Custom Numbering Sequences (Identifiers)

Nexora gives administrators precise control over how automatic reference codes, admission numbers, student IDs, employee IDs, and invoice numbers are structured:

1. Navigate to **Nexora > Settings > Identifiers**.
2. Configure numbering patterns for each record type:

| Identifier Type | Token Structure Example | Sample Output | Purpose |
|---|---|---|---|
| **Application Reference** | `NX-APP-{YYYY}-{####}` | `NX-APP-2026-0001` | Temporary tracking number for online admission applicants |
| **Staff Application Ref** | `NX-STF-{YYYY}-{####}` | `NX-STF-2026-0001` | Candidate tracking number for job applicants |
| **Admission Number** | `NX-ADM-{YYYY}-{####}` | `NX-ADM-2026-0105` | Permanent school admission identity generated upon conversion |
| **Student Number** | `NX-STU-{YYYY}-{####}` | `NX-STU-2026-0105` | Internal student profile code |
| **Staff / Employee ID** | `NX-EMP-{YYYY}-{####}` | `NX-EMP-2026-0012` | Official employee ID badge code |
| **Invoice Number** | `NX-INV-{YYYY}-{####}` | `NX-INV-2026-0412` | Official billing receipt and invoice number |

### Configuration Parameters
* **Prefix:** Custom text prefix (e.g., `SJA-`, `DPS-`, `INV-`).
* **Year Token:** `{YYYY}` for 4-digit year (e.g., `2026`) or `{YY}` for 2-digit year (e.g., `26`).
* **Sequence Padding:** `{####}` defines leading zero padding (e.g., `{####}` produces `0001`, `{###}` produces `001`).
* **Next Sequence Number:** Starting index counter (e.g., start sequence at `1001`).
* **Annual Reset:** Toggle whether numbering sequences reset to 1 automatically at the start of a new academic session.
3. Click **Save Identifier Settings**.

---

## 3. Localization & Currency Settings

Ensure date formats, currency symbols, and timezones align with your regional operations:

1. Navigate to **Nexora > Settings > Localization**.
2. Configure regional preferences:
   * **Base Currency:** Select your operating currency (e.g., `USD ($)`, `INR (₹)`, `GBP (£)`, `EUR (€)`, `AED`, `CAD`).
   * **Currency Position:** Display symbol before amount (`$500`) or after amount (`500 USD`).
   * **Decimal Precision:** Number of decimal places for fee transactions (e.g., `2` for `$500.00` or `0` for whole integers).
   * **Date Format:** Select standard regional notation:
     * `DD/MM/YYYY` (e.g., 31/03/2026)
     * `MM/DD/YYYY` (e.g., 03/31/2026)
     * `YYYY-MM-DD` (e.g., 2026-03-31)
   * **Time Format:** `12-hour (AM/PM)` or `24-hour`.
   * **First Day of Week:** `Monday` or `Sunday`.
   * **RTL Layout Mode:** Enable right-to-left UI rendering for Arabic, Hebrew, or Urdu environments.
3. Click **Save Localization Settings**.

---

## 4. System Maintenance & Diagnostics

1. Navigate to **Nexora > Settings > System**.
2. Monitor core system health:
   * **Schema & Database Version:** Current installed database migration table version.
   * **REST API Health:** Verification that WordPress REST API endpoints are communicating without security plugin blocks.
   * **Cache Clear Tool:** Purge cached transient fee metrics, session caches, and timetable structures.
   * **System Diagnostic Export:** Download anonymized system information report when submitting technical support inquiries to CodeClove.

---

## Next Steps

Review all available frontend embed codes in the [Shortcode Reference](/nexora/shortcodes-reference).
