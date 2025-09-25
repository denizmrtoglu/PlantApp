# 🌿 PlantApp

A modern plant care and diagnosis application built with Expo and React Native.

## 📱 Features

- Plant disease diagnosis
- Personal garden management
- Plant scanning capabilities
- Premium features with subscription
- Responsive and beautiful UI with Mantine
- Cross-platform support (iOS, Android, Web)

## 🛠 Tech Stack

- [Expo](https://expo.dev) - React Native framework
- [Next.js](https://nextjs.org) (Pages Router) - Web framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) - Data fetching
- [Mantine](https://mantine.dev/) - UI components
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation

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

## 📱 Running with Expo Go

1. Make sure you have the Expo Go app installed on your device:

   - [iOS App Store](https://apps.apple.com/app/apple-store/id982107779)
   - [Android Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. Start the development server:

   ```bash
   npx expo start
   ```

3. Scan the QR code:

   - iOS: Use the Camera app
   - Android: Use the Expo Go app's QR scanner

4. The app will automatically load on your device through Expo Go

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
API_URL=your_api_url
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
