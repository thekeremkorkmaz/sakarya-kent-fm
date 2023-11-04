"use client"
import { useGenerationStore } from '@/store/idea-generation'

const themeProvider = ({ children }: {children: React.ReactNode}) => {

    const { theme } = useGenerationStore()

    return (
        <div className={`${theme ? "bg-white text-black" : "bg-black text-white"}`}>{children}</div>
    )
}

export default themeProvider