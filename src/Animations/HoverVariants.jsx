const HoverVariants = {
  hovered: {
    y: "-0.25rem",
    backgroundImage: "linear-gradient(0deg, var(--grey-100), var(--highlight-2))",
    transition: {
        duration: 0.1,
        type: 'tween',
        ease: 'easeInOut'
    }
  }
}

export { HoverVariants }
