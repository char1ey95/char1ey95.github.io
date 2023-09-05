export default function StackList({ children }: any) {
    return (
        <div className="flex items-start gap-1 flex-wrap h-20">
            {children}
        </div>
    )
}

// display: flex;
// align-items: flex-start;
// gap: 2.25rem;
// align-self: stretch;