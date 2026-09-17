# Shortcode Reference

HR Press Pro includes shortcodes to embed employee portals, clock-in widgets, leave application forms, and holiday calendars on any WordPress page or post.

---

## 1. Master Employee Self-Service Dashboard

Embed the full employee self-service portal on a dedicated page (e.g., `/employee-portal/`):

```text
[hrp_dashboard]
```

### What It Displays
* **Personal Profile Summary:** Employee details, department, designation, and reporting manager.
* **Attendance Widget:** Live server time with interactive **Clock In** and **Clock Out** buttons.
* **Leave Balances:** Visual cards showing allotted, consumed, and remaining days for each leave category.
* **Recent Announcements:** Company-wide and department notices.
* **Upcoming Holidays:** Next 5 scheduled company holidays.
* **Payslip Archive:** View and download past generated monthly payslips.

::: info Access Control
Only logged-in WordPress users linked to an active HR Press employee record can view their dashboard. Guests are presented with a standard login prompt.
:::

---

## 2. Dedicated Attendance Clock-In Widget

Embed a standalone clock-in/out box:

```text
[hrp_attendance]
```

* **Attributes:**
  * `show_hours="yes|no"`: Display total accumulated shift hours in real time (Default: `yes`).
  * `redirect_url=""`: URL to redirect after clocking in/out (optional).

---

## 3. Leave Application Form & Status

Embed a dedicated leave application form:

```text
[hrp_leaves]
```

* **Attributes:**
  * `show_balance="yes|no"`: Display remaining leave quota badges above the form (Default: `yes`).

---

## 4. Holiday Calendar Widget

Display the official company holiday list:

```text
[hrp_holidays]
```

* **Attributes:**
  * `year="2026"`: Filter holidays for a specific year (Default: current year).
  * `limit="10"`: Number of upcoming holidays to display.
