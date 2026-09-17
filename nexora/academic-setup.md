# Academic Setup & Board Presets

Configure your institution's academic structure, including academic sessions (years), terms, grade levels (classes), sections (homerooms), and curriculum subjects.

---

## 1. Academic Sessions (Years)

Nexora manages all students, attendance logs, timetables, and fee invoices within designated academic sessions.

### Adding an Academic Session

1. Navigate to **Nexora > Academics > Sessions**.
2. Click **Add New Session**.
3. Enter the session parameters:
   * **Session Title:** e.g., `2026-2027` or `2026-2027 Academic Year`.
   * **Start Date:** e.g., `April 1, 2026` (or `August 1, 2026` for US/UK cycles).
   * **End Date:** e.g., `March 31, 2027` (or `June 30, 2027`).
   * **Set as Current Session:** Toggle this switch to make this the active operational year.
4. Click **Save Session**.

### Switching the Active Session

The global header in the Nexora dashboard includes a **Session Selector**. 

* The selector switches between sessions. Past sessions open in read-only mode to prevent accidental modifications.

---

## 2. Academic Terms (Semesters / Quarters)

Subdivide your academic session into grading and billing intervals:

1. Navigate to **Nexora > Academics > Sessions**, and select your active session.
2. Under the **Terms** tab, click **Add Term**.
3. Configure the term details:
   * **Term Name:** e.g., `Term 1`, `Term 2`, `Semester 1`, or `Quarter 1`.
   * **Start Date & End Date:** Define the date boundaries for attendance and exam calculations.
4. Click **Save Term**.

---

## 3. Country & Board Presets

Nexora includes pre-built education templates for regional boards:

| Preset | Target System | Default Grade Hierarchy | Term Pattern |
|---|---|---|---|
| **India (CBSE / ICSE / State)** | Indian School Education | Nursery, LKG, UKG, Class 1 to Class 12 (Science, Commerce, Arts streams) | April to March (2 Terms) |
| **United States (K-12)** | US Elementary, Middle, High | Pre-K, Kindergarten, Grade 1 to Grade 12 | August to June (Semesters / Quarters) |
| **United Kingdom (National)** | UK Primary & Secondary | Reception, Year 1 to Year 13 (Key Stages 1 to 5) | September to July (3 Terms) |
| **Custom** | Independent / International | Fully customizable grade naming and structures | User-defined |

### Applying a Board Preset

1. Navigate to **Nexora > Settings > Education System**.
2. Under **Country Preset**, select **India**, **United States**, **United Kingdom**, or **Custom**.
3. Choose the **Apply Mode**:
   * *Apply missing defaults:* Adds recommended grade units without modifying existing classes.
   * *Replace defaults:* Initializes the recommended structure for new setups.
4. Click **Apply Preset**.

::: info Non-Destructive Presets
Switching or updating a preset changes terminology labels and defaults only. It does not delete existing student rosters, attendance records, or financial transactions.
:::

---

## 4. Classes (Academic Units)

If you prefer manual configuration or need to customize your grade levels:

1. Navigate to **Nexora > Academics > Classes**.
2. Click **Add Class**.
3. Fill in the class details:
   * **Class Name:** e.g., `Class 9`, `Grade 9`, or `Year 9`.
   * **Class Code / Identifier:** e.g., `CLS-09`.
   * **Order / Sequence:** Position of the class in dropdowns and reports.
4. Click **Save Class**.

---

## 5. Sections (Academic Groups)

Subdivide classes into individual classroom sections or homerooms:

1. In **Nexora > Academics > Classes**, click on a specific class (or navigate to **Sections**).
2. Click **Add Section**.
3. Configure section parameters:
   * **Section Name:** e.g., `Section A`, `Section B`, or `Homeroom 101`.
   * **Capacity:** Maximum student limit (e.g., `40`). Helps enforce enrollment caps during admissions.
   * **Class Teacher:** Assign a faculty member from your staff directory as the primary homeroom mentor.
   * **Room / Hall:** Assign the physical classroom location.
4. Click **Save Section**.

---

## 6. Subjects & Course Allocation

1. Navigate to **Nexora > Academics > Subjects**.
2. Click **Add Subject**.
3. Enter subject parameters:
   * **Subject Name:** e.g., `Mathematics`, `English Literature`, `Computer Science`.
   * **Subject Code:** e.g., `MATH-101`.
   * **Subject Type:** `Core (Mandatory)` or `Elective (Optional)`.
4. Under **Class Assignment**, select which classes take this subject and assign the respective subject teacher.
5. Click **Save Subject**.

---

## Next Steps

With your academic hierarchy established, set up your daily schedule in [Timetable & Substitution](/nexora/timetable) or start accepting applications in [Student Admissions](/nexora/admissions).
