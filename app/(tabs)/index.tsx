import React from 'react';
// Import your HomePage component
import HomePage from '../../app/page'; // Adjust the path as necessary

export default function HomeScreen() {
  return (
    // Render your HomePage component here
    <HomePage />
  );
}

// You can remove the StyleSheet and related components if HomePage handles its own styling
// or if you don't need the default Expo welcome screen styles.
// For now, I'm keeping the styles constant to avoid breaking anything if they're used elsewhere.
// If you only want to render HomePage, you can remove the ParallaxScrollView and its children
// and just return <HomePage />.

// If you want to completely replace the default content and styles,
// your index.tsx can be as simple as this:
/*
import React from 'react';
import HomePage from '../../components/HomePage'; // Adjust the path as necessary

export default function HomeScreen() {
  return (
    <HomePage />
  );
}
*/

// If you need to keep some global styles or context from the original index.tsx,
// you might wrap HomePage within some of the existing components,
// but for a clean replacement, just rendering HomePage directly is often best.
