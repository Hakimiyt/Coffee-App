# ☕ Coffee App

A mobile coffee app built with React Native (Expo). Run it directly on your phone using **Expo Go**, with no need to build an APK.

## Features

- Browse coffee menu
- Clean, mobile-friendly screens
- Runs on both Android and iOS via Expo Go

## Screenshots

<img width="596" height="1281" alt="image" src="https://github.com/user-attachments/assets/bdbe20ef-aaf5-49b9-8c82-c54af111031a" />
<img width="596" height="1279" alt="image" src="https://github.com/user-attachments/assets/11322c35-4ae3-4c73-86cf-5c641dc1b370" />
<img width="600" height="1280" alt="image" src="https://github.com/user-attachments/assets/bd8f9d8c-6b08-453e-948d-050a68c0c7b5" />
<img width="596" height="1278" alt="image" src="https://github.com/user-attachments/assets/0392c0f2-4b5c-4719-922c-36dc3f23c10b" />
<img width="596" height="1278" alt="image" src="https://github.com/user-attachments/assets/8fe449e7-85c1-4061-a2e1-ca720220e599" />

## Requirements

- [Node.js](https://nodejs.org/) (LTS version)
- [Git](https://git-scm.com/) 
- The **Expo Go** app on your phone:
  - [Android (Play Store)](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - [iOS (App Store)](https://apps.apple.com/app/expo-go/id982107779)

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Hakimiyt/Coffee-App.git
cd Coffee-App
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the app

```bash
npx expo start
```

A QR code will appear in your terminal.

### 4. Open it on your phone

- **Android:** Open Expo Go → tap **Scan QR code** → scan the QR code in the terminal.
- **iOS:** Open the default **Camera** app → scan the QR code → tap the notification to open it in Expo Go.

> ⚠️ Your phone and computer must be connected to the **same WiFi network**.

## Troubleshooting

**App won't connect / keeps loading?**
Try tunnel mode:

```bash
npx expo start --tunnel
```

**Strange errors or cache issues?**

```bash
npx expo start -c
```

**Expo Go version doesn't match the project's SDK?**
Update Expo Go on your phone to the latest version.

**Using a hotspot or public/campus WiFi?**
Some networks block device-to-device connections. Use `--tunnel` or your phone's hotspot instead.

## Project Structure

```
Coffee-App/
├── assets/        # Images and static files
├── screens/       # App screens
├── App.js         # App entry point
├── app.json       # Expo configuration
├── index.js
└── package.json
```

## Tech Stack

- React Native
- Expo

## Author

[Hakimiyt](https://github.com/Hakimiyt)

## License

See the [LICENSE](LICENSE) file for details.
