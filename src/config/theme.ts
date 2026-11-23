/**
 * Centralized theme tokens matching src/index.css
 * All CSS variables are defined in src/index.css for single-source maintenance.
 */

export const theme = {
  colors: {
    bgPrimary: 'var(--color-bg-primary)',
    bgSecondary: 'var(--color-bg-secondary)',
    accentSecondary: 'var(--color-accent-secondary)',
    accentPrimary: 'var(--color-accent-primary)',
    accentPrimaryHover: 'var(--color-accent-primary-hover)',
    textPrimary: 'var(--color-text-primary)',
    textSecondary: 'var(--color-text-secondary)',
    accentIce: 'var(--color-accent-ice)',
  },
  rawColors: {
    bgPrimary: '#050811',
    bgSecondary: '#111A2E',
    accentSecondary: '#1E3A8A',
    accentPrimary: '#2563EB',
    accentPrimaryHover: '#1D4ED8',
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    accentIce: '#93C5FD',
  },
  fonts: {
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
  },
} as const;

export default theme;
