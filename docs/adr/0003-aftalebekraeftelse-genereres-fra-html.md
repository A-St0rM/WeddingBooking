# The Aftalebekræftelse is generated from an HTML template, not the client's Word document

The Aftalebekræftelse must end up as a PDF, because that is the only format e-conomic accepts as an attachment (and only while the document is still a draft). The client has an existing Word template that they fill in by hand today.

We generate the document from an HTML template rather than merging into their Word file. Converting Word to PDF on a server is historically the single most troublesome part of projects like this, and there is no schedule room to discover that in week four. HTML also gives us in-browser preview essentially for free, which directly serves the requirement that nothing is ever sent to a couple without being read through first.

The real cost: the manor house can no longer edit the document's layout themselves without touching code. That is a genuine regression from today, accepted deliberately and revisitable later.
