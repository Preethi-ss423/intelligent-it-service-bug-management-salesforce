# Intelligent IT Service & Bug Management System using Salesforce

## 📌 Project Overview

The **Intelligent IT Service & Bug Management System** is a Salesforce-based application designed to manage the complete bug lifecycle, from bug reporting and triaging to developer assignment, tracking, resolution, and closure.

## 🎯 Objectives

* Centralize bug and customer information.
* Automate developer assignment for critical bugs.
* Maintain accurate bug status and resolution details.
* Provide reports and dashboards for bug monitoring.

## 🛠️ Technologies Used

* **Salesforce**
* Custom Objects & Relationships
* Record-Triggered Flow
* Validation Rules
* Formula Fields
* **Apex & SOQL**
* **Lightning Web Components (LWC)**
* Reports & Dashboards

## 📦 Custom Objects

The project contains five custom objects:

1. **Customer** – Stores customer information.
2. **Bug** – Stores bug details, severity, status, and resolution.
3. **Developer** – Stores developer skills, team, and availability.
4. **Bug Comment** – Maintains investigation and progress comments.
5. **Knowledge Article** – Stores solutions and troubleshooting information.

## ⚙️ Key Features

### Automated Developer Assignment

A Record-Triggered Flow automatically assigns an available developer when a **Critical Bug** is created.

### Data Validation

Validation rules ensure that a bug cannot be marked **Resolved** or **Closed** without providing a resolution.

### Bug Age Calculation

A formula field automatically calculates the number of days a bug has existed.

### Apex & SOQL

An Apex controller uses SOQL to retrieve bug records and provides the data to the LWC.

### Lightning Web Component

A custom LWC displays bug records in a table with:

* Bug Number
* Bug Title
* Severity
* Status
* Assigned Developer

### Reports & Dashboard

Created reports and an **IT Bug Management Dashboard** to monitor:

* Bug Severity
* Bug Status
* Developer Workload
* Bug Type
* Overall Bug Records

## 🧪 Testing

The application was tested using multiple scenarios:

* Normal bug creation
* Critical bug with an available developer
* Critical bug when no developer is available
* Resolution validation
* Apex/SOQL and LWC data retrieval
* Reports and dashboard verification

All implemented features were successfully tested.

## 📂 Project Structure

```text
IT_Service_Management/
│
├── force-app/
│   └── main/
│       └── default/
│           ├── classes/
│           ├── lwc/
│           ├── objects/
│           ├── flows/
│           ├── reports/
│           └── dashboards/
│
└── README.md
```

## 👩‍💻 Developed By

**Preethi SS**
B.E. Computer Science & Engineering
