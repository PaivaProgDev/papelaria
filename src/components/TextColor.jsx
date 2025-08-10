export const TextBlue = ({ children, className }) => {
    return <span className={`${className} text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-[#ba47e8]`}>{children}</span>
}

export const TextPink = ({ children, className }) => {
    return <span className={`${className} text-transparent bg-gradient-to-r bg-clip-text from-[#e8479b] to-[#9533e7]`}>{children}</span>
}

