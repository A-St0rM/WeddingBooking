# 03: Login and roles

**What to build:** Staff log in before they can see anything. The API knows who is calling and which of the five roles they hold — event manager, ejer, bogholder, kok, event producer. The roles exist and are resolved on every request, but do not yet restrict anything; that arrives in ticket 12.

Login is Supabase's. Every authorisation decision after it is ours, in one place in the API (ADR-0002).

**Blocked by:** 01

**Status:** ready-for-agent

**Repos:** frontend, backend

- [ ] A user logs in and stays logged in across a page refresh
- [ ] An unauthenticated request to any Booking endpoint is rejected
- [ ] The API resolves the caller to a Bruger with a Rolle on every request
- [ ] All five roles exist and can be assigned
- [ ] Logging out ends the session
- [ ] Tests cover both an authenticated and an unauthenticated call to the same endpoint
- [ ] The frontend never queries Supabase for anything but login
