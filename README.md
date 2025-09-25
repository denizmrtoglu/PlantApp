# 🌿 PlantApp

A React Native case study implementing a plant app onboarding flow and premium features showcase.

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

## 📝 Development Guidelines

- Follow the TypeScript best practices
- Use functional components with hooks
- Implement proper error handling
- Write clean, maintainable code
- Follow the established project structure
- Use appropriate naming conventions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
