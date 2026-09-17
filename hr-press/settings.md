# Settings & Email Notifications

Configure company information, working days, email notification triggers, and license keys.

---

## 1. General Company Settings

1. Navigate to **HR Press > Settings > General**.
2. Configure core organization details:
   * **Company Name:** Official business name.
   * **Company Logo:** Upload logo for payslips and portal headers.
   * **Contact Email & Phone:** Primary HR contact info.
   * **Company Address:** Physical address rendered on generated payslips.
   * **Currency:** Select reporting currency (e.g., `USD ($)`, `INR (₹)`, `GBP (£)`, `EUR (€)`).
   * **Timezone:** Match your primary office operational timezone.
3. Click **Save Settings**.

---

## 2. Working Days & Weekends

1. Navigate to **HR Press > Settings > Working Days** (or **Attendance Settings**).
2. Configure standard schedule:
   * **Working Days:** Select active operational days (e.g., *Monday through Friday*).
   * **Non-Working Days / Weekends:** Days unchecked (e.g., *Saturday, Sunday*) are excluded from attendance absence calculations.
3. Click **Save Changes**.

---

## 3. Email Notification Triggers & Templates

HR Press Pro includes built-in email notification workflows:

1. Navigate to **HR Press > Settings > Email Templates**.
2. Available templates:
   * **New Employee Welcome:** Sent when an employee profile/account is created. Contains login URL and username.
   * **Leave Application Received:** Sent to the Department Head when an employee applies for time off.
   * **Leave Status Update:** Sent to the employee when their leave request is Approved or Rejected.
   * **Late Attendance Alert:** Sent to HR/Manager if an employee clocks in after the late tolerance limit.
   * **Payslip Generated:** Sent to the employee with monthly payslip summary details.
3. Custom template merge tags available:
   * `{employee_name}`: Full name of employee.
   * `{leave_type}`: Name of leave requested.
   * `{start_date}` / `{end_date}`: Leave date boundaries.
   * `{company_name}`: Configured organization name.
4. Click **Send Test Email** to verify your WordPress SMTP delivery.

---

## 4. Software License Verification

1. Go to **HR Press > Settings > License**.
2. Enter your CodeClove license key.
3. Click **Activate License** to unlock one-click automatic dashboard updates.

::: info Staging & Local Environments
Activations on `*.test`, `*.local`, `localhost`, and `staging.*` do not count against live site activation limits.
:::
