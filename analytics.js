import { inject } from '@vercel/analytics';

// Inject Vercel Analytics into the page
inject({
  mode: 'auto', // Automatically detect environment (production/development)
  debug: false, // Set to true to see debug logs in development
});
