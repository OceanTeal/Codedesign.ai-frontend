# Code Export Interface - React.js

A modern React.js application that provides a code export interface with modal dialogs and tabbed content for managing website code downloads.

## Features

- **React Components**: Built with modern React.js using functional components and hooks
- **State Management**: Uses React useState for local state management
- **Event Handling**: Proper React event handling with onClick, onChange, and useEffect
- **Responsive Design**: Mobile-first responsive design with CSS media queries
- **Modal Interface**: Interactive modal with backdrop blur and click-outside-to-close
- **Tab Navigation**: Switch between HTML/CSS and Next.js export options
- **Custom Checkboxes**: Styled checkbox components with custom animations
- **Accessibility**: Keyboard navigation support (Escape key to close modal)

## React Concepts Demonstrated

✅ **Components**: Modular, reusable components (ExportButton, ExportModal, TabContainer, etc.)
✅ **Props**: Component props for data passing and event handling
✅ **State Management**: useState hooks for managing component state
✅ **Event Handling**: onClick, onChange, and useEffect for user interactions
✅ **Conditional Rendering**: Dynamic content based on active tab
✅ **Component Composition**: Building complex UI from simple components

## Project Structure

```
src/
├── components/
│   ├── ExportButton.jsx      # Main export button
│   ├── ExportModal.jsx       # Modal container
│   ├── ModalHeader.jsx       # Modal header with title and close button
│   ├── TabContainer.jsx      # Tab navigation
│   ├── TabContent.jsx        # Tab content with state management
│   ├── ExportTypeCard.jsx    # Export type display card
│   ├── OptionCheckbox.jsx    # Custom checkbox component
│   └── DownloadButton.jsx    # Download action button
├── App.jsx                   # Main application component
├── main.jsx                  # Application entry point
├── App.css                   # Component styles
└── index.css                 # Global styles
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy your image files to the `public/` directory:
   - Copy `frontend/image.png` to `public/image.png`
   - Copy `frontend/icons8-react-native-50.png` to `public/icons8-react-native-50.png`

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## Key React Implementation Details

### State Management
- **Modal State**: `isModalOpen` in App component
- **Tab State**: `activeTab` in ExportModal component
- **Options State**: Separate state objects for HTML and Next.js options

### Event Handling
- **Modal Events**: Click outside, escape key, close button
- **Tab Events**: Tab switching with state updates
- **Checkbox Events**: Option toggling with state management
- **Download Events**: Download button clicks with option logging

### Component Communication
- **Props Down**: State and event handlers passed down to child components
- **Events Up**: Child components call parent functions via props
- **State Lifting**: Shared state managed at appropriate component levels

## Deployment

This application can be easily deployed to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the `gh-pages` package

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Touch-friendly interactions

## License

MIT License
