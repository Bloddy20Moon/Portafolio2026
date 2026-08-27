# Graph Report - portafolio  (2026-08-26)

## Corpus Check
- 21 files · ~19,227 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 104 nodes · 99 edges · 16 communities (9 shown, 7 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b3815c2d`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- page.tsx
- devDependencies
- compilerOptions
- include
- package.json
- AGENTS.md
- layout.tsx
- lib
- eslint.config.mjs
- next.config.ts
- postcss.config.mjs
- rules/graphify.md
- workflows/graphify.md
- next-env.d.ts

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `include` - 7 edges
3. `scripts` - 5 edges
4. `lib` - 4 edges
5. `Footer()` - 2 edges
6. `Navbar()` - 2 edges
7. `About()` - 2 edges
8. `ContactCTA()` - 2 edges
9. `Hero()` - 2 edges
10. `Projects()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (16 total, 7 thin omitted)

### Community 0 - "page.tsx"
Cohesion: 0.14
Nodes (10): Footer(), Navbar(), About(), ContactCTA(), Hero(), Project, Projects(), PROJECTS_DATA (+2 more)

### Community 1 - "devDependencies"
Cohesion: 0.12
Nodes (17): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node (+9 more)

### Community 2 - "compilerOptions"
Cohesion: 0.13
Nodes (15): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, module, moduleResolution (+7 more)

### Community 3 - "include"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 4 - "package.json"
Cohesion: 0.12
Nodes (15): next, dependencies, next, react, react-dom, name, private, scripts (+7 more)

### Community 6 - "layout.tsx"
Cohesion: 0.33
Nodes (4): hankenGrotesk, inter, jetbrainsMono, metadata

### Community 7 - "lib"
Cohesion: 0.50
Nodes (4): dom, dom.iterable, esnext, lib

## Knowledge Gaps
- **54 isolated node(s):** `hankenGrotesk`, `inter`, `jetbrainsMono`, `metadata`, `Project` (+49 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **7 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `compilerOptions` to `include`, `lib`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **What connects `hankenGrotesk`, `inter`, `jetbrainsMono` to the rest of the system?**
  _54 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14210526315789473 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.125 - nodes in this community are weakly interconnected._