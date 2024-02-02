import Todo from './Todo'

export default function TodoList() {
    return (
        <>
            {/* todo list */}
            <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
                <Todo/>
            </div>
        </>
    )
}
