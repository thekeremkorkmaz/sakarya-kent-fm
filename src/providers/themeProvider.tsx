"use client"
import { useGenerationStore } from '@/store/idea-generation'

const themeProvider = ({ children }: {children: React.ReactNode}) => {

    const { theme } = useGenerationStore()

    return (
        <div className={`${theme ? "bg-white text-black" : "bg-[#0f172a] text-[#ddd]"}`}>{children}</div>
    )
}

export default themeProvider