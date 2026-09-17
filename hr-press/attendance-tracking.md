# Attendance Tracking

Track daily employee work hours, web clock-in/out timestamps, late arrivals, and monthly timesheets.

---

## 1. Web Clock-In & Clock-Out

Employees can log their daily attendance through two interfaces:

### A. Front-End Self-Service Portal
Embed the attendance widget on any WordPress page using the shortcode:
```text
[hrp_attendance]
```
1. The employee logs in with their WordPress account.
2. The widget displays the current server time and the employee's assigned shift.
3. The employee clicks **Clock In**.
4. At the end of the shift, the employee clicks **Clock Out**.

### B. WordPress Dashboard Widget
Logged-in employees with the `Employee` role can also clock in and out from the HR Press dashboard widget inside `/wp-admin`.

---

## 2. Daily Attendance Logs & Statuses

Administrators and HR managers view live daily records in **HR Press > Attendances**:

| Status | Code | Description |
|---|---|---|
| **Present** | `P` | Employee clocked in within the shift start time and grace period |
| **Late** | `L` | Employee clocked in after the grace period threshold |
| **Half-Day** | `HD` | Total working hours fell between half-day and full-day minimums |
| **On Leave** | `OL` | Employee has an approved leave request for the date |
| **Absent** | `A` | Employee failed to clock in on a scheduled working day |
| **Holiday** | `H` | Scheduled company holiday |

---

## 3. Manual Attendance Adjustments (Admin Override)

If an employee forgot to clock in or had technical issues:

1. Navigate to **HR Press > Attendances**.
2. Select the target **Date** and **Employee**.
3. Click **Add Attendance** (or **Edit** on an existing log).
4. Enter Clock-In time, Clock-Out time, and select status (`Present`, `Late`, `Half-Day`, `Excused`).
5. Add an audit note explaining the manual adjustment.
6. Click **Save Attendance**.

---

## 4. Monthly Attendance Timesheets

1. Navigate to **HR Press > Attendances > Monthly Timesheet**.
2. Select **Month**, **Year**, and optional **Department**.
3. An interactive matrix displays day-by-day attendance for every employee with totals:
   * Total Working Days
   * Days Present
   * Days Late
   * Days on Leave
   * Days Absent
   * Total Productive Hours Worked
4. Click **Export Timesheet** to generate a CSV or printable report for payroll.

---

## Next Steps

Generate salary slips and manage compensation in [Payroll & Payslips](/hr-press/payroll).
