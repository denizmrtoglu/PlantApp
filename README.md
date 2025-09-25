# 🌿 PlantApp

A React Native case study implementing a plant app onboarding flow and premium features showcase.

> 📘 **Note**: Please review the technical decisions and implementation details by expanding the section below. This case study documentation contains important information about the project's architecture and design choices.

<details>
<summary>📋 Case Study Details</summary>

## Project Overview

PlantApp is a mobile application built with React Native and Expo, designed to help users manage and diagnose their plants. The app features onboarding flows, plant diagnostics, garden management, and premium features.

## Technical Decisions & Implementation Details

### State Management Strategy

The project implements a hybrid state management approach, utilizing both Context API and Redux Toolkit for different purposes:

#### Context API

- Used for managing onboarding state through `OnboardingContext`
- Chosen for its simplicity and effectiveness in handling app-wide onboarding status
- Implementation includes a custom hook `useOnboarding` for better encapsulation and type safety
- Onboarding state persisted in AsyncStorage for maintaining user progress across sessions

#### Redux Toolkit & RTK Query

- Redux infrastructure is set up but intentionally kept minimal
- Prepared for future scalability without immediate implementation
- Includes a `HomeSlice` that can be activated when needed
- This approach allows for easy integration of complex state management when the application grows

### UI Implementation

- Custom UI components built from scratch without external UI libraries
- Decision made due to the relatively small scale of the case study
- Results in slightly verbose styling code but provides complete control over the UI
- Components are modular and reusable across the application

### Theming and Dark Mode

- Dark mode support is built into the application architecture
- Currently disabled via code comments for the case study
- Can be easily enabled by uncommenting relevant sections
- Demonstrates consideration for future theme requirements

### Font Usage

- Standardized on Rubik font family throughout the application
- Made conscious decision to ignore isolated instances of different fonts in the design
- Maintains consistency in typography across the app

### Design Decisions and Optimizations

#### Design System Adjustments

- Standardized inconsistent spacing values (e.g., 1.32px margins) to follow industry best practices
- Implemented multiples of 2px for spacing and layout
- These adjustments improve maintainability and visual consistency

#### Notable Improvements

1. Spacing Standardization

   - Converted irregular spacing values to standard increments
   - Improved visual rhythm and maintainability

2. Typography Consistency

   - Standardized font usage to Rubik
   - Eliminated one-off font variations for better maintainability

3. Component Architecture
   - Organized components by feature and shared functionality
   - Maintained clear separation of concerns

### Data Persistence

- Utilized AsyncStorage for maintaining user preferences and onboarding state
- Implemented proper type safety and error handling for storage operations

## Areas for Future Enhancement

1. UI Library Integration

   - Consider adding a UI library if component complexity increases
   - Would reduce styling verbosity and standardize component behavior

2. Redux Implementation

   - Activate prepared Redux infrastructure when needed
   - Already set up for seamless integration of complex state management

3. Theme Toggle
   - Enable dark mode implementation
   - Add user controls for theme switching

## Development Practices

- Implemented TypeScript for type safety
- Followed modular component architecture
- Maintained consistent coding style and patterns
- Used custom hooks for reusable logic

## Conclusion

The implementation successfully balances immediate requirements with future scalability. While some design inconsistencies were present in the original specifications, the final implementation makes thoughtful adjustments to improve the overall user experience and code maintainability.

</details>

## 📱 Features

- Onboarding screens with smooth animations
- Home screen with categories and questions
- Premium features paywall implementation
- Tab-based navigation (Home, Scan, Diagnose, Garden, Profile)
- Cross-platform support (iOS, Android)
- Offline data persistence with AsyncStorage

## 🛠 Tech Stack

- [Expo](https://expo.dev) - React Native framework with Expo Router
- [React Native](https://reactnative.dev/) - Mobile app framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [Jest](https://jestjs.io/) & [@testing-library/react-native](https://callstack.github.io/react-native-testing-library/) - Testing

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- [Expo Go](https://expo.dev/client) app installed on your mobile device

### Installation

1. Clone the repository:

   ```bash
   git clone [repository-url]
   cd PlantApp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

#### Development

1. Start the development server:

   ```bash
   npx expo start
   ```

2. Running with Expo Go:
   - Scan the QR code with your mobile device
   - For iOS: Use the Camera app
   - For Android: Use the Expo Go app
   - Or press 'a' for Android emulator or 'i' for iOS simulator

#### Web

```bash
npm run web
```

#### Testing

Run the tests in watch mode:

```bash
npm test
```

## 📱 Running with Expo Go

### Quick Start with QR Code

Scan this QR code with your device to open the app directly in Expo Go:

![Expo Go QR Code](eas-launch.svg)

- iOS: Use the Camera app
- Android: Use the Expo Go app's QR scanner

The app will automatically load on your device through Expo Go.

### Manual Setup

If you need to run the app locally:

1. Make sure you have the Expo Go app installed on your device:

   - [iOS App Store](https://apps.apple.com/app/apple-store/id982107779)
   - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Start the development server:

   ```bash
   npx expo start
   ```

3. Scan the QR code that appears in your terminal

Note: Some features might have limitations in Expo Go due to native dependencies.

## 🏗 Project Structure

```
PlantApp/
├── app/                   # Application screens and navigation
├── assets/               # Static assets (images, icons)
├── components/           # Reusable components
├── constants/            # App constants and theme
├── context/             # React Context providers
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── providers/           # App providers (Redux, etc.)
├── services/            # API services
├── store/               # Redux store configuration
└── types/               # TypeScript type definitions
```

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
# Add your environment variables here
EXPO_PUBLIC_API_URL=your_api_url
```

Note: Never commit the `.env` file to version control.
