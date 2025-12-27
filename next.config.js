/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA)
  distDir: "build", // Changes the build output directory to `build`

  // Environment variable mapping
  // Next.js only exposes NEXT_PUBLIC_ variables by default.
  // We map REACT_APP_ variables here to make them available in the browser.
  env: {
    REACT_APP_EMAILJS_SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
    REACT_APP_EMAILJS_TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
    REACT_APP_EMAILJS_PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  },
};

export default nextConfig;
