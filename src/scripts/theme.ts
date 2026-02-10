// src/scripts/theme.ts

export const themes = [
  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate",
  "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden",
  "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black",
  "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade",
  "night", "coffee", "winter", "dim", "nord", "sunset"
];

export function initTheme(): string {
  if (typeof window === 'undefined') return 'dark';
  
  const savedTheme = localStorage.getItem('theme');
  const theme = savedTheme && themes.includes(savedTheme) ? savedTheme : 'dark';
  
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
}

export function changeTheme(newTheme: string): void {
  if (!themes.includes(newTheme)) return;
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  // Dispatch custom event for components that need to react to theme changes
  const event = new CustomEvent('themechange', { detail: { theme: newTheme } });
  window.dispatchEvent(event);
  
  // Force a reflow to ensure theme is applied
  document.documentElement.offsetHeight;
}

export function getTheme(): string {
  if (typeof window === 'undefined') return 'dark';
  return localStorage.getItem('theme') || 'dark';
}

// Initialize theme on load
if (typeof window !== 'undefined') {
  initTheme();
}