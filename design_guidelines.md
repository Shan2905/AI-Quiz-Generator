# AI Wiki Quiz Generator - Design Guidelines

## Design Approach

**Selected Approach:** Design System + Educational Platform References
- **Primary System:** Material Design principles for data-dense content and clear visual hierarchy
- **References:** Quizlet (quiz interactions), Notion (clean layouts), Linear (typography and spacing)
- **Rationale:** This is a utility-focused educational tool requiring clarity, efficiency, and structured information display

## Core Design Elements

### A. Typography

**Font Families:**
- Primary: Inter (via Google Fonts) - all UI text, headings, body
- Monospace: JetBrains Mono - for displaying URLs, JSON data

**Type Scale:**
- Hero/Page Titles: text-4xl font-bold (36px)
- Section Headers: text-2xl font-semibold (24px)
- Card Titles: text-xl font-semibold (20px)
- Body Text: text-base (16px)
- Small Text/Meta: text-sm (14px)
- Captions: text-xs (12px)

**Hierarchy:**
- Bold weights (font-semibold/font-bold) for all headings and interactive labels
- Regular weight (font-normal) for body content and descriptions
- Use font-medium for emphasis within paragraphs

### B. Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Tight spacing: p-2, gap-2 (8px) - within buttons, small components
- Standard spacing: p-4, gap-4 (16px) - cards, form fields
- Comfortable spacing: p-6, gap-6 (24px) - section padding
- Large spacing: p-8, gap-8 (32px) - between major sections
- Extra large: py-12, py-16, py-20 - vertical section separation

**Container Strategy:**
- Max width: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Content areas: max-w-4xl for focused reading/quiz taking
- Full-width: Tables and history views use full container width

### C. Component Library

#### Navigation & Tabs
- **Tab Navigation:** Horizontal pills-style tabs with active state indicator (underline or filled background)
- Position: Centered below page header with gap-4 between tabs
- Interactive states: Distinct active vs inactive visual treatment

#### Forms & Input
- **URL Input Field:** 
  - Full-width input with clear label "Wikipedia Article URL"
  - Placeholder: "https://en.wikipedia.org/wiki/..."
  - Large touch target (min-h-12)
  - Error state with red border and error message below
- **Submit Button:**
  - Primary CTA style, full-width on mobile, auto-width on desktop
  - Loading state with spinner and "Generating Quiz..." text
  - Disabled state while processing

#### Quiz Display Components
- **Summary Card:**
  - Top of quiz display, full-width
  - Includes article title (text-2xl), generation date, summary text
  - Clean card style with defined borders/shadows

- **Question Cards:**
  - Sequential numbering (1 of 7, 2 of 7, etc.)
  - Question text prominent (text-lg font-medium)
  - Radio button options in vertical stack with gap-3
  - Each option in clickable card/button style with hover state
  - "Show Explanation" toggle button below options
  - Explanation panel (collapsible) with distinct background

- **Metadata Sections:**
  - Key Entities: Tag/badge style layout with flex-wrap
  - Related Topics: Similar tag treatment
  - Positioned below quiz questions

- **Score Display:**
  - Prominent score card showing "X out of Y correct"
  - Percentage display
  - Appears after all questions answered

#### History Table
- **Layout:** Responsive table with overflow-x-auto wrapper
- **Columns:** ID (narrow), Title, URL (truncated with ellipsis), Date Generated, Actions
- **Row Actions:** "View Details" button per row
- **Empty State:** Centered message with icon when no quizzes exist
- **Refresh Button:** Top-right of table section

#### Modal
- **Structure:** Full-screen overlay with centered content card
- **Content Area:** max-w-4xl with max-h-[90vh] and overflow-y-auto
- **Close Button:** X icon top-right with clear clickable area
- **Inside Modal:** Complete QuizDisplay component showing full quiz

#### Loading States
- **Spinner:** Centered with "Generating quiz from Wikipedia article..." text
- **Skeleton:** Not needed - use simple spinner for all loading states

#### Error States
- **Error Messages:** Red-tinted card with error icon and descriptive text
- **Retry Action:** Clear call-to-action button within error state

### D. Animations
**Minimal Animation Strategy:**
- Tab switching: Instant, no animation
- Modal open/close: Simple fade-in/fade-out (200ms)
- Button states: Standard hover/active (no custom animations)
- Loading spinner: Rotating icon only
- NO scroll animations, parallax, or decorative transitions

## Page-Specific Layouts

### Generate Quiz Tab
**Structure (Single Column):**
1. Hero section with title and subtitle explaining the tool (py-12)
2. Input form section (max-w-2xl mx-auto, py-8)
3. Loading state OR quiz display (full width)

**Hero Section:**
- Centered text layout
- Main title: "Generate AI-Powered Quizzes from Wikipedia"
- Subtitle: Brief description of functionality (2-3 lines)
- Optional: Simple illustration/icon above title (not a large image)

### History Tab
**Structure:**
1. Section header with "Quiz History" title and refresh button (py-8)
2. Table container (full-width with responsive overflow)
3. Empty state if no quizzes OR populated table
4. Modal overlay (when viewing quiz details)

**Table Design:**
- Striped rows for readability
- Hover state on rows
- Sticky header on scroll
- Mobile: Stack into cards below md breakpoint

## Responsive Behavior

**Mobile (< 768px):**
- Single column layouts throughout
- Full-width buttons and inputs
- Table converts to card stack
- Modal takes full viewport
- Reduced padding (p-4 instead of p-8)

**Tablet (768px - 1024px):**
- Maintain single column for quiz content
- Table displays normally
- Standard padding

**Desktop (> 1024px):**
- Max-width containers centered
- Generous whitespace
- Full table features

## Accessibility Requirements
- All form inputs have associated labels (not just placeholders)
- Radio buttons grouped with fieldset/legend
- Focus indicators on all interactive elements
- Sufficient color contrast for all text
- Error messages announced to screen readers
- Keyboard navigation for modals (Escape to close)

## Images
**No large hero images required.** This is a utility-focused application where clarity and efficiency take priority. Use icons and illustrations sparingly for:
- Empty states (simple icon + text)
- Loading states (spinner icon)
- Optional: Small decorative icon in hero section of Generate tab

The design should feel clean, professional, and focused on the quiz content rather than decorative imagery.