/* Original practice questions; source references are PDF page numbers. */
window.QUESTION_BANK = [
  {
    "id": "OR100-01",
    "course": "OR100",
    "topic": "Case and log",
    "pages": [
      17,
      22
    ],
    "prompt": "A procedure has finished. Which record should describe what actually happened in the operating room?",
    "options": [
      "The surgical case",
      "The surgical log",
      "The surgeon preference list",
      "The scheduling block"
    ],
    "correct": [
      1
    ],
    "rationale": "The log records the actual surgical event; the case is the plan. Preference lists organize orders and blocks reserve scheduling time.",
    "kind": "single"
  },
  {
    "id": "OR100-02",
    "course": "OR100",
    "topic": "Case and log",
    "pages": [
      22
    ],
    "prompt": "After a log has been created, a planner changes the surgical case. What is the safe expectation?",
    "options": [
      "The log automatically receives every change",
      "The log must be reviewed separately; case changes do not automatically copy forward",
      "Posting is required to synchronize the two",
      "The case becomes the record of actual care"
    ],
    "correct": [
      1
    ],
    "rationale": "Once the log exists, later case changes do not automatically update it. Posting concerns charges and log closure, not synchronization.",
    "kind": "single"
  },
  {
    "id": "OR100-03",
    "course": "OR100",
    "topic": "Case entry",
    "pages": [
      30,
      40
    ],
    "prompt": "Which set contains only the five programmatically required case details?",
    "options": [
      "Patient, date, surgeon, anesthesia type, location",
      "Patient, location, service, procedure, surgeon",
      "Patient, equipment, date, procedure, service",
      "Surgeon, laterality, patient class, date, location"
    ],
    "correct": [
      1
    ],
    "rationale": "Patient, location, service, procedure, and surgeon are the five required items. Other details may be important or locally required but are not this five-item set.",
    "kind": "single"
  },
  {
    "id": "OR100-04",
    "course": "OR100",
    "topic": "Scheduling",
    "pages": [
      48,
      63
    ],
    "prompt": "A scheduler needs to locate cases that have not yet been placed on the schedule. Where should they begin?",
    "options": [
      "Post Charges",
      "Depot",
      "LDA Avatar",
      "Chart Review"
    ],
    "correct": [
      1
    ],
    "rationale": "The Depot holds unscheduled cases. Post Charges supports charge posting; the other activities do not serve as the unscheduled-case queue.",
    "kind": "single"
  },
  {
    "id": "OR100-05",
    "course": "OR100",
    "topic": "Scheduling",
    "pages": [
      51,
      63
    ],
    "prompt": "A patient decides not to undergo a correctly created planned procedure. Which action fits this situation?",
    "options": [
      "Void the case as an entry error",
      "Cancel the case",
      "Shuffle the case",
      "Swap it with another case"
    ],
    "correct": [
      1
    ],
    "rationale": "Cancel is appropriate when the planned procedure will not happen. Void is for a case created in error; shuffle and swap rearrange scheduling.",
    "kind": "single"
  },
  {
    "id": "OR100-06",
    "course": "OR100",
    "topic": "Scheduling",
    "pages": [
      63
    ],
    "prompt": "A duplicate case was accidentally created. Which action best represents the error?",
    "options": [
      "Cancel the intended procedure",
      "Trigger its charges",
      "Void the duplicate case",
      "Post the duplicate log"
    ],
    "correct": [
      2
    ],
    "rationale": "Void identifies a case created in error. Cancel refers to a planned procedure that will not occur; charge actions do not correct duplicate case entry.",
    "kind": "single"
  },
  {
    "id": "OR100-07",
    "course": "OR100",
    "topic": "Orders",
    "pages": [
      41,
      84
    ],
    "prompt": "An authorized order is held for a later phase. What makes that Signed & Held order active?",
    "options": [
      "Adding a preference card",
      "Releasing the order",
      "Posting the log",
      "Creating a scheduling block"
    ],
    "correct": [
      1
    ],
    "rationale": "Releasing a Signed & Held order makes it active. Cards, blocks, and posting do not replace release.",
    "kind": "single"
  },
  {
    "id": "OR100-08",
    "course": "OR100",
    "topic": "Orders",
    "pages": [
      41
    ],
    "prompt": "Which factors does the course identify for assigning the default signing action to an order? Select all that apply.",
    "options": [
      "The intended phase of care",
      "The patient location",
      "The number of preference cards",
      "The inventory manufacturer"
    ],
    "correct": [
      0,
      1
    ],
    "rationale": "The system uses phase of care and patient location to determine whether an order is for now or later. Card count and manufacturer do not drive this decision.",
    "kind": "multiple"
  },
  {
    "id": "OR100-09",
    "course": "OR100",
    "topic": "Navigators",
    "pages": [
      83,
      84
    ],
    "prompt": "Before leaving a perioperative phase, a nurse wants to confirm required documentation is complete. Which navigator section is the best fit?",
    "options": [
      "Verify",
      "Case Request",
      "Calendar",
      "Resource Sidebar"
    ],
    "correct": [
      0
    ],
    "rationale": "Verify supports confirmation of required documentation. The scheduling and case-request tools serve different workflows.",
    "kind": "single"
  },
  {
    "id": "OR100-10",
    "course": "OR100",
    "topic": "Procedure Pass",
    "pages": [
      71,
      83
    ],
    "prompt": "A nurse wants to focus on pre-surgical tasks assigned to their role. Which approach is most direct?",
    "options": [
      "Use the Tasks section grouped by role",
      "Post the log to filter the tasks",
      "Remove the case from the schedule",
      "Open a surgeon preference list"
    ],
    "correct": [
      0
    ],
    "rationale": "Procedure Pass tasks can be grouped by role. Posting, unscheduling, and order preference lists do not provide that task view.",
    "kind": "single"
  },
  {
    "id": "OR100-11",
    "course": "OR100",
    "topic": "Preference tools",
    "pages": [
      40,
      49,
      114
    ],
    "prompt": "A surgeon wants to place several related orders together during one ordering session. Which tool fits?",
    "options": [
      "Order set",
      "Preference card",
      "OR block",
      "Surgical log"
    ],
    "correct": [
      0
    ],
    "rationale": "An order set groups related orders for ordering. A preference card configures surgical preferences; a block reserves time; a log records actual surgery.",
    "kind": "single"
  },
  {
    "id": "OR100-12",
    "course": "OR100",
    "topic": "Inventory",
    "pages": [
      104,
      105
    ],
    "prompt": "Which items belong to the pick-list content described in the course? Select all that apply.",
    "options": [
      "Medications",
      "Supplies",
      "Named circulating nurses",
      "Individually assigned equipment"
    ],
    "correct": [
      0,
      1
    ],
    "rationale": "Pick lists contain medication and inventory needs. Staff and equipment assignments are resource concepts, not those pick-list contents.",
    "kind": "multiple"
  },
  {
    "id": "OR100-13",
    "course": "OR100",
    "topic": "Inventory",
    "pages": [
      105
    ],
    "prompt": "Compared with supply documentation, what additional information is characteristic of implant tracking?",
    "options": [
      "Only the number of scheduled cases",
      "Implant action, serial number, and expiration date",
      "Only the surgeon login password",
      "Only the scheduling block owner"
    ],
    "correct": [
      1
    ],
    "rationale": "Implants require additional tracking such as action, serial number, and expiration date. Both supplies and implants can also require used and wasted quantities.",
    "kind": "single"
  },
  {
    "id": "OR100-14",
    "course": "OR100",
    "topic": "Flowsheets",
    "pages": [
      122,
      123
    ],
    "prompt": "A nurse sees device values waiting to be filed. Why should those values be validated?",
    "options": [
      "To review accuracy before filing to the chart",
      "To automatically post the surgical log",
      "To create a new preference card",
      "To change the patient service"
    ],
    "correct": [
      0
    ],
    "rationale": "Validation lets the clinician review device values before they enter the chart and avoids filing unnecessary data. It is not a charge-posting or scheduling function.",
    "kind": "single"
  },
  {
    "id": "OR100-15",
    "course": "OR100",
    "topic": "Charging",
    "pages": [
      135,
      136
    ],
    "prompt": "Some charges are ready, but further documentation is expected. Which action can send ready charges while leaving the log open?",
    "options": [
      "Post the log",
      "Trigger charges",
      "Void the case",
      "Cancel the surgery"
    ],
    "correct": [
      1
    ],
    "rationale": "Triggering sends eligible charges while keeping the log open. Posting closes the log and later changes require an addendum.",
    "kind": "single"
  },
  {
    "id": "OR100-16",
    "course": "OR100",
    "topic": "Reporting",
    "pages": [
      152
    ],
    "prompt": "A team wants a custom list of last month’s logs missing incision closure documentation. Which reporting tool is the course’s best fit?",
    "options": [
      "Reporting Workbench",
      "A scheduling block",
      "An order set",
      "A preference card"
    ],
    "correct": [
      0
    ],
    "rationale": "Reporting Workbench supports this custom operational report. Blocks, order sets, and cards are configuration/workflow tools, not the reporting mechanism.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-01",
    "course": "CLN251-252",
    "topic": "Data structure",
    "pages": [
      40,
      41
    ],
    "prompt": "In Chronicles terminology, an office visit within a patient record is best understood as which component?",
    "options": [
      "A master file",
      "A contact",
      "An INI",
      "A security point"
    ],
    "correct": [
      1
    ],
    "rationale": "A contact holds data for a particular encounter or time within a record. The master file groups records; a security point grants functionality.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-02",
    "course": "CLN251-252",
    "topic": "Data structure",
    "pages": [
      41
    ],
    "prompt": "An analyst finds a wrong value while using Record Viewer. What can they do in that activity?",
    "options": [
      "View the value, then use an appropriate editing tool to change it",
      "Edit any item directly",
      "Change the record’s security class by typing over the value",
      "Delete the underlying contact"
    ],
    "correct": [
      0
    ],
    "rationale": "Record Viewer is read-only. Identifying an item there does not make it an editing or deletion tool.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-03",
    "course": "CLN251-252",
    "topic": "Reports",
    "pages": [
      66
    ],
    "prompt": "Every user of a shared report needs the same added information. What is the efficient approach described by the course?",
    "options": [
      "Always create one report per user",
      "Edit the existing shared report when appropriate",
      "Replace every print group with a role",
      "Create a new provider record"
    ],
    "correct": [
      1
    ],
    "rationale": "When all consumers need a change, editing the shared record avoids unnecessary copies. Roles and providers do not replace report build.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-04",
    "course": "CLN251-252",
    "topic": "Reports",
    "pages": [
      66
    ],
    "prompt": "What reusable components make up an LRP report?",
    "options": [
      "LPG print groups",
      "ECL security points",
      "EMP user templates",
      "ORT charge settings"
    ],
    "correct": [
      0
    ],
    "rationale": "LRP reports are composed of LPG print groups. The other records control security, shared user configuration, and charging.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-05",
    "course": "CLN251-252",
    "topic": "Profiles",
    "pages": [
      106
    ],
    "prompt": "A user can enter an activity but sees the wrong options inside it. Which type of configuration is the strongest first lead?",
    "options": [
      "Profile",
      "Password policy",
      "Provider referral address",
      "Inventory balance"
    ],
    "correct": [
      0
    ],
    "rationale": "Profiles configure options inside activities. Security controls access; the other options do not configure those activity details.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-06",
    "course": "CLN251-252",
    "topic": "Profiles",
    "pages": [
      77,
      78,
      106
    ],
    "prompt": "For an ordinary profile item, both department and EMR System Definitions profiles supply a value. Which wins?",
    "options": [
      "The department value",
      "The system value",
      "Both values are always appended",
      "Whichever was edited last"
    ],
    "correct": [
      0
    ],
    "rationale": "Department is more specific in the profile hierarchy. Compilation uses specificity, not edit time or automatic merging.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-07",
    "course": "CLN251-252",
    "topic": "Profiles",
    "pages": [
      80,
      81
    ],
    "prompt": "A more-specific profile supplies one entry for an ordinary multiple-response item. A general profile has three entries. What should the builder normally expect?",
    "options": [
      "All four entries merge",
      "The more-specific set replaces the general set",
      "The general set always wins",
      "The item becomes blank"
    ],
    "correct": [
      1
    ],
    "rationale": "Ordinary multiple-response items are all-or-nothing at the selected level. Some items have special behavior, so field help matters; automatic merging is not the general rule.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-08",
    "course": "CLN251-252",
    "topic": "Profiles",
    "pages": [
      79
    ],
    "prompt": "Where should a builder generally start settings that apply to the widest population?",
    "options": [
      "At the most general appropriate level",
      "In a separate user profile for each employee",
      "At whichever record has the newest contact",
      "Only in the provider record"
    ],
    "correct": [
      0
    ],
    "rationale": "Start broad, then configure exceptions at more-specific levels. This reduces duplicate settings and maintenance.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-09",
    "course": "CLN251-252",
    "topic": "Workflow Engine",
    "pages": [
      135
    ],
    "prompt": "The Workflow Engine rule selected through a compiled profile does not match an encounter. Does the system automatically try a lower-level profile’s rule?",
    "options": [
      "Yes, until every profile is exhausted",
      "No; only the selected compiled-profile rule is used",
      "Yes, but only after posting charges",
      "Only if the user has multiple provider records"
    ],
    "correct": [
      1
    ],
    "rationale": "There is no automatic fallback through other profile-level Workflow Engine rules when conditions do not match.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-10",
    "course": "CLN251-252",
    "topic": "Workflow Engine",
    "pages": [
      135
    ],
    "prompt": "A directive executes and has no Continue afterwards setting. What happens to later conditions in that rule?",
    "options": [
      "They are not evaluated after that directive",
      "They always all run",
      "They merge into the user role",
      "They become security points"
    ],
    "correct": [
      0
    ],
    "rationale": "Without continuation, rule evaluation stops after executing the directive. Roles and security are unrelated to that control flow.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-11",
    "course": "CLN251-252",
    "topic": "Navigators",
    "pages": [
      152
    ],
    "prompt": "Which ordering describes navigator structure from broadest to most specific?",
    "options": [
      "Section → topic → template",
      "Template → topic → section",
      "Report → role → section",
      "Profile → security point → contact"
    ],
    "correct": [
      1
    ],
    "rationale": "Navigator templates contain topics, which contain sections. These are different types of LVN records, not different master files.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-12",
    "course": "CLN251-252",
    "topic": "Roles",
    "pages": [
      169
    ],
    "prompt": "A user has three startup activities, two patient workspaces, and one preference-list composer open. How many workspaces count in the course example?",
    "options": [
      "Six",
      "Five",
      "Four",
      "Three"
    ],
    "correct": [
      2
    ],
    "rationale": "Startup activities collectively count as one workspace. Add the two patient workspaces and the composer: four total.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-13",
    "course": "CLN251-252",
    "topic": "Roles and security",
    "pages": [
      169,
      182
    ],
    "prompt": "Which configuration pairs are correct? Select all that apply.",
    "options": [
      "Role: layout and behavior on login",
      "Security class: permitted functionality",
      "Profile: options within activities",
      "Provider record: every user’s startup workspace limit"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "rationale": "Roles govern layout/behavior, security grants access, and profiles supply activity details. Workspace limits belong to roles, not provider records.",
    "kind": "multiple"
  },
  {
    "id": "CLN251-252-14",
    "course": "CLN251-252",
    "topic": "Security",
    "pages": [
      182
    ],
    "prompt": "In the course’s security model, which types are identified for every user? Select all that apply.",
    "options": [
      "In Basket",
      "Reporting Workbench",
      "Shared",
      "Inpatient"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "rationale": "In Basket, Reporting Workbench, and Shared apply to every user in the course model. Inpatient is for hospital clinical tools rather than every user.",
    "kind": "multiple"
  },
  {
    "id": "CLN251-252-15",
    "course": "CLN251-252",
    "topic": "Providers and users",
    "pages": [
      203,
      204
    ],
    "prompt": "A community physician receives referrals but never logs in to your Epic system. Which record may still be needed?",
    "options": [
      "A provider record without a user login",
      "Only a user template",
      "Only a charge profile",
      "A new report for each referral"
    ],
    "correct": [
      0
    ],
    "rationale": "SER can represent a referring or referred-to provider who does not log in. EMP is needed for a login, not simply to exist as a provider.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-16",
    "course": "CLN251-252",
    "topic": "Providers and users",
    "pages": [
      203
    ],
    "prompt": "Where should an individual’s provider record be linked?",
    "options": [
      "To their individual user record",
      "To a template shared by all clinicians",
      "To the department profile instead of a user",
      "To every report they open"
    ],
    "correct": [
      0
    ],
    "rationale": "Provider identity links to the individual user record. A shared user template should not represent a single provider identity.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-17",
    "course": "CLN251-252",
    "topic": "User templates",
    "pages": [
      203,
      286
    ],
    "prompt": "Which settings are shared through the user template in the course model? Select all that apply.",
    "options": [
      "Role",
      "Security classes",
      "Profile",
      "Individual login password"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "rationale": "Role, security classes, and profile are common template settings. Individual credentials belong to the individual user.",
    "kind": "multiple"
  },
  {
    "id": "CLN251-252-18",
    "course": "CLN251-252",
    "topic": "Category lists",
    "pages": [
      226
    ],
    "prompt": "A builder needs to open a category list for maintenance. Which identifiers are required?",
    "options": [
      "Master-file INI and item number",
      "Screen color and workspace count",
      "Only the category title",
      "Provider ID and password"
    ],
    "correct": [
      0
    ],
    "rationale": "The list is located using its master-file INI and item number. A display title alone is not its item address.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-19",
    "course": "CLN251-252",
    "topic": "Category lists",
    "pages": [
      226
    ],
    "prompt": "A category value is obsolete but has been used in production. What maintenance action preserves its historical meaning?",
    "options": [
      "Deactivate the value",
      "Delete it and reuse the ID for a new meaning",
      "Rename it to an unrelated concept",
      "Erase all historical contacts"
    ],
    "correct": [
      0
    ],
    "rationale": "Deactivation retires an option while preserving historical use. Reusing or changing the meaning of an existing ID can distort old data.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-20",
    "course": "CLN251-252",
    "topic": "Category lists",
    "pages": [
      226
    ],
    "prompt": "Category List Maintenance displays Release Range: All Categories. How should the builder interpret it?",
    "options": [
      "Customer-controlled list",
      "Epic-controlled system list that is read-only",
      "Every ID is available for local reuse",
      "The list has no values"
    ],
    "correct": [
      1
    ],
    "rationale": "All Categories indicates an Epic-controlled system list. All Custom, by contrast, is the customer-list designation.",
    "kind": "single"
  },
  {
    "id": "OR350-01",
    "course": "OR350",
    "topic": "Definitions",
    "pages": [
      39,
      41,
      43
    ],
    "prompt": "For a location setting that inherits normally, no local value is entered but a system value exists. What is used?",
    "options": [
      "The system definition value",
      "A random sibling location value",
      "Always a blank value",
      "The user’s most recent case value"
    ],
    "correct": [
      0
    ],
    "rationale": "Location configuration can inherit system definitions when the local item is blank. This is build by exception, not a lookup through other locations.",
    "kind": "single"
  },
  {
    "id": "OR350-02",
    "course": "OR350",
    "topic": "Definitions",
    "pages": [
      47
    ],
    "prompt": "A location sets values for Case Creation in the Case Extension form. What happens to system-level values for that same multiple-value item?",
    "options": [
      "The local item overrides the system item’s values",
      "All values always merge",
      "The local values are ignored",
      "The system values are deleted from storage"
    ],
    "correct": [
      0
    ],
    "rationale": "The example compiles item by item: a populated local item replaces all system values for that item. It does not delete the stored system configuration.",
    "kind": "single"
  },
  {
    "id": "OR350-03",
    "course": "OR350",
    "topic": "Metrics",
    "pages": [
      65,
      72,
      333
    ],
    "prompt": "Cases scheduled far apart should be excluded from turnover analysis. Which setting addresses their scheduled separation?",
    "options": [
      "Scheduled gap threshold",
      "Supply cost per unit",
      "Procedure Pass lookback",
      "Profile hierarchy level"
    ],
    "correct": [
      0
    ],
    "rationale": "Scheduled gap threshold evaluates the planned gap. Actual turnover thresholds concern measured turnover, not scheduled separation.",
    "kind": "single"
  },
  {
    "id": "OR350-04",
    "course": "OR350",
    "topic": "Procedures",
    "pages": [
      84,
      85,
      89
    ],
    "prompt": "A new base procedure cannot be found for the intended service and location. Which checks are appropriate? Select all that apply.",
    "options": [
      "Its active/inactive setting",
      "Its service authorization",
      "Its location authorization",
      "The surgeon’s preferred screen color"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "rationale": "A base procedure must be active and properly authorized for the intended service/location. Screen appearance does not determine this availability.",
    "kind": "multiple"
  },
  {
    "id": "OR350-05",
    "course": "OR350",
    "topic": "Resources",
    "pages": [
      98,
      99,
      334
    ],
    "prompt": "A generic equipment requirement and a specific numbered device must both be represented. Which mapping fits?",
    "options": [
      "Generic type: ORT; individual device: SER",
      "Generic type: EMP; device: LPG",
      "Both must be user templates",
      "Generic type: IMP; device: LPR"
    ],
    "correct": [
      0
    ],
    "rationale": "ORT describes the resource type; SER represents individually tracked resources. EMP is a user and IMP is implant tracking.",
    "kind": "single"
  },
  {
    "id": "OR350-06",
    "course": "OR350",
    "topic": "Resources",
    "pages": [
      121
    ],
    "prompt": "Must every resource type use conflict checking?",
    "options": [
      "Yes, without exception",
      "No; conflict checking is optional",
      "Only if it has an EMP password",
      "Only after a log is posted"
    ],
    "correct": [
      1
    ],
    "rationale": "The course explicitly treats conflict checking as optional. It is not made mandatory merely by creating a resource type.",
    "kind": "single"
  },
  {
    "id": "OR350-07",
    "course": "OR350",
    "topic": "Operating rooms",
    "pages": [
      145,
      334
    ],
    "prompt": "A newly built operating room cannot be added to a Snapboard report. Which issues should be checked? Select all that apply.",
    "options": [
      "The room is inactive",
      "The room lacks its location link",
      "The room has no blocked time",
      "Its supply item lacks a serial number"
    ],
    "correct": [
      0,
      1
    ],
    "rationale": "Inactive status and missing location linkage can prevent the room from appearing. Blocking controls available/reserved time, not whether the room can be added to the report.",
    "kind": "multiple"
  },
  {
    "id": "OR350-08",
    "course": "OR350",
    "topic": "Operating rooms",
    "pages": [
      127,
      145
    ],
    "prompt": "Which pair provides an operating room’s identity and scheduling availability?",
    "options": [
      "SER room record and scheduling template",
      "SUP record and user password",
      "IMP record and print group",
      "Category list and role"
    ],
    "correct": [
      0
    ],
    "rationale": "The room is represented by SER; its scheduling template defines availability and blocking. Inventory and user records do not substitute for this pair.",
    "kind": "single"
  },
  {
    "id": "OR350-09",
    "course": "OR350",
    "topic": "Inventory",
    "pages": [
      150,
      171
    ],
    "prompt": "The same supply is stocked in three inventory locations. Which arrangement represents its definition and location-specific balances?",
    "options": [
      "One SUP and three BAL records",
      "Three user records and one SUP",
      "One IMP and three roles",
      "One BAL with no SUP"
    ],
    "correct": [
      0
    ],
    "rationale": "SUP stores shared item characteristics; BAL holds location-specific information. IMP is used for implant tracking, not the general item/balance relationship.",
    "kind": "single"
  },
  {
    "id": "OR350-10",
    "course": "OR350",
    "topic": "Inventory",
    "pages": [
      155,
      156
    ],
    "prompt": "An item has a chargeable flag and a code but produces a zero-dollar charge. In the course example, which missing value explains it?",
    "options": [
      "Cost per unit",
      "Patient login ID",
      "Navigator caption",
      "Block owner"
    ],
    "correct": [
      0
    ],
    "rationale": "The example lacks cost per unit, so the system cannot calculate the item cost. This is distinct from user, navigator, and block configuration.",
    "kind": "single"
  },
  {
    "id": "OR350-11",
    "course": "OR350",
    "topic": "Inventory",
    "pages": [
      166,
      169
    ],
    "prompt": "Which record tracks information about a particular implant used in surgery?",
    "options": [
      "IMP",
      "EMP",
      "LRP",
      "E2R"
    ],
    "correct": [
      0
    ],
    "rationale": "IMP tracks implant documentation/history. EMP is a user, LRP a report, and E2R a role.",
    "kind": "single"
  },
  {
    "id": "OR350-12",
    "course": "OR350",
    "topic": "Charging",
    "pages": [
      208
    ],
    "prompt": "A builder needs to define which code is billed every five minutes. Which record is appropriate?",
    "options": [
      "Charge code table (OCT)",
      "Navigator topic (LVN)",
      "User template (EMP)",
      "Provider (SER)"
    ],
    "correct": [
      0
    ],
    "rationale": "The charge code table defines the timing code and frequency. Charge settings separately identify the start and end events.",
    "kind": "single"
  },
  {
    "id": "OR350-13",
    "course": "OR350",
    "topic": "Charging",
    "pages": [
      208
    ],
    "prompt": "The timing charge should run between In Room and Out of Room. Where are those events selected?",
    "options": [
      "Charge settings",
      "Only the EAP charge code",
      "Only the user role",
      "The category list synonym field"
    ],
    "correct": [
      0
    ],
    "rationale": "Charge settings determine the events that bound time-based charges. The table supplies the code/frequency; a code alone does not set these event boundaries.",
    "kind": "single"
  },
  {
    "id": "OR350-14",
    "course": "OR350",
    "topic": "Charging",
    "pages": [
      195,
      196,
      208
    ],
    "prompt": "Several charge-profile override rules evaluate true. How should the settings be selected?",
    "options": [
      "Merge every matching settings record",
      "Use the first matching override in order",
      "Always use the default",
      "Use the last edited record"
    ],
    "correct": [
      1
    ],
    "rationale": "The profile checks overrides in order and uses the first match; otherwise it uses the default. Only one charge settings record applies at a time.",
    "kind": "single"
  },
  {
    "id": "OR350-15",
    "course": "OR350",
    "topic": "Charging",
    "pages": [
      202,
      203
    ],
    "prompt": "A practice table has one base charge for the first 60 minutes and one increment per additional minute. An event lasts 68 minutes. What is generated?",
    "options": [
      "One base plus eight increments",
      "Eight bases plus one increment",
      "Sixty-eight base charges",
      "Only one base charge"
    ],
    "correct": [
      0
    ],
    "rationale": "68 minus 60 gives eight additional minutes, so this configured example generates nine charges total. The calculation depends on the stated table, not a universal billing rule.",
    "kind": "single"
  },
  {
    "id": "OR350-16",
    "course": "OR350",
    "topic": "Preference cards",
    "pages": [
      216,
      217
    ],
    "prompt": "Two cards apply: one for this surgeon at this location and one for this surgeon at all locations. Which is more specific?",
    "options": [
      "The surgeon-and-location card",
      "The all-locations card",
      "They always merge equally",
      "The one with the longer name"
    ],
    "correct": [
      0
    ],
    "rationale": "Surgeon plus specific location is more specific than the surgeon’s all-locations card. The name length has no priority role.",
    "kind": "single"
  },
  {
    "id": "OR350-17",
    "course": "OR350",
    "topic": "Preference cards",
    "pages": [
      208,
      216
    ],
    "prompt": "Which master file holds both OpTime base procedures and preference cards?",
    "options": [
      "ORP",
      "EAP",
      "LPG",
      "EMP"
    ],
    "correct": [
      0
    ],
    "rationale": "ORP holds both base procedures and preference cards. EAP holds procedure/charge codes; LPG and EMP serve other purposes.",
    "kind": "single"
  },
  {
    "id": "OR350-18",
    "course": "OR350",
    "topic": "Procedure Pass",
    "pages": [
      244,
      245,
      246
    ],
    "prompt": "A task must wait for a lab to be performed and meet result-related criteria, rather than merely find an order. Which task type fits?",
    "options": [
      "Procedure & Lab",
      "Presence of Orders",
      "Generic",
      "Appointment"
    ],
    "correct": [
      0
    ],
    "rationale": "Procedure & Lab is suited to completion/results criteria. Presence of Orders can complete from a qualifying order; Generic requires manual completion.",
    "kind": "single"
  },
  {
    "id": "OR350-19",
    "course": "OR350",
    "topic": "Procedure Pass",
    "pages": [
      244,
      264
    ],
    "prompt": "A task should be shown to everyone and be manually completed. Which choices fit? Select all that apply.",
    "options": [
      "Use a Generic task for manual completion",
      "No conditional rule is needed solely to make it universal",
      "Use Presence of Orders to force manual completion",
      "Build every task from scratch"
    ],
    "correct": [
      0,
      1
    ],
    "rationale": "Generic tasks require manual completion, and universal tasks need no conditional rule just to apply to all patients. Reuse suitable existing tasks when possible.",
    "kind": "multiple"
  },
  {
    "id": "OR350-20",
    "course": "OR350",
    "topic": "Documentation",
    "pages": [
      270,
      307
    ],
    "prompt": "A documentation tool needs complex calculations and concurrent entry by several users. Which tool is generally the better fit in the course comparison?",
    "options": [
      "Flowsheets",
      "A report-only print group",
      "A charge code table",
      "A preference-card copy tool"
    ],
    "correct": [
      0
    ],
    "rationale": "Flowsheets support complex calculations and concurrent documentation. SmartForms offer flexible design and scripting; reports and charging tools are not replacements for this documentation need.",
    "kind": "single"
  },
  {
    "id": "OR350-21",
    "course": "OR350",
    "topic": "Documentation",
    "pages": [
      284,
      307
    ],
    "prompt": "Which statements about flowsheet records are correct? Select all that apply.",
    "options": [
      "Rows and groups are FLO records",
      "Templates are FLT records",
      "R and G help distinguish rows and groups",
      "Every template must be an EMP record"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "rationale": "Rows and groups share FLO and use naming conventions to distinguish them. Templates use FLT; EMP represents users/templates for users.",
    "kind": "multiple"
  },
  {
    "id": "OR350-22",
    "course": "OR350",
    "topic": "Documentation",
    "pages": [
      276,
      307
    ],
    "prompt": "A SmartForm includes a label that displays instructions but captures no value. Must that label be bound to a Chronicles item?",
    "options": [
      "No, non-data components need no storage binding",
      "Yes, every visible component must store data",
      "Yes, but only if a flowsheet exists",
      "Only after charges are triggered"
    ],
    "correct": [
      0
    ],
    "rationale": "Only components that capture data need a storage binding. A label can display information without a data item.",
    "kind": "single"
  },
  {
    "id": "OR350-23",
    "course": "OR350",
    "topic": "Security",
    "pages": [
      315,
      323,
      329
    ],
    "prompt": "A user logs into one department but opens a case scheduled at a Procedural location. What determines the OpTime security model for that case?",
    "options": [
      "The case location’s type",
      "The login department alone",
      "The last provider record edited",
      "The number of open reports"
    ],
    "correct": [
      0
    ],
    "rationale": "The case location type selects Procedural versus OpTime System/Location security. The login department is not the deciding factor.",
    "kind": "single"
  },
  {
    "id": "OR350-24",
    "course": "OR350",
    "topic": "Security",
    "pages": [
      319,
      322,
      323
    ],
    "prompt": "For a case at a Surgical location with a location-specific security override, which combination applies?",
    "options": [
      "System class plus that location’s override class",
      "All assigned location classes merged",
      "Only the override, with no System class",
      "Only the default location class"
    ],
    "correct": [
      0
    ],
    "rationale": "One System class combines with one applicable Location class. A location override replaces the default Location class for that case, not the System class.",
    "kind": "single"
  },
  {
    "id": "OR100-17",
    "course": "OR100",
    "topic": "Scheduling",
    "pages": [
      63
    ],
    "prompt": "A patient still needs the operation, but it has not yet been placed on the schedule. Where should a scheduler look for the unscheduled case?",
    "options": [
      "Depot",
      "Post Charges",
      "Chart Review",
      "Reporting Workbench"
    ],
    "correct": [
      0
    ],
    "rationale": "The Depot contains unscheduled cases. Post Charges is for charge work, and Chart Review is for reviewing the patient record.",
    "kind": "single"
  },
  {
    "id": "OR100-18",
    "course": "OR100",
    "topic": "Scheduling",
    "pages": [
      63
    ],
    "prompt": "A duplicate surgical case was entered by mistake. Which action best identifies that record as an error?",
    "options": [
      "Remove it from a time slot",
      "Cancel the intended operation",
      "Void the erroneous case",
      "Post its log"
    ],
    "correct": [
      2
    ],
    "rationale": "Void is used for a case created in error. Cancel instead fits a real planned case that will no longer be performed; removing a time slot does not identify an erroneous record.",
    "kind": "single"
  },
  {
    "id": "OR100-19",
    "course": "OR100",
    "topic": "Scheduling",
    "pages": [
      63
    ],
    "prompt": "A surgeon needs a list of patients with appointments today. Which activity is the best starting point?",
    "options": [
      "Schedule",
      "Orders",
      "Chart Review",
      "Post Charges"
    ],
    "correct": [
      0
    ],
    "rationale": "Schedule provides the appointment-based patient list. Orders and Chart Review support work within a chart rather than serving as the appointment list.",
    "kind": "single"
  },
  {
    "id": "OR100-20",
    "course": "OR100",
    "topic": "Perioperative tracking",
    "pages": [
      83
    ],
    "prompt": "A nurse wants a unit-level view of where patients are in the perioperative process. Which activity meets this need?",
    "options": [
      "Status Board",
      "Order Composer",
      "Preference List Composer",
      "Post Charges"
    ],
    "correct": [
      0
    ],
    "rationale": "The Status Board supports tracking patient status across perioperative areas. The other activities support ordering, preference-list maintenance, or charging.",
    "kind": "single"
  },
  {
    "id": "OR100-21",
    "course": "OR100",
    "topic": "Perioperative tracking",
    "pages": [
      83
    ],
    "prompt": "Which entries record key milestones in a patient’s movement through perioperative care?",
    "options": [
      "Case tracking events",
      "Preference-card instructions",
      "Report favorites",
      "Scheduling blocks"
    ],
    "correct": [
      0
    ],
    "rationale": "Case tracking events document important moments in perioperative care. Planning instructions and scheduling blocks do not document that a milestone actually occurred.",
    "kind": "single"
  },
  {
    "id": "OR100-22",
    "course": "OR100",
    "topic": "Procedure Pass",
    "pages": [
      83
    ],
    "prompt": "A preprocedure nurse sees many tasks assigned to different disciplines. Which view helps the nurse isolate responsibilities by discipline?",
    "options": [
      "Tasks grouped by role",
      "Tasks grouped only by status",
      "Charge details grouped by code",
      "Orders grouped by preference list"
    ],
    "correct": [
      0
    ],
    "rationale": "Grouping the Tasks section by role organizes Procedure Pass work by responsible role. Status alone does not identify which discipline owns the work.",
    "kind": "single"
  },
  {
    "id": "OR100-23",
    "course": "OR100",
    "topic": "Documentation",
    "pages": [
      122
    ],
    "prompt": "True or false: Before completing a perioperative phase, a nurse can use the Verify navigator section to check required documentation.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      0
    ],
    "rationale": "Verify is the section used to check completion of documentation required for a phase. Procedure Pass tasks and order signing serve different functions.",
    "kind": "truefalse"
  },
  {
    "id": "OR100-24",
    "course": "OR100",
    "topic": "Resources and inventory",
    "pages": [
      104
    ],
    "prompt": "Which of these belong on a pick list? Select all that apply.",
    "options": [
      "A medication",
      "A consumable supply",
      "A circulating-nurse assignment",
      "An equipment resource assignment",
      "A scheduling block"
    ],
    "correct": [
      0,
      1
    ],
    "rationale": "Pick lists contain medications and supplies. Staff and equipment are surgical resources, while scheduling blocks reserve scheduling capacity.",
    "kind": "multiple"
  },
  {
    "id": "OR100-25",
    "course": "OR100",
    "topic": "Resources and inventory",
    "pages": [
      104
    ],
    "prompt": "Which resources are tracked individually in the course workflow? Select all that apply.",
    "options": [
      "Staff members",
      "Equipment units",
      "Disposable supplies",
      "Instrument types"
    ],
    "correct": [
      0,
      1
    ],
    "rationale": "Staff and equipment are the individually tracked surgical resources identified in the companion. Supply use and instrument types are handled differently.",
    "kind": "multiple"
  },
  {
    "id": "OR100-26",
    "course": "OR100",
    "topic": "Device documentation",
    "pages": [
      122
    ],
    "prompt": "Device readings have appeared in a flowsheet. What should happen before they are filed to the patient’s chart?",
    "options": [
      "The nurse reviews and validates the readings",
      "All readings are accepted simply because they came from a device",
      "The surgical log is posted first",
      "The preference card is copied"
    ],
    "correct": [
      0
    ],
    "rationale": "Validation lets the nurse confirm accuracy and avoid filing unnecessary device data. Device origin alone is not a substitute for clinical review.",
    "kind": "single"
  },
  {
    "id": "OR100-27",
    "course": "OR100",
    "topic": "Ordering",
    "pages": [
      122
    ],
    "prompt": "True or false: The patient’s current phase of care can affect the signing action automatically selected for an order.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      0
    ],
    "rationale": "The companion identifies the current phase of care as a factor in the default signing action. Staff should review that action in the patient’s current context.",
    "kind": "truefalse"
  },
  {
    "id": "OR100-28",
    "course": "OR100",
    "topic": "Technical charging",
    "pages": [
      135
    ],
    "prompt": "Which documentation can generate technical charges? Select all that apply.",
    "options": [
      "Anesthesia agents",
      "Case tracking events",
      "Implants",
      "Supplies",
      "Free-text instructions alone"
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "rationale": "The listed agents, events, implants, and supplies can generate technical charges. Instructions alone are not one of the charge-generating sources identified in the companion.",
    "kind": "multiple"
  },
  {
    "id": "OR100-29",
    "course": "OR100",
    "topic": "Technical charging",
    "pages": [
      135
    ],
    "prompt": "A reviewer needs a worklist of surgical logs that have not been posted. Which activity is designed for this? Select all that apply.",
    "options": [
      "Post Charges",
      "Snapboard",
      "Schedule",
      "Order Review"
    ],
    "correct": [
      0
    ],
    "rationale": "Post Charges is used to locate unposted logs. Snapboard and Schedule support scheduling workflows rather than the charge-poster worklist.",
    "kind": "multiple"
  },
  {
    "id": "OR100-30",
    "course": "OR100",
    "topic": "Technical charging",
    "pages": [
      135
    ],
    "prompt": "A log is ready to send all charges and close, rather than continue collecting documentation. What should the charge poster do?",
    "options": [
      "Post the log",
      "Only trigger eligible charges",
      "Remove the case from the schedule",
      "Change the phase of care"
    ],
    "correct": [
      0
    ],
    "rationale": "Posting sends all log charges to the charge router and closes the log. Triggering charges alone keeps the log open and holds back charges that are not ready.",
    "kind": "single"
  },
  {
    "id": "OR100-31",
    "course": "OR100",
    "topic": "Reporting",
    "pages": [
      147,
      152
    ],
    "prompt": "A manager wants to explore procedure trends across a large patient population and adjust the analysis interactively. Which tool is the best fit?",
    "options": [
      "SlicerDicer",
      "Status Board",
      "Tasks navigator",
      "Case request composer"
    ],
    "correct": [
      0
    ],
    "rationale": "SlicerDicer supports interactive exploration of large data sets. The other tools primarily support individual workflow or day-to-day patient tracking.",
    "kind": "single"
  },
  {
    "id": "OR100-32",
    "course": "OR100",
    "topic": "Reporting",
    "pages": [
      152
    ],
    "prompt": "An analyst is asked for a custom list of last month’s logs missing a particular documentation element. Which tool best matches the course example?",
    "options": [
      "Reporting Workbench",
      "A scheduling block template",
      "A preference card",
      "A Procedure Pass Generic task"
    ],
    "correct": [
      0
    ],
    "rationale": "Reporting Workbench supports a custom report identifying logs that meet documentation criteria. The other records configure workflow rather than create this retrospective worklist.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-21",
    "course": "CLN251-252",
    "topic": "Data structure",
    "pages": [
      41
    ],
    "prompt": "True or false: An analyst can correct a stored value directly in Record Viewer.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      1
    ],
    "rationale": "Record Viewer is read-only. It helps inspect stored data, but changes must be made through an appropriate editing workflow.",
    "kind": "truefalse"
  },
  {
    "id": "CLN251-252-22",
    "course": "CLN251-252",
    "topic": "Data structure",
    "pages": [
      41
    ],
    "prompt": "A patient date-of-birth field holds one date in the patient record. Which combination describes the course’s storage example?",
    "options": [
      "Single-response item in a dynamic master file",
      "Multiple-response item in a dynamic master file",
      "Single-response item in a static master file",
      "Multiple-response item in a static master file"
    ],
    "correct": [
      0
    ],
    "rationale": "The date-of-birth example is a single-response item in a dynamic master file. One date is a single response; dynamic describes the patient-data master file.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-23",
    "course": "CLN251-252",
    "topic": "Reports",
    "pages": [
      66
    ],
    "prompt": "Everyone using an existing shared report needs the same approved change. What is the preferred maintenance approach?",
    "options": [
      "Edit the existing record when possible",
      "Create a separate copy for every user",
      "Replace each user record",
      "Move the change to a role record"
    ],
    "correct": [
      0
    ],
    "rationale": "When all users of a record need a change, the companion recommends editing the existing record when possible. Copies are useful when needs differ, not automatically for every edit.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-24",
    "course": "CLN251-252",
    "topic": "Reports",
    "pages": [
      66
    ],
    "prompt": "You need the names and IDs of the print groups shown in a report. Which support tool should you use?",
    "options": [
      "Session Information Report",
      "Preference List Composer",
      "Category List Maintenance",
      "The scheduling Depot"
    ],
    "correct": [
      0
    ],
    "rationale": "Session Information Report provides the assistance used to expose report and print-group identifiers. The other tools do not perform this investigation.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-25",
    "course": "CLN251-252",
    "topic": "Reports",
    "pages": [
      66
    ],
    "prompt": "Which building blocks make up a report? Select all that apply.",
    "options": [
      "Print groups",
      "Navigator templates",
      "User templates",
      "Security classes"
    ],
    "correct": [
      0
    ],
    "rationale": "Reports are composed of print groups. Navigator templates, user templates, and security classes configure different aspects of the user experience.",
    "kind": "multiple"
  },
  {
    "id": "CLN251-252-26",
    "course": "CLN251-252",
    "topic": "Profiles",
    "pages": [
      81
    ],
    "prompt": "For a standard related-group profile item, a specific profile defines one row and a more general profile defines five rows. What is the expected result?",
    "options": [
      "The specific profile’s table overrides the general table",
      "All six rows always merge",
      "Only the five general rows are retained",
      "The table is ignored unless both contain equal row counts"
    ],
    "correct": [
      0
    ],
    "rationale": "For the standard behavior described in the companion, a populated related-group item overrides the entire table from a more general profile. Some items are documented exceptions; do not assume universal merging.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-27",
    "course": "CLN251-252",
    "topic": "Profiles",
    "pages": [
      81
    ],
    "prompt": "True or false: Every multiple-response profile item follows exactly the same compilation behavior without exceptions.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      1
    ],
    "rationale": "The companion describes item outliers, including settings that compile by type and configurable exceptions. Read item help instead of applying one rule to every field.",
    "kind": "truefalse"
  },
  {
    "id": "CLN251-252-28",
    "course": "CLN251-252",
    "topic": "Workflow Engine",
    "pages": [
      135
    ],
    "prompt": "A rule executes a matching directive that has no Continue Afterwards setting. What happens next?",
    "options": [
      "Evaluation of that rule stops",
      "The next condition is always evaluated",
      "The system automatically moves to the next profile’s rule",
      "All matching directives are merged"
    ],
    "correct": [
      0
    ],
    "rationale": "Without Continue Afterwards, the system executes the matching directive and stops consulting that rule. Continued evaluation must be configured.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-29",
    "course": "CLN251-252",
    "topic": "Workflow Engine",
    "pages": [
      135
    ],
    "prompt": "No condition in the Workflow Engine rule selected by the compiled profile matches the encounter. What is true?",
    "options": [
      "A lower profile’s Workflow Engine rule is not automatically tried",
      "Every lower-level rule is tried in sequence",
      "The role record supplies a replacement navigator rule automatically",
      "All profile rules run simultaneously"
    ],
    "correct": [
      0
    ],
    "rationale": "Only the Workflow Engine rule selected by the compiled profile is used. A condition mismatch does not make the system fall through to another profile’s rule.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-30",
    "course": "CLN251-252",
    "topic": "Workflow Engine",
    "pages": [
      135
    ],
    "prompt": "An analyst has built a Workflow Engine rule and must connect it to the user’s configuration. In which record is the rule linked?",
    "options": [
      "Profile",
      "Print group",
      "Report",
      "Category value"
    ],
    "correct": [
      0
    ],
    "rationale": "Workflow Engine rules are linked in profiles. Reports and print groups present information, while category values define selectable field options.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-31",
    "course": "CLN251-252",
    "topic": "Navigators",
    "pages": [
      152
    ],
    "prompt": "Which navigator record contains the section records used for documentation?",
    "options": [
      "Topic",
      "User template",
      "Print group",
      "Security class"
    ],
    "correct": [
      0
    ],
    "rationale": "A navigator topic contains sections, and a navigator template can contain multiple topics. These navigator record types are all stored in LVN.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-32",
    "course": "CLN251-252",
    "topic": "Navigators",
    "pages": [
      152
    ],
    "prompt": "An analyst changes a navigator topic’s caption to “Recovery Review.” Where does an end user see that text?",
    "options": [
      "The navigator table of contents",
      "The user’s login ID",
      "The security-class name",
      "The appointment status"
    ],
    "correct": [
      0
    ],
    "rationale": "The topic caption supplies the display text in the navigator table of contents. It does not rename user credentials or scheduling statuses.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-33",
    "course": "CLN251-252",
    "topic": "Roles",
    "pages": [
      169
    ],
    "prompt": "A user has four startup activities, two patient workspaces, and one Preference List Composer workspace open. How many workspaces count toward the total?",
    "options": [
      "Three",
      "Four",
      "Six",
      "Seven"
    ],
    "correct": [
      1
    ],
    "rationale": "All startup activities together count as one workspace. Add two patient workspaces and one composer workspace: 1 + 2 + 1 = 4.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-34",
    "course": "CLN251-252",
    "topic": "Roles",
    "pages": [
      169
    ],
    "prompt": "Which settings belong to a role record? Select all that apply.",
    "options": [
      "Default startup activities",
      "Maximum number of workspaces",
      "Default login department",
      "Order of Chart Review tabs"
    ],
    "correct": [
      0,
      1
    ],
    "rationale": "The role controls startup activities and workspace limits. Default login department is an individual user setting; Chart Review tab order is configured through profiles.",
    "kind": "multiple"
  },
  {
    "id": "CLN251-252-35",
    "course": "CLN251-252",
    "topic": "Users and providers",
    "pages": [
      203
    ],
    "prompt": "A community referral physician never logs in to your Epic system. Which record arrangement matches this need?",
    "options": [
      "A provider record can exist without a user record",
      "A user record is required solely to receive referrals",
      "A user template replaces the provider record",
      "A role record replaces the provider record"
    ],
    "correct": [
      0
    ],
    "rationale": "A referral physician can need a provider record without needing login access. User records are required for people who log in, and templates do not replace providers.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-36",
    "course": "CLN251-252",
    "topic": "Users and providers",
    "pages": [
      203
    ],
    "prompt": "Which information is maintained for an individual user rather than as a shared user-template setting? Select all that apply.",
    "options": [
      "Login ID",
      "Default login department",
      "Role for a group of similar users",
      "Shared security classes"
    ],
    "correct": [
      0,
      1
    ],
    "rationale": "Login ID and default login department are individual user settings. Roles and security classes can be shared through a user template for similar users.",
    "kind": "multiple"
  },
  {
    "id": "CLN251-252-37",
    "course": "CLN251-252",
    "topic": "Users and providers",
    "pages": [
      203
    ],
    "prompt": "True or false: A provider record may link directly to a shared user template instead of an individual user record.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      1
    ],
    "rationale": "A provider can link to a user record, not directly to a user template. The individual user record can then obtain shared settings through its template.",
    "kind": "truefalse"
  },
  {
    "id": "CLN251-252-38",
    "course": "CLN251-252",
    "topic": "Category lists",
    "pages": [
      226
    ],
    "prompt": "An analyst knows the display text of a field but needs to open its category list in maintenance. Which identifiers are required? Select all that apply.",
    "options": [
      "Master-file INI",
      "Item number",
      "Every option synonym",
      "The Text screen number"
    ],
    "correct": [
      0,
      1
    ],
    "rationale": "The category list is identified by master-file INI and item number. Synonyms and the Text screen number are not the required address for the list.",
    "kind": "multiple"
  },
  {
    "id": "CLN251-252-39",
    "course": "CLN251-252",
    "topic": "Category lists",
    "pages": [
      226
    ],
    "prompt": "An obsolete category value already has production history. Which change preserves that history while retiring the option?",
    "options": [
      "Deactivate the value",
      "Delete the value",
      "Reuse its ID for a different meaning",
      "Change the master-file INI"
    ],
    "correct": [
      0
    ],
    "rationale": "Deactivation preserves historical use. Deleting a value can erase its historical use, and reusing its identity for another meaning would misrepresent prior data.",
    "kind": "single"
  },
  {
    "id": "CLN251-252-40",
    "course": "CLN251-252",
    "topic": "Category lists",
    "pages": [
      226
    ],
    "prompt": "Category List Maintenance shows “Release Range: All Categories.” What does this indicate?",
    "options": [
      "An Epic-controlled read-only system list",
      "An unrestricted customer-controlled list",
      "A list that must be deleted before editing",
      "A list without historical values"
    ],
    "correct": [
      0
    ],
    "rationale": "All Categories identifies an Epic-controlled system list that is read-only. It does not mean the customer can freely edit every value.",
    "kind": "single"
  },
  {
    "id": "OR350-25",
    "course": "OR350",
    "topic": "Location configuration",
    "pages": [
      47
    ],
    "prompt": "System Definitions lists three Case Creation extensions. The location defines one extension for that same item. Which set applies at that location?",
    "options": [
      "The location’s one extension",
      "All four extensions automatically merged",
      "Only the three system extensions",
      "The most recently created extension regardless of level"
    ],
    "correct": [
      0
    ],
    "rationale": "Case Extensions follows item-level override behavior. A populated location item overrides all system values for that item; it does not automatically append to them.",
    "kind": "single"
  },
  {
    "id": "OR350-26",
    "course": "OR350",
    "topic": "Reporting configuration",
    "pages": [
      60
    ],
    "prompt": "System Definitions excludes weekend cases from a report calculation. A location needs weekends included. What should its Exclude Weekends setting be?",
    "options": [
      "No",
      "Yes",
      "Blank to preserve the system setting",
      "The same as Exclude Holidays"
    ],
    "correct": [
      0
    ],
    "rationale": "Set Exclude Weekends to No at the location to override the system’s Yes. Leaving the field blank would retain the broader setting.",
    "kind": "single"
  },
  {
    "id": "OR350-27",
    "course": "OR350",
    "topic": "Resource build",
    "pages": [
      99
    ],
    "prompt": "Which planned resources are represented by SER rather than an ORT resource-type record? Select all that apply.",
    "options": [
      "Surgeons",
      "Operating rooms",
      "Generic circulator type",
      "Generic equipment type"
    ],
    "correct": [
      0,
      1
    ],
    "rationale": "Surgeons and operating rooms use SER records. Generic staff and equipment types use resource-type records, so ORT is not the planning record for surgeons or rooms.",
    "kind": "multiple"
  },
  {
    "id": "OR350-28",
    "course": "OR350",
    "topic": "Resource build",
    "pages": [
      99
    ],
    "prompt": "A hospital needs a generic “Circulator” choice for case planning. What does the resource-type record describe?",
    "options": [
      "The type of staff needed",
      "One named nurse’s login credentials",
      "A surgeon’s operating-room privileges",
      "A room’s individual schedule"
    ],
    "correct": [
      0
    ],
    "rationale": "A resource-type record describes a generic resource such as Circulator. Individual tracking and user login require other records; the resource type is not a person’s credentials.",
    "kind": "single"
  },
  {
    "id": "OR350-29",
    "course": "OR350",
    "topic": "Room configuration",
    "pages": [
      145
    ],
    "prompt": "A room is absent from the Snapboard altogether. Which issues could explain that? Select all that apply.",
    "options": [
      "The report is not configured to show the room",
      "The room is not linked to an OR location",
      "Its template lacks blocks",
      "Its template contains private blocks"
    ],
    "correct": [
      0,
      1
    ],
    "rationale": "Report inclusion and linkage to an OR location can explain a missing room. Missing or private blocks affect scheduling availability but do not by themselves make the room disappear.",
    "kind": "multiple"
  },
  {
    "id": "OR350-30",
    "course": "OR350",
    "topic": "Room configuration",
    "pages": [
      145
    ],
    "prompt": "A room is visible and open, but a case cannot be scheduled into a block. Which restrictions could account for the mismatch? Select all that apply.",
    "options": [
      "The block is reserved for another service",
      "The block is reserved for another surgeon",
      "The time is explicitly unblocked",
      "The room is visible on the report"
    ],
    "correct": [
      0,
      1
    ],
    "rationale": "Block allocation must match the applicable service or surgeon/surgeon group, or be unblocked. Visibility alone does not prove that a case is eligible for a reserved block.",
    "kind": "multiple"
  },
  {
    "id": "OR350-31",
    "course": "OR350",
    "topic": "Room configuration",
    "pages": [
      145
    ],
    "prompt": "Which two components are needed for a fully configured operating room?",
    "options": [
      "Room SER record and scheduling template",
      "SUP record and balance record",
      "User record and print group",
      "Charge profile and preference list"
    ],
    "correct": [
      0
    ],
    "rationale": "A room needs its SER record and scheduling template. Inventory and charging records serve different purposes and do not replace the room’s scheduling build.",
    "kind": "single"
  },
  {
    "id": "OR350-32",
    "course": "OR350",
    "topic": "Inventory",
    "pages": [
      169
    ],
    "prompt": "The same supply needs different charging information at one inventory location. Where can that location-specific information be set?",
    "options": [
      "Balance (BAL) record",
      "Implant (IMP) record",
      "User template",
      "Navigator topic"
    ],
    "correct": [
      0
    ],
    "rationale": "The BAL record supports location-specific charging information that differs from the SUP. IMP captures unique implant history rather than location-wide supply charging defaults.",
    "kind": "single"
  },
  {
    "id": "OR350-33",
    "course": "OR350",
    "topic": "Inventory",
    "pages": [
      169
    ],
    "prompt": "Which record captures unique historical implant information from a procedure? Select all that apply.",
    "options": [
      "IMP",
      "BAL",
      "E2R",
      "LVN"
    ],
    "correct": [
      0
    ],
    "rationale": "The Implant (IMP) record captures implant documentation for tracking. BAL is for inventory balance/location information, while E2R and LVN serve user-interface configuration.",
    "kind": "multiple"
  },
  {
    "id": "OR350-34",
    "course": "OR350",
    "topic": "Inventory",
    "pages": [
      169
    ],
    "prompt": "An organization receives many inventory-item definitions from its materials management system. Which tool helps create the corresponding item records?",
    "options": [
      "Interface Item Mapping Tool",
      "Preference List Composer",
      "Session Information Report",
      "Category List Maintenance"
    ],
    "correct": [
      0
    ],
    "rationale": "The Interface Item Mapping Tool assists with creating inventory records from materials-management data. It is not a user-role or report-identification tool.",
    "kind": "single"
  },
  {
    "id": "OR350-35",
    "course": "OR350",
    "topic": "Charging",
    "pages": [
      195
    ],
    "prompt": "A location normally uses one charge setup but needs exceptions for certain cases. What belongs in its charge profile? Select all that apply.",
    "options": [
      "Default charge settings",
      "Rules linked to alternative charge settings",
      "A separate user password for each exception",
      "A room scheduling template for each charge code"
    ],
    "correct": [
      0,
      1
    ],
    "rationale": "A charge profile combines default settings with rules and alternative settings for exceptions. User passwords and room templates do not define charge-profile exceptions.",
    "kind": "multiple"
  },
  {
    "id": "OR350-36",
    "course": "OR350",
    "topic": "Charging",
    "pages": [
      203
    ],
    "prompt": "A local charge table specifies one initial charge for the first 60 minutes and one additional charge per minute afterward. A log documents 72 minutes. How many additional per-minute units result?",
    "options": [
      "12",
      "11",
      "60",
      "72"
    ],
    "correct": [
      0
    ],
    "rationale": "Under the stated table, 72 minus the 60-minute threshold yields 12 additional per-minute units. This arithmetic depends on the specified local setup, not a universal charging rule.",
    "kind": "single"
  },
  {
    "id": "OR350-37",
    "course": "OR350",
    "topic": "Charging",
    "pages": [
      203
    ],
    "prompt": "Charges are unexpected and you need to identify the charge settings actually applied to a log. What is a useful investigation step?",
    "options": [
      "Enable report/print-group assistance and inspect Charges to Be Sent",
      "Change the user’s default department before investigating",
      "Copy every charge code into a new table",
      "Delete the log and schedule a replacement case"
    ],
    "correct": [
      0
    ],
    "rationale": "The companion uses Session Information Report assistance and the Charges to Be Sent print group to identify applied charge settings. This provides evidence before changing configuration.",
    "kind": "single"
  },
  {
    "id": "OR350-38",
    "course": "OR350",
    "topic": "Preference cards",
    "pages": [
      219
    ],
    "prompt": "A preference-card field is blank. Is it safe to assume every blank field inherits from the base procedure?",
    "options": [
      "No; consult the field’s help text",
      "Yes; inheritance is identical for every field",
      "Yes; all blank fields merge every base value",
      "No; blank fields can never inherit"
    ],
    "correct": [
      0
    ],
    "rationale": "Some preference-card fields look to the base procedure when blank. The companion advises checking field help; neither universal inheritance nor universal non-inheritance is correct.",
    "kind": "single"
  },
  {
    "id": "OR350-39",
    "course": "OR350",
    "topic": "Preference cards",
    "pages": [
      219
    ],
    "prompt": "A surgeon wants a particular nurse, but the preference card’s Staff and Equipment form lists generic resources. What kind of entries are these?",
    "options": [
      "Resource types such as Circulator",
      "Individual login IDs",
      "Individual implant records",
      "Patient contacts"
    ],
    "correct": [
      0
    ],
    "rationale": "The form lists ORT resource types rather than individual people. A generic staffing requirement and a request for a particular person are different kinds of information.",
    "kind": "single"
  },
  {
    "id": "OR350-40",
    "course": "OR350",
    "topic": "Procedure Pass",
    "pages": [
      244
    ],
    "prompt": "A task was created as Generic, but the team now wants a task type that automatically detects an active order. Can the existing task’s type simply be edited?",
    "options": [
      "No; task type cannot be changed after creation",
      "Yes; change its display caption",
      "Yes; attach any charge profile",
      "Yes; moving it to another location changes the type"
    ],
    "correct": [
      0
    ],
    "rationale": "Task type is fixed after creation. Select or build an appropriate task of the required type instead of trying to change the type through unrelated settings.",
    "kind": "single"
  },
  {
    "id": "OR350-41",
    "course": "OR350",
    "topic": "Procedure Pass",
    "pages": [
      244
    ],
    "prompt": "A prerequisite is satisfied as soon as a qualifying order is placed and active; completed results are not required. Which task type fits?",
    "options": [
      "Presence of Orders",
      "Procedure & Lab",
      "Generic",
      "Appointment"
    ],
    "correct": [
      0
    ],
    "rationale": "Presence of Orders checks for placed active orders. Procedure & Lab addresses completion/results criteria; Generic is manually completed, and Appointment concerns scheduling/attendance.",
    "kind": "single"
  },
  {
    "id": "OR350-42",
    "course": "OR350",
    "topic": "Procedure Pass",
    "pages": [
      264
    ],
    "prompt": "The same Procedure Pass configuration should affect all locations. Which broad configuration level does the course identify?",
    "options": [
      "EMR System Definitions",
      "A single user’s role",
      "A single preference card",
      "An individual room template"
    ],
    "correct": [
      0
    ],
    "rationale": "EMR System Definitions is the broad setting identified for Procedure Pass across locations. A user role, card, or room template is not this system-wide configuration point.",
    "kind": "single"
  },
  {
    "id": "OR350-43",
    "course": "OR350",
    "topic": "Procedure Pass",
    "pages": [
      264
    ],
    "prompt": "True or false: Every Procedure Pass rollout should start by building entirely new tasks, even when suitable tasks already exist.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      1
    ],
    "rationale": "The course recommends using suitable pre-existing tasks whenever possible. Creating duplicates for every rollout adds maintenance without necessarily meeting a different need.",
    "kind": "truefalse"
  },
  {
    "id": "OR350-44",
    "course": "OR350",
    "topic": "SmartForms",
    "pages": [
      279
    ],
    "prompt": "A SmartForm should display a message when a component is clicked, but only if its value meets a condition. Which scripting sequence matches this?",
    "options": [
      "Event → Condition → Action",
      "Action → Release → Profile",
      "Profile → Role → Print group",
      "Condition → Inventory → Charge"
    ],
    "correct": [
      0
    ],
    "rationale": "SmartForm scripting uses an event to trigger evaluation, an optional condition to test the situation, and an action to perform the response.",
    "kind": "single"
  },
  {
    "id": "OR350-45",
    "course": "OR350",
    "topic": "SmartForms",
    "pages": [
      279
    ],
    "prompt": "An analyst has changed a SmartForm and wants the current version available to end users. Which steps fit? Select all that apply.",
    "options": [
      "Check existing scripts for problems",
      "Release the modified contact",
      "Assume saving alone always releases it",
      "Remove all scripts before any release"
    ],
    "correct": [
      0,
      1
    ],
    "rationale": "Check Scripts helps identify scripting issues, and releasing the contact makes the current SmartForm version available. Saving and releasing are distinct, and scripts need not all be removed.",
    "kind": "multiple"
  },
  {
    "id": "OR350-46",
    "course": "OR350",
    "topic": "Flowsheets",
    "pages": [
      293
    ],
    "prompt": "Which row-type and value-type combinations can be configured as a flowsheet trigger row? Select all that apply.",
    "options": [
      "Data with Numeric Type",
      "Custom Formula with Custom List",
      "Data with Category Type",
      "Data with a free-text string value"
    ],
    "correct": [
      0,
      1,
      2
    ],
    "rationale": "Trigger rows require Data or Custom Formula as row type and Category Type, Custom List, or Numeric Type as value type. A free-text string value is outside that list.",
    "kind": "multiple"
  },
  {
    "id": "OR350-47",
    "course": "OR350",
    "topic": "Flowsheets",
    "pages": [
      293
    ],
    "prompt": "A nurse repeatedly documents the same normal assessment values but must account for exceptions. Which feature supports that workflow?",
    "options": [
      "A flowsheet macro followed by exception documentation",
      "A room block",
      "A charge-profile override",
      "A category-list deletion"
    ],
    "correct": [
      0
    ],
    "rationale": "A flowsheet macro can enter a common set of values quickly; clinicians then document exceptions. Scheduling and charging configuration do not perform assessment documentation.",
    "kind": "single"
  },
  {
    "id": "OR350-48",
    "course": "OR350",
    "topic": "Security",
    "pages": [
      329
    ],
    "prompt": "True or false: Listing several OpTime Location security classes means all those location classes combine for every case.",
    "options": [
      "True",
      "False"
    ],
    "correct": [
      1
    ],
    "rationale": "Only one OpTime Location security class affects the user at a time, selected according to where the case is scheduled. Listing several does not merge them for every case.",
    "kind": "truefalse"
  }
];
