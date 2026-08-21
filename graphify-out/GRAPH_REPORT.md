# Graph Report - portafolio  (2026-08-20)

## Corpus Check
- Corpus is ~3,069 words - fits in a single context window. You may not need a graph.

## Summary
- 96 nodes · 99 edges · 11 communities (8 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- React Components and Pages
- Development Dependencies
- TypeScript Compiler Options
- TypeScript Project Config
- Package Configuration and Scripts
- Runtime Dependencies
- Application Layout and Fonts
- TypeScript Library Environment
- ESLint Configuration
- Next.js Configuration
- PostCSS Configuration

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
10. `OpenSource()` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (11 total, 3 thin omitted)

### Community 0 - "React Components and Pages"
Cohesion: 0.13
Nodes (10): Footer(), Navbar(), About(), ContactCTA(), Hero(), OpenSource(), Projects(), Stack() (+2 more)

### Community 1 - "Development Dependencies"
Cohesion: 0.12
Nodes (17): eslint, eslint-config-next, devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node (+9 more)

### Community 2 - "TypeScript Compiler Options"
Cohesion: 0.13
Nodes (15): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, module, moduleResolution (+7 more)

### Community 3 - "TypeScript Project Config"
Cohesion: 0.20
Nodes (9): **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts, .next/types/**/*.ts, node_modules, **/*.ts, **/*.tsx, exclude (+1 more)

### Community 4 - "Package Configuration and Scripts"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, lint, start, version

### Community 5 - "Runtime Dependencies"
Cohesion: 0.29
Nodes (7): next, dependencies, next, react, react-dom, react, react-dom

### Community 6 - "Application Layout and Fonts"
Cohesion: 0.33
Nodes (4): hankenGrotesk, inter, jetbrainsMono, metadata

### Community 7 - "TypeScript Library Environment"
Cohesion: 0.50
Nodes (4): dom, dom.iterable, esnext, lib

## Knowledge Gaps
- **49 isolated node(s):** `hankenGrotesk`, `inter`, `jetbrainsMono`, `metadata`, `eslintConfig` (+44 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Development Dependencies` to `Package Configuration and Scripts`?**
  _High betweenness centrality (0.082) - this node is a cross-community bridge._
- **Why does `compilerOptions` connect `TypeScript Compiler Options` to `TypeScript Project Config`, `TypeScript Library Environment`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **Why does `dependencies` connect `Runtime Dependencies` to `Package Configuration and Scripts`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **What connects `hankenGrotesk`, `inter`, `jetbrainsMono` to the rest of the system?**
  _49 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `React Components and Pages` be split into smaller, more focused modules?**
  _Cohesion score 0.1341991341991342 - nodes in this community are weakly interconnected._
- **Should `Development Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._
- **Should `TypeScript Compiler Options` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._