import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  //appId: 'io.ionic.starter',
  appId: 'io.ionic.healthyHumans',
  appName: 'healthyHumans',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000, // to show splash screen for 3 seconds
      launchAutoHide: true, // to auto-hide after the duration
      androidSplashResourceName: 'splash', // Image name for Android
      iosSplashResourceName: 'Splash', // Image name for iOS
    },
  },
};

export default config;
