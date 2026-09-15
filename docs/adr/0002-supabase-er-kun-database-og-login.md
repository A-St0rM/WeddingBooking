# Supabase is only Postgres and login; .NET owns all writes

The stack is React + .NET + Supabase, hosted on Azure. Supabase is more than a database — it also offers an auto-generated API and row-level security — and .NET is a full backend in its own right. Using both without deciding means two places enforce access control, and sooner or later they disagree.

We use Supabase for exactly two things: managed Postgres, and user login. The React app talks **only** to the .NET API; it never reads or writes Supabase directly. .NET validates the Supabase login token and is the single writer to the database. Row-level security is not used.

The alternative — letting React read from Supabase directly under row-level security, with .NET reduced to an integration layer — is faster to start and becomes painful the moment a rule like "the chef may see only menu and allergy information" has to hold in two systems at once. Keeping one place that decides who may do what also means one place to debug, and one thing to explain when defending the design.
