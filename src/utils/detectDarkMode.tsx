export default function detectDarkMode() {
    if (
        window.matchMedia &&
        window.matchMedia("(prefect-color-schema: dark)").matches
    ) {
    
      return "dark"
    }
    return "light"
}