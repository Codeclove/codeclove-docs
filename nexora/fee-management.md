# Fee Management & Invoicing

Create fee types, assign fee structures to classes, generate batch invoices, record payments, and track overdue balances.

---

## 1. Finance Overview Dashboard

The Finance Dashboard shows real-time billing totals for the current academic session:

1. Navigate to **Nexora > Finance > Dashboard**.
2. Real-time metric cards display:
   * **Total Invoiced:** Cumulative value of all bills issued in the current academic session.
   * **Total Collected:** Total revenue received and reconciled.
   * **Outstanding Dues:** Pending balances awaiting payment.
   * **Overdue Defaulters:** Number of students with past-due unpaid balances.
3. Recent transactions table and class-wise collection breakdowns highlight collection performance.

---

## 2. Defining Fee Types (Fee Heads)

Fee types represent individual categories of charges:

1. Navigate to **Nexora > Finance > Fee Types**.
2. Click **Add Fee Type**.
3. Configure fee head parameters:
   * **Fee Type Name:** e.g., `Tuition Fee`, `Admission Fee`, `Laboratory & Computer Fee`, `Library Fee`, `Transportation Fee`, `Examination Fee`.
   * **Fee Code:** Short code (e.g., `TUIT-01`, `LAB-01`).
   * **Description:** Optional details describing the charge.
4. Click **Save Fee Type**.

---

## 3. Creating Fee Structures

Group multiple fee types together and assign them to specific classes with scheduled payment dates:

1. Navigate to **Nexora > Finance > Fee Structures** (or **Fee Plans**).
2. Click **Create Fee Structure** (e.g., `Class 9 Annual Fee Structure 2026-2027`).
3. Select the target **Class(es)** this fee structure applies to.
4. Add line-item fee types and enter the exact amount for each:
   * `Tuition Fee`: $500.00
   * `Computer Lab Fee`: $75.00
   * `Library Fee`: $25.00
5. Configure payment schedule:
   * **Payment Frequency:** `One-time (Annual)`, `Term-wise (Term 1 / Term 2)`, `Quarterly`, or `Monthly`.
   * **Due Date:** Specify the deadline date for each installment.
   * **Late Fee Penalty (Optional):** Define flat late fees or daily overdue fines applied after the due date.
6. Click **Save Fee Structure**.

---

## 4. Generating Invoices

Invoices can be generated in bulk for entire classes or created individually for specific students.

### Generating Batch Invoices (Class-wide)
1. Navigate to **Nexora > Finance > Invoices**.
2. Click **Generate Batch Invoices**.
3. Select the **Academic Session**, **Class**, and the assigned **Fee Structure / Term**.
4. Review the student preview list.
5. Click **Generate Invoices**. Nexora creates individualized invoices with unique invoice numbers (e.g., `NX-INV-2026-0412`) for all active students in that class.

### Creating a Single Invoice
1. In **Nexora > Finance > Invoices**, click **Create Single Invoice**.
2. Select the **Student** (search by name or admission number).
3. Add customized fee line items or select a pre-defined fee structure.
4. Set the **Due Date** and click **Create Invoice**.

---

## 5. Recording Fee Payments

When a parent or student pays fees, record the transaction in the system:

1. Navigate to **Nexora > Finance > Invoices** (or **Payments > Record Payment**).
2. Locate the invoice by searching student name, admission number, or invoice number.
3. Click **Record Payment**.
4. Fill in transaction details:
   * **Amount Paid:** Enter full payment or partial payment amount.
   * **Payment Method:** `Cash`, `Cheque / Check`, `Bank Transfer / NEFT`, `UPI`, `Credit / Debit Card`, or `Online Gateway`.
   * **Transaction / Reference Number:** e.g., Cheque number or bank reference code.
   * **Payment Date:** Defaults to today.
   * **Notes / Remarks:** Optional cashier notes.
5. Click **Submit Payment**.

---

## 6. Official Printable Receipts & Letterheads

Upon recording a payment, Nexora generates an official payment receipt:

1. On the payment confirmation screen (or from **Nexora > Finance > Payments**), click **Print Receipt**.
2. The receipt includes:
   * Official school letterhead and logo from **Settings**.
   * Receipt number and invoice reference.
   * Student name, admission number, class, and section.
   * Itemized fee breakdown and paid amount.
   * Outstanding balance remaining (for partial payments).
   * Cashier signature line and date stamp.
3. Click **Print** or **Save as PDF** to hand over to parents or email automatically.

---

## 7. Defaulters & Arrears Reporting

Track unpaid student accounts and follow up on pending dues:

1. Navigate to **Nexora > Finance > Defaulters** (or **Defaulters Report**).
2. Filter the report by:
   * **Class & Section**
   * **Minimum Overdue Days** (e.g., overdue by 15+ days, 30+ days)
   * **Minimum Balance Amount**
3. The report displays student names, primary guardian phone numbers, total invoice amount, amount paid, and net balance due.
4. Click **Export Defaulters (CSV/PDF)** or click **Send SMS Reminder** to dispatch bulk due-payment alerts to all selected guardians.

---

## Next Steps

Configure automated SMS reminders and gateway integrations in [SMS & Automated Notifications](/nexora/notifications-sms).
