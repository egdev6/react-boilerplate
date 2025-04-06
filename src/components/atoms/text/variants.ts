import { cva } from "class-variance-authority"

export const textVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      as: {
        h1: ["text-4xl"],
        h2: ["text-3xl"],
        h3: ["text-2xl"],
        h4: ["text-xl"],
        h5: ["text-lg"],
        h6: ["text-base"],
        p: ["text-base"],
        span: ["text-base"],
        label: ["text-sm"],
        small: ["text-xs"],
      },
      color: {
        text: ["text-text", "dark:text-dark-text"],
        primary: ["text-primary"],
        secondary: ["text-secondary"],
        accent: ["text-accent"],
        background: ["text-background", "dark:text-dark-background"],
        yellow: ["text-yellow"],
        gray: ["text-gray"],
        white: ["text-white"],
        black: ["text-black"],
      },
      weight: {
        thin: ["font-thin"],
        extralight: ["font-extralight"],
        light: ["font-light"],
        normal: ["font-normal"],
        medium: ["font-medium"],
        semibold: ["font-semibold"],
        bold: ["font-bold"],
        extrabold: ["font-extrabold"],
        black: ["font-black"],
      },
      font: {
        primary: ["font-primary"],
        secondary: ["font-secondary"],
        secondaryBold: ["font-secondary-bold"],
      }
    },
    defaultVariants: {
      as: "p",
      color: "text",
      weight: "normal",
      font: "secondary"
    },
  }
)