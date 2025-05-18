import { ref, onMounted } from "vue";

type Theme = "light" | "dark";

export const useTheme = () => {
    const theme = ref<Theme>("light");

    onMounted(() => {
        if (typeof window === "undefined") return;

        const savedTheme = localStorage.getItem("theme") as Theme | null;

        const preferredTheme: Theme =
            savedTheme ||
            (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

        theme.value = preferredTheme;
        document.documentElement.classList.toggle("dark", preferredTheme === "dark");
    });

    const toggleTheme = () => {
        const newTheme = theme.value === "light" ? "dark" : "light";
        theme.value = newTheme;
        localStorage.setItem("theme", newTheme);

        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return { theme, toggleTheme };
};
