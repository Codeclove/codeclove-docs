# SMS & Automated Notifications

Nexora connects with leading SMS gateway providers to send instant automated alerts to parents, students, and faculty for attendance absences, admission milestones, and fee due reminders.

---

## 1. Supported SMS Gateways

Nexora includes native drivers for major international and regional SMS providers:

| Provider | Target Regions | Supported Credentials |
|---|---|---|
| **Twilio** | Global / International | Account SID, Auth Token, From Phone Number / Sender SID |
| **Msg91** | India / Global | Auth Key, Sender ID (6 characters), DLT Template IDs |
| **Fast2SMS** | India | API Key, Sender Route (Quick SMS / DLT Service) |
| **Vonage (Nexmo)** | Global / International | API Key, API Secret, From ID / Phone Number |

---

## 2. Configuring an SMS Gateway

1. Navigate to **Nexora > Settings > Notifications > SMS Gateways** (or **SMS Tab**).
2. Select your active **SMS Driver**:
   * **Twilio:** Enter your Twilio `Account SID`, `Auth Token`, and assigned Twilio `Sender Phone Number`.
   * **Msg91:** Enter your `Auth Key` and approved 6-character `Sender ID`. Configure DLT Flow / Template IDs.
   * **Fast2SMS:** Enter your `API Key` and select the appropriate route (`DLT` or `Quick`).
   * **Vonage:** Enter your `API Key`, `API Secret`, and sender name.
3. Click **Send Test SMS**:
   * Enter a test mobile number with country code.
   * Verify delivery to ensure credentials and balance are active.
4. Click **Save Gateway Settings**.

---

## 3. Automated Notification Triggers

Configure which operational events trigger automated SMS messages:

In **Nexora > Settings > Notifications**, toggle individual event rules and customize message templates:

### 1. Daily Student Absence Alert
* **Trigger:** When a student is marked *Absent* during daily attendance.
* **Recipient:** Primary Guardian mobile number.
* **Default Template:**
  ```text
  Dear Parent, your ward {student_name} was marked absent today ({date}) in {class_name} - {section_name}. Please contact the school office if this was unexpected.
  ```

### 2. Admission Application Received & Status Updates
* **Trigger:** When an applicant submits an online admission form, or when their status changes (e.g., Interview Scheduled, Accepted).
* **Recipient:** Applicant / Parent mobile number.
* **Default Template:**
  ```text
  Dear Applicant, your admission application for {student_name} has been received. Your Reference ID is {app_reference}. Track your status at {tracking_url}.
  ```

### 3. Fee Invoice Generated & Due Reminder
* **Trigger:** When new term invoices are generated, or X days before invoice due date.
* **Recipient:** Primary Guardian mobile number.
* **Default Template:**
  ```text
  Dear Parent, the fee invoice {invoice_number} of {currency} {amount} for {student_name} is due on {due_date}. Please clear dues to avoid late fees.
  ```

### 4. Payment Receipt Confirmation
* **Trigger:** When a fee payment is recorded by the cashier or paid online.
* **Recipient:** Primary Guardian mobile number.
* **Default Template:**
  ```text
  Dear Parent, payment of {currency} {paid_amount} for {student_name} against Invoice {invoice_number} has been received with thanks. Receipt Ref: {receipt_number}.
  ```

---

## 4. In-App Announcements

Publish internal school notices to staff and faculty dashboards:

1. Navigate to **Nexora > Dashboard > Announcements** (or **Notice Board**).
2. Click **Create Announcement**.
3. Fill in announcement details:
   * **Title:** e.g., `Upcoming Annual Sports Day Schedule`.
   * **Message Body:** Rich text announcement.
   * **Target Audience:** `All Staff`, `Teachers Only`, or `Administrators Only`.
   * **Publish Date & Expiration Date:** Scheduled visibility window.
4. Click **Publish Announcement**.

---

## Next Steps

Configure school profile defaults and custom numbering formats in [Settings & Identifiers](/nexora/settings-identifiers).
