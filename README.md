# 📅 Timeline Scheduler

A responsive and interactive timeline component that allows users to view, create, and edit events within a horizontally scrollable date grid

## 🚀 Features

- 📆 Horizontal date-based timeline
- 🧠 Auto lane allocation to avoid event overlapping
- ➕ Click-to-create events on specific days
- 🎨 Color-coded event blocks
- ✏️ Inline editing of event titles
- ⏪ Navigate back/forth in time
- 🗓 Dynamic time window (1 week, 2 weeks, 3 weeks)
- 🔄 Persistent modal for creating and editing events
- 🌍 Localized date formatting using `date-fns`

## 🛠️ Tech Stack

- **React** + **TypeScript**
- **Styled-components**
- **Vite** for fast development
- **date-fns** for date formatting and manipulation

## 🧪 How to Run Locally

- **pnpm install**
- **pnpm run dev**

## 🧱 About my arch

- **I designed a simple, scalable file structure focused on maintainability and separation of concerns**

- `components/`: folder for **global reusable components** that could be shared across multiple screens.

- `constants/`: stores **static values**, like the sample data used in the timeline.

- `routes/`: responsible for **routing configuration**, if the app grows and needs multiple pages.

- `screens/TimeLine/`: feature-specific folder that **encapsulates everything related to the timeline**, making the feature isolated and easy to maintain.

  - `components/`: contains **timeline-only components**, like the Header, Body, and Modal used to display and edit events.

  - `hooks/`: stores **timeline-specific hooks**, such as state handling, slider logic, and date calculation.

- `theme/`: holds the **styled-components theme configuration**, including spacing, colors, and typography.

- `types/`: defines **TypeScript interfaces and types**, making the app strictly typed and safe to scale.

- `utils/`: contains **helper functions**, like functions for date formatting or other reusable logic.

- `App.tsx`: the **entry point** of the application, where everything is mounted.
