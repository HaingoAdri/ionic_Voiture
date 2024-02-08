import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.carapp',
  appName: 'CarApp',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
