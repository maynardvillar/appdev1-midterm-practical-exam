# APPDEV1 MIDTERM PRACTICAL EXAM

**Objectives:**
Each Part below gives you an **Objective** — what you're demonstrating — and a set of **Requirements** — what must be true when you're done. It is not a numbered list of steps. You decide the file names, component structure, and exact JSX/CSS needed to satisfy each requirement.

This is intentional: a checklist only proves you can follow instructions. Requirements prove you understand *why* each concept works — which is what actually matters once you're writing React.

The Parts, their point values, and their required commit messages work exactly the same way as a standard walkthrough: commit at the end of every Part using the exact message given, in the order the Parts appear, so your Git history still shows the same incremental proof of independent work.

---

Before you start the Parts below, get a yellow piece of paper and write down the following:

- Date
- Full Name
- Course and Year
- Subject
- Laboratory Activity → APPDEV1 Midterm Practical Exam

In every Part there is an **Important Note** that you need to follow. Write the answer down on the same yellow paper.

---

## Part 1 — Environment Setup & Scaffolding

**Objective:** Get a working React development environment ready that the rest of this exam builds on.

**Requirements** — all of the following must be true when you're done:

- A React project scaffolded with Vite runs locally without errors (name it `appdev1-practical-exam`).
- The default Vite starter boilerplate — its starter JSX and starter CSS — has been removed from the entry files. You're starting from a clean slate, not the default react app.
- The project is tracked in Git, with an initial commit made before you begin Part 2.

**Required commit message:**
`Practical Exam Part 1: Project scaffolded and cleaned up`

**Important Note:** Before you commit it, write down the part title in the paper and list down what are the exact files that you edit, just enumerate them. Take a picture and name it `lastname-part-1` and save it inside the `src/assets/` folder. You can now stage and commit part 1.

---

## Part 2 — Creating & Nesting Components

**Objective:** Prove you can decompose a UI into components and assemble them into a tree.

**Requirements** — all of the following must be true when you're done:

- The rendered page includes, at minimum, a header area, a list/section of at least three distinct items, and a footer.
- At least one component must return multiple sibling elements wrapped in a React Fragment (`<>...</>`) instead of a `<div>`.
- At least one component is nested inside another component's own JSX, not just placed alongside it in `App.jsx`.
- At least one small component is deliberately reused more than once on the page (for example, as a visual separator between items).
- Every component lives in its own file; `App.jsx` composes them through imports rather than containing all the markup itself.

**Required commit message:**
`Practical Exam Part 2: Component tree created and nested`

**Important Note:** Before you commit it, write down the part title in the paper and list down what are the exact files that you created, just enumerate them. Take a picture and name it `lastname-part-2` and save it inside the `src/assets/` folder. You can now stage and commit part 2.

---

## Part 3 — Import & Export

**Objective:** Show you understand the difference between default and named exports/imports, and how import paths behave when files move.

**Requirements** — all of the following must be true when you're done:

- Somewhere in your project, a component's default export is imported under a different local name than usual, and the app still works correctly.
- A separate file exports at least two constants as named exports (not default), and at least one component consumes them through a named import.
- Your related components are organized into a logical subfolder, and every import path affected by that move is correct — nothing is broken after the reorganization.

**Required commit message:**
`Practical Exam Part 3: Import/export and folder reorganization complete`

**Important Note:** Before you commit it, write down the part title in the paper and list down the exact files whose import statements you had to update because of the folder reorganization, just enumerate them. Take a picture and name it `lastname-part-3` and save it inside the `src/assets/` folder. You can now stage and commit part 3.

---

## Part 4 — JavaScript Expressions Inside JSX

**Objective:** Show you can compute values with plain JavaScript and inject them into JSX, instead of hardcoding something that should be dynamic.

**Requirements** — all of the following must be true when you're done:

- A value is produced by calling a function directly inside a JSX expression (called inline — not pre-computed and stored separately).
- A string is assembled from two or more variables — using a template literal or concatenation — and rendered inside JSX.
- A numeric expression (not a raw literal) is evaluated inside JSX and displayed.
- A boolean condition determines which of two pieces of text is shown, using a ternary expression inside JSX — not an if statement, and not two elements toggled with CSS.

**Required commit message:**
`Practical Exam Part 4: JSX expressions implemented`

**Important Note:** Before you commit it, write down the part title in the paper and, for each of the four expression types you used (function call, template literal/concatenation, arithmetic, ternary), write down which file contains it, just enumerate them. Take a picture and name it `lastname-part-4` and save it inside the `src/assets/` folder. You can now stage and commit part 4.

---

## Part 5 — Styling With Stylesheets

**Objective:** Demonstrate the CSS fundamentals covered in class: the global cascade, className, component-scoped stylesheets, and basic Flexbox layout.

**Requirements** — all of the following must be true when you're done:

- A global stylesheet, imported once, visibly styles the whole page (font, background, text color).
- At least one class defined in that global stylesheet is applied via `className` inside a component file that never imports the stylesheet itself — proof you understand that CSS classes aren't scoped by import the way JavaScript modules are.
- At least one component has its own dedicated stylesheet, imported only where that component is used.
- The page's major sections (header, list, footer) are laid out with Flexbox and are evenly spaced, not stacked with default browser spacing.

**Required commit message:**
`Practical Exam Part 5: Styling and layout complete`

**Important Note:** Before you commit it, write down the part title in the paper and write down the exact class name from your global stylesheet that you applied inside a component file which never imports that stylesheet, plus the name of that file. Take a picture and name it `lastname-part-5` and save it inside the `src/assets/` folder. You can now stage and commit part 5.

---

## Part 6 — Debug Challenge

**No AI tools allowed for this Part**

**Objective:** Diagnose and fix a broken component entirely on your own.

You are given the component `ItemCard.jsx`. It is meant to display an item's name, category, a calculated count, and a status line that depends on a boolean — using only concepts covered in Parts 1–4 (components, exports, Fragments, className, JSX expressions, template literals, arithmetic, and ternaries). As written, it does not compile, or renders incorrectly.

**Requirements** — all of the following must be true when you're done:

- Figure out every bug yourself. No AI assistance of any kind for this Part — not to find the bugs, not to explain them.

**Required commit message:**
`Practical Exam Part 6a: Bugs identified before fixing`

**Important Note:** Before you commit it, write down the part title (Part 6a) in the paper and list down every bug you found in the component and a one-line reason for each, just enumerate them. Take a picture and name it `lastname-part-6a` and save it inside the `src/assets/` folder. You can now stage and commit part 6a.

**Requirements** — all of the following must be true when you're done:

- Fix the component so it compiles and renders exactly as intended, with no leftover syntax errors.

**Required commit message:**
`Practical Exam Part 6b: [ComponentName] component fixed`
*Replace `[ComponentName]` with the actual name of the component you fixed (e.g., `ItemCard`).*

**Important Note:** Before you commit it, write down the part title (Part 6b) in the paper and list down the exact files you edited to fix the bugs, just enumerate them. Take a picture and name it `lastname-part-6b` and save it inside the `src/assets/` folder. You can now stage and commit part 6b.

---

## Part 7 — Antigravity-Assisted Styling

**Objective:** Use an AI coding agent the way a professional does: with a documented intent, written down before letting it act.

**Requirements** — all of the following must be true when you're done:

- The Antigravity CLI is installed and authenticated with your personal Gmail account.
- You write a prompt describing the styling improvements you want, scoped only to your existing global stylesheet and the dedicated component stylesheet from Part 5 — no new files.

**Required commit message:**
`Practical Exam Part 7a: Antigravity prompt saved`

**Important Note:** Before you commit it, write down the part title (Part 7a) in the paper and write down the exact prompt you are about to give Antigravity, word for word. Take a picture and name it `lastname-part-7a` and save it inside the `src/assets/` folder. You can now stage and commit part 7a.

**Requirements** — all of the following must be true when you're done:

- After running the prompt, the app still works and the improvement is visibly reflected.

**Required commit message:**
`Practical Exam Part 7b: Antigravity styling applied`

**Important Note:** Before you commit it, write down the part title (Part 7b) in the paper and list down the exact files Antigravity modified, just enumerate them. Take a picture and name it `lastname-part-7b` and save it inside the `src/assets/` folder. You can now stage and commit part 7b.

---

## Submission Requirements

Inside your repository:

- Confirm `src/assets/` contains every required picture.
- Ensure every commit listed in this exam is present in your commit history, in order, with its exact required message, and that each Part's picture was committed together with that Part's commit.
- Push all commits to your remote GitHub repository.

**Deadline:** August 1, on or before 3pm.