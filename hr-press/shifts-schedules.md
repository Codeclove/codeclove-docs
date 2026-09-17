# Shifts & Work Schedules

Define standard working hours, multiple operational shifts, clock-in grace periods, and late arrival tolerances.

---

## 1. Creating a Work Shift

1. Navigate to **HR Press > Shifts** (or **Work Schedules**).
2. Click **Add Shift**.
3. Configure the shift parameters:
   * **Shift Name:** e.g., `General Day Shift`, `Morning Shift`, `Night Shift`, `Flexible Hours`.
   * **Shift Code:** e.g., `SHIFT-GEN`, `SHIFT-MORN`.
   * **Start Time:** e.g., `09:00 AM`.
   * **End Time:** e.g., `05:00 PM` (or `17:00`).
   * **Total Scheduled Hours:** Auto-calculated (e.g., `8.0 hours`).
   * **Grace Period (Minutes):** e.g., `15 minutes`. Employees clocking in between `09:00 AM` and `09:15 AM` are marked *Present on Time*.
   * **Late Mark Threshold (Minutes):** Clock-ins after the grace period (e.g., after `09:15 AM`) are automatically tagged as *Late Arrival*.
   * **Half-Day Threshold:** Define minimum hours required to receive half-day credit (e.g., `4 hours`).
4. Click **Save Shift**.

---

## 2. Assigning Shifts to Employees

* **Default Shift:** Set in **HR Press > Settings > General** to apply automatically to all new employees.
* **Individual Assignment:** In an employee's profile (**HR Press > Employees > Edit**), override the default shift with a specific schedule.
* **Department Assignment:** Assign a shift to an entire department in bulk.

---

## 3. Overnight / Night Shifts

For shifts spanning past midnight (e.g., `10:00 PM` to `06:00 AM`):
* Toggle **Overnight Shift**.
* HR Press binds clock-out timestamps to the starting date of the shift to ensure accurate total work hour calculations.

---

## Next Steps

Set up non-working days and holidays in [Holiday Calendars](/hr-press/holidays).
