export default function StackList({ children }: any) {
    return (
        <div className="flex items-start self-stretch gap-2 flex-wrap">
            {children}
        </div>
    )
}

// display: flex;
// align-items: flex-start;
// gap: 2.25rem;
// align-self: stretch;