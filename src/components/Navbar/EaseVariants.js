const EaseVariants = {
    closed: {
        opacity: 0,
        x: -100,
    },
    open: {
        opacity: 0.95,
        x: 0,
    },
    exit:{
        opacity: 0,
        x: -100,
        transition: { 
            delay: 0.7, 
            duration: 0.3 
        }
    }
}
export { EaseVariants }