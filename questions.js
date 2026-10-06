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
    "rationale": "The log records the actual surgical event; the case is the plan. Preference lists organize orders and blocks reserve scheduling time."
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
    "rationale": "Once the log exists, later case changes do not automatically update it. Posting concerns charges and log closure, not synchronization."
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
    "rationale": "Patient, location, service, procedure, and surgeon are the five required items. Other details may be important or locally required but are not this five-item set."
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
    "rationale": "The Depot holds unscheduled cases. Post Charges supports charge posting; the other activities do not serve as the unscheduled-case queue."
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
    "rationale": "Cancel is appropriate when the planned procedure will not happen. Void is for a case created in error; shuffle and swap rearrange scheduling."
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
    "rationale": "Void identifies a case created in error. Cancel refers to a planned procedure that will not occur; charge actions do not correct duplicate case entry."
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
    "rationale": "Releasing a Signed & Held order makes it active. Cards, blocks, and posting do not replace release."
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
    "rationale": "The system uses phase of care and patient location to determine whether an order is for now or later. Card count and manufacturer do not drive this decision."
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
    "rationale": "Verify supports confirmation of required documentation. The scheduling and case-request tools serve different workflows."
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
    "rationale": "Procedure Pass tasks can be grouped by role. Posting, unscheduling, and order preference lists do not provide that task view."
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
    "rationale": "An order set groups related orders for ordering. A preference card configures surgical preferences; a block reserves time; a log records actual surgery."
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
    "rationale": "Pick lists contain medication and inventory needs. Staff and equipment assignments are resource concepts, not those pick-list contents."
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
    "rationale": "Implants require additional tracking such as action, serial number, and expiration date. Both supplies and implants can also require used and wasted quantities."
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
    "rationale": "Validation lets the clinician review device values before they enter the chart and avoids filing unnecessary data. It is not a charge-posting or scheduling function."
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
    "rationale": "Triggering sends eligible charges while keeping the log open. Posting closes the log and later changes require an addendum."
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
    "rationale": "Reporting Workbench supports this custom operational report. Blocks, order sets, and cards are configuration/workflow tools, not the reporting mechanism."
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
    "rationale": "A contact holds data for a particular encounter or time within a record. The master file groups records; a security point grants functionality."
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
    "rationale": "Record Viewer is read-only. Identifying an item there does not make it an editing or deletion tool."
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
    "rationale": "When all consumers need a change, editing the shared record avoids unnecessary copies. Roles and providers do not replace report build."
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
    "rationale": "LRP reports are composed of LPG print groups. The other records control security, shared user configuration, and charging."
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
    "rationale": "Profiles configure options inside activities. Security controls access; the other options do not configure those activity details."
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
    "rationale": "Department is more specific in the profile hierarchy. Compilation uses specificity, not edit time or automatic merging."
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
    "rationale": "Ordinary multiple-response items are all-or-nothing at the selected level. Some items have special behavior, so field help matters; automatic merging is not the general rule."
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
    "rationale": "Start broad, then configure exceptions at more-specific levels. This reduces duplicate settings and maintenance."
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
    "rationale": "There is no automatic fallback through other profile-level Workflow Engine rules when conditions do not match."
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
    "rationale": "Without continuation, rule evaluation stops after executing the directive. Roles and security are unrelated to that control flow."
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
    "rationale": "Navigator templates contain topics, which contain sections. These are different types of LVN records, not different master files."
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
    "rationale": "Startup activities collectively count as one workspace. Add the two patient workspaces and the composer: four total."
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
    "rationale": "Roles govern layout/behavior, security grants access, and profiles supply activity details. Workspace limits belong to roles, not provider records."
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
    "rationale": "In Basket, Reporting Workbench, and Shared apply to every user in the course model. Inpatient is for hospital clinical tools rather than every user."
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
    "rationale": "SER can represent a referring or referred-to provider who does not log in. EMP is needed for a login, not simply to exist as a provider."
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
    "rationale": "Provider identity links to the individual user record. A shared user template should not represent a single provider identity."
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
    "rationale": "Role, security classes, and profile are common template settings. Individual credentials belong to the individual user."
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
    "rationale": "The list is located using its master-file INI and item number. A display title alone is not its item address."
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
    "rationale": "Deactivation retires an option while preserving historical use. Reusing or changing the meaning of an existing ID can distort old data."
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
    "rationale": "All Categories indicates an Epic-controlled system list. All Custom, by contrast, is the customer-list designation."
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
    "rationale": "Location configuration can inherit system definitions when the local item is blank. This is build by exception, not a lookup through other locations."
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
    "rationale": "The example compiles item by item: a populated local item replaces all system values for that item. It does not delete the stored system configuration."
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
    "rationale": "Scheduled gap threshold evaluates the planned gap. Actual turnover thresholds concern measured turnover, not scheduled separation."
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
    "rationale": "A base procedure must be active and properly authorized for the intended service/location. Screen appearance does not determine this availability."
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
    "rationale": "ORT describes the resource type; SER represents individually tracked resources. EMP is a user and IMP is implant tracking."
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
    "rationale": "The course explicitly treats conflict checking as optional. It is not made mandatory merely by creating a resource type."
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
    "rationale": "Inactive status and missing location linkage can prevent the room from appearing. Blocking controls available/reserved time, not whether the room can be added to the report."
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
    "rationale": "The room is represented by SER; its scheduling template defines availability and blocking. Inventory and user records do not substitute for this pair."
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
    "rationale": "SUP stores shared item characteristics; BAL holds location-specific information. IMP is used for implant tracking, not the general item/balance relationship."
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
    "rationale": "The example lacks cost per unit, so the system cannot calculate the item cost. This is distinct from user, navigator, and block configuration."
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
    "rationale": "IMP tracks implant documentation/history. EMP is a user, LRP a report, and E2R a role."
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
    "rationale": "The charge code table defines the timing code and frequency. Charge settings separately identify the start and end events."
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
    "rationale": "Charge settings determine the events that bound time-based charges. The table supplies the code/frequency; a code alone does not set these event boundaries."
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
    "rationale": "The profile checks overrides in order and uses the first match; otherwise it uses the default. Only one charge settings record applies at a time."
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
    "rationale": "68 minus 60 gives eight additional minutes, so this configured example generates nine charges total. The calculation depends on the stated table, not a universal billing rule."
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
    "rationale": "Surgeon plus specific location is more specific than the surgeon’s all-locations card. The name length has no priority role."
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
    "rationale": "ORP holds both base procedures and preference cards. EAP holds procedure/charge codes; LPG and EMP serve other purposes."
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
    "rationale": "Procedure & Lab is suited to completion/results criteria. Presence of Orders can complete from a qualifying order; Generic requires manual completion."
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
    "rationale": "Generic tasks require manual completion, and universal tasks need no conditional rule just to apply to all patients. Reuse suitable existing tasks when possible."
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
    "rationale": "Flowsheets support complex calculations and concurrent documentation. SmartForms offer flexible design and scripting; reports and charging tools are not replacements for this documentation need."
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
    "rationale": "Rows and groups share FLO and use naming conventions to distinguish them. Templates use FLT; EMP represents users/templates for users."
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
    "rationale": "Only components that capture data need a storage binding. A label can display information without a data item."
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
    "rationale": "The case location type selects Procedural versus OpTime System/Location security. The login department is not the deciding factor."
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
    "rationale": "One System class combines with one applicable Location class. A location override replaces the default Location class for that case, not the System class."
  }
];
