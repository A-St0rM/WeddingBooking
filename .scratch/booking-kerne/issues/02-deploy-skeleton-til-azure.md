# 02: Deploy the skeleton to Azure

**What to build:** The same create-and-list flow, running on a URL that opens on a phone. Deliberately placed in week one rather than at the end: a system that has never been deployed is not a system, and every deployment problem found now is a problem not found the night before the exam.

**Blocked by:** 01

**Status:** ready-for-agent

**Repos:** frontend, backend

- [ ] The API runs on Azure and answers its health check over HTTPS
- [ ] The frontend is served from Azure and reaches the API
- [ ] The deployed frontend can create and list Bookings against the deployed database
- [ ] It is usable on a phone screen at 375px wide
- [ ] No secret is committed to either repository; configuration comes from application settings
- [ ] Deploying again is a documented command or pipeline, not a sequence of clicks somebody has to remember
