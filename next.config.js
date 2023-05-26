/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    //TODO change env to process.env
    FIREBASE_API_KEY: "AIzaSyDPpD1OBFdjcPDAUxh8CbomNoAwke-Hlig",
    FIREBASE_AUTH_DOMAIN: "lidlomix-2e3d3.firebaseapp.com",
    FIREBASE_PROJECT_ID: "lidlomix-2e3d3",
    FIREBASE_STORAGE_BUCKET: "lidlomix-2e3d3.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID: "345274050030",
    FIREBASE_APP_ID: "1:345274050030:web:22edc1beacee68c1f6daff",
  },
};

module.exports = nextConfig;

// env: {
//   FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   FIREBASE_MESSAGING_SENDER_ID:
//     process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// },
