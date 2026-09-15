# Danish domain terms are kept in Danish

The domain is irreducibly Danish — *brudepar*, *aftalebekræftelse*, *afvikling*, *opdækning* — and the users, the client and the examiner all work in Danish. The UI is therefore in Danish, while code and documentation are in English.

Domain terms that have no faithful English equivalent stay in Danish in the code, spelled exactly as `CONTEXT.md` spells them: `Aftalebekræftelse`, not `Confirmation`; `Afvikling`, not `Execution`. Structural names stay English: `BookingRepository`, `SyncService`. Inventing English near-synonyms for Danish domain concepts is how a domain model quietly rots — the near-synonym carries connotations the Danish word does not, and within a month two slightly different concepts are wearing the same name.

The cost is a visibly mixed codebase, which some readers dislike. We accept that; the alternative costs precision where precision matters most.

## File and folder names are ASCII-folded

`æøå` never appear in a path: `klargoering/`, not `klargøring/`; `0003-aftalebekraeftelse-...`, not `0003-aftalebekræftelse-...`. macOS and Linux normalise these characters differently, and enough tooling still mishandles them that a repo which works on one machine can fail on another for reasons nobody enjoys tracking down.

This applies to paths only. Inside the files, the Danish spelling stands exactly as `CONTEXT.md` gives it — `Gæsteantal`, `Klargøring`, `PrGæst`.
