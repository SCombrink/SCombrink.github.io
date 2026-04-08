📊 Comprehensive Budget Tracker \& Planner

A privacy-first, fully offline-capable Progressive Web App (PWA) designed for granular monthly budgeting, 12-month financial forecasting, and FNB eBucks reward tracking.



Built entirely with HTML, CSS, and Vanilla JavaScript, this app requires no backend server, no database, and no monthly subscriptions. Your financial data lives 100% locally on your device.



✨ Key Features

📊 Dynamic Budget Dashboard: Track budgeted amounts vs. actual spend with auto-calculating variances, overall net budget, and available floats.



📅 12-Month Rolling Planner: A continuous timeline to forecast future balances. It automatically imports budget margins, auto-routes credit card surpluses/deficits, and allows for manual planned entries.



💳 Smart Credit Card Tracking: Bidirectional sync between your credit limit, spent funds, and remaining funds. Updating one automatically calculates the others.



⚙️ Advanced Gross Income Engine: Automatically calculates gross salaries by aggregating linked net income, tax, and provident fund line items.



💰 FNB eBucks Checklists: Built-in, draggable, and inline-editable checklists to track reward levels, points, and minimum spend requirements for multiple profiles.



🖱️ Desktop \& Mobile Intuitive UX: \* Drag-and-drop reordering for categories, line items, and checklists.



Swipe-to-delete gestures for mobile.



Long-press multi-select for bulk locking, unlocking, or deleting.



Line-item locking to prevent accidental edits.



📱 Mobile-First PWA: Installable directly to iOS/Android home screens for instant, fullscreen, offline use.



🔒 Ultimate Privacy: Data is stored strictly in your browser's localStorage. Includes a robust JSON Export/Import system for secure backups and migrating data between your PC and phone.



🚀 How to Install \& Use (PWA)

Because this app is a Progressive Web App, you don't need to download it from an App Store.



Host the Code: Upload the repository files (index.html, manifest.json, sw.js, icon.png) to a free static hosting service like Netlify Drop or GitHub Pages.



Open on Mobile: Navigate to your hosted URL using Safari (iOS) or Chrome (Android).



Install: \* iOS: Tap the "Share" icon at the bottom of Safari, scroll down, and tap Add to Home Screen.



Android: Tap the three-dot menu in Chrome and select Add to Home screen.



The app will now appear on your home screen and run fullscreen, perfectly offline.



💾 Data Management \& Backups

This app does not sync to a cloud server. If you clear your browser cache or lose your phone, your data will be lost unless backed up.



To Backup: Open the sidebar menu and click ⬇ Export Backup. Save the resulting .json file somewhere safe (like iCloud, Google Drive, or an email).



To Restore/Migrate: Open the app on your new device, open the sidebar, click ⬆ Import Backup, and select your .json file.



🛠️ Tech Stack

Frontend: HTML5, CSS3, Vanilla JavaScript (ES6+)



Storage: Window.localStorage API



Offline Support: Service Workers \& Web App Manifest

