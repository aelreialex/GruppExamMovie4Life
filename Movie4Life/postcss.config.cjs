// Detta är en inställningsfil för PostCSS (ett verktyg som bearbetar CSS)
// Den behövs för att Mantine's CSS ska fungera korrekt

module.exports = {
  plugins: {
    // Mantine's egna PostCSS-plugin (bearbetar Mantine's CSS)
    "postcss-preset-mantine": {},
    // Hanterar CSS-variabler (t.ex. $mantine-breakpoint-xs)
    "postcss-simple-vars": {
      variables: {
        // Detta är Mantine's brytpunkter för responsiv design
        // "36em" betyder: vid skärmbredd 576px eller mer
        "mantine-breakpoint-xs": "36em", // Extra small (mobil)
        "mantine-breakpoint-sm": "48em", // Small (surfplatta)
        "mantine-breakpoint-md": "62em", // Medium (liten dator)
        "mantine-breakpoint-lg": "75em", // Large (stor dator)
        "mantine-breakpoint-xl": "88em", // Extra large (stor skärm)
      },
    },
  },
};
