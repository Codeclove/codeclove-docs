# Leave Management

Configure leave categories, assign annual quotas, manage employee time-off applications, and track balances.

---

## 1. Creating Leave Types

1. Navigate to **HR Press > Leaves > Leave Types**.
2. Click **Add Leave Type**.
3. Configure policy parameters:
   * **Leave Type Name:** e.g., `Paid Time Off (PTO)`, `Sick Leave`, `Casual Leave`, `Maternity Leave`, `Paternity Leave`, `Compensatory Off`.
   * **Leave Code:** e.g., `PTO`, `SL`, `CL`.
   * **Days Allowed (Annual Quota):** Total days allocated per calendar or fiscal year (e.g., `18 days`).
   * **Carry Forward:** Allow unused leave days to carry forward to the next year.
   * **Max Carry Forward Days:** e.g., `5 days`.
   * **Paid / Unpaid:** Toggle whether salary is deducted for this leave type.
   * **Requires Approval:** Set whether requests require manager/admin sign-off.
   * **Gender Specific:** Restrict eligibility (e.g., *Female Only* for Maternity Leave).
4. Click **Save Leave Type**.

---

## 2. Employee Leave Applications

Employees can apply for leave through the WordPress admin or the front-end employee portal:

1. In the employee portal or **HR Press > Leaves > Apply Leave**:
2. Select **Leave Type**.
3. Choose **Start Date** and **End Date** (or toggle **Half-Day** with morning/afternoon selection).
4. Enter the reason for absence.
5. Upload optional supporting documents (e.g., medical certificate for sick leave).
6. Click **Submit Application**.

The employee's remaining leave balance for that category is displayed in real-time during submission.

---

## 3. Manager Approval Workflow

When a leave request is submitted:

1. An email notification is sent to the employee's Department Head and HR Administrator.
2. The request appears under **HR Press > Leaves > Leave Requests**.
3. The reviewer examines the request, date span, overlap with other team members, and remaining balance.
4. Actions available:
   * **Approve:** Updates status to *Approved*, deducts days from the employee's balance ledger, and notifies the employee via email.
   * **Reject:** Updates status to *Rejected* with mandatory reason notes.
   * **Cancel:** Allows administrators to cancel an approved leave if the employee returns to work early.

---

## 4. Leave Balance Ledger & Reports

1. Navigate to **HR Press > Leaves > Balances**.
2. Filter by department or employee to review:
   * Total Allotted Days
   * Days Used
   * Pending Requests
   * Remaining Available Balance
3. Export complete leave ledger summaries via CSV.

---

## Next Steps

Learn how clock-ins and daily logs operate in [Attendance Tracking](/hr-press/attendance-tracking).
