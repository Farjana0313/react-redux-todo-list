import { useDispatch, useSelector } from "react-redux";
import { statusChanged } from "../redux/filters/action";

const numberOfTask = (number_of_tasK) => {
  switch (number_of_tasK) {
    case 0:

      return "No Task"
    case 1:
      return "1 Task"
    default:
      return `${number_of_tasK} Tasks`
  }
}

export default function Footer() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch()
  const todoRemaining = todos.filter((todo) => !todo.completed).length;

  const handleStatusChange = (status) => {
    dispatch(statusChanged(status))
  }

  const { status, colors } = filters;

  return (
    <>
      {/* footer */}
      <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p>{numberOfTask(todoRemaining)} left</p>
        <ul className="flex space-x-1 items-center text-xs">
          <li className={`cursor-pointer ${status === 'All' && 'font-bold'} `} onClick={() => handleStatusChange('All')}>All</li>
          <li>|</li>
          <li className={`cursor-pointer ${status === 'Incomplete' && 'font-bold'} `} onClick={() => handleStatusChange("Incomplete")}>Incomplete</li>
          <li>|</li>
          <li className={`cursor-pointer ${status === 'Completed' && 'font-bold'} `} onClick={() => handleStatusChange("Completed")}>Completed</li>
          <li />
          <li />
          <li className="h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer bg-green-500">
          </li>
          <li className="h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer" />
          <li className="h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer">
          </li>
        </ul>
      </div>
    </>
  )
}
