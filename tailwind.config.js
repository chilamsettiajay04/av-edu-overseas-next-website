/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        content: "var(--max-content-width)",
      },
      spacing: {
        main: "var(--main-padding)",
        mobile: "var(--mobile-padding)",
      },
      colors: {
        // Color variables
        "color-accent": {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
        },

        // Background colors
        "color-background": "var(--background)",
        "color-background-inverted": "var(--inverted-background)",

        // Surface colors
        "color-surface-muted": "var(--surface-muted)",
        "color-surface": "var(--surface)",
        "color-surface-elevated": "var(--surface-elevated)",
        "color-surface-inset": "var(--surface-inset)",

        // Text colors
        "color-text-accent": "var(--text-accent)",
        "color-text-primary": "var(--text-primary)",
        "color-text-muted": "var(--text-muted)",
        "color-text-subtle": "var(--text-subtle)",
        "color-text-white": "var(--text-white)",
        "color-text-black": "var(--text-black)",

        // Icon colors
        "color-icon-primary": "var(--icon-primary)",
        "color-icon-muted": "var(--icon-muted)",
        "color-icon-subtle": "var(--icon-subtle)",
        "color-icon-accent": "var(--icon-accent)",
        "color-icon-success": "var(--icon-success)",
        "color-icon-warning": "var(--icon-warning)",
        "color-icon-danger": "var(--icon-danger)",

        // Navigation colors
        "color-nav-link": "var(--nav-link)",
        "color-nav-link-hover": "var(--nav-link-hover)",
        "color-nav-link-active": "var(--nav-link-active)",
        "color-nav-link-accent": "var(--nav-link-accent)",

        // Border colors
        "color-border": "var(--border-color)",
        "color-border-divider": "var(--divider-color)",

        // Overlay colors
        "color-overlay-soft": "var(--overlay-soft)",
        "color-overlay-medium": "var(--overlay-medium)",
      },

      fontSize: {
        // Font size variables
        "fontsize-display": "var(--font-display)",
        "fontsize-h1": "var(--font-h1)",
        "fontsize-h2": "var(--font-h2)",
        "fontsize-h3": "var(--font-h3)",
        "fontsize-body": "var(--font-body)",
        "fontsize-small": "var(--font-small)",
        "fontsize-caption": "var(--font-caption)",
      },

      fontFamily: {
        // Font family variables
        "fontfamily-sans": "var(--font-sans)",
        "fontfamily-mono": "var(--font-mono)",
        "fontfamily-display": "var(--font-display-family)",
      },

      fontWeight: {
        // Font weight variables
        "fontweight-regular": "var(--fw-regular)",
        "fontweight-medium": "var(--fw-medium)",
        "fontweight-bold": "var(--fw-bold)",
      },

      lineHeight: {
        // Line height variables
        "lineheight-display": "var(--lh-display)",
        "lineheight-heading": "var(--lh-heading)",
        "lineheight-body": "var(--lh-body)",
        "lineheight-small": "var(--lh-small)",
      },

      boxShadow: {
        // Shadow variables
        "shadow-sm": "var(--shadow-sm)",
        "shadow-md": "var(--shadow-md)",
      },

      // Custom utility classes (optional - if you want to use them as utilities)
      extend: {
        // You can also add these as custom utilities in the plugins section if needed
      },
    },
  },
  plugins: [],
};
