
function Subscribe({title, onClick} : {
    title : string, 
    onClick ?: () => void;
}) {
  return (
    <div 
    onClick={onClick}
    className="text-lg transition-all cursor-pointer 
        duration-200 ease-in-out hover:text-neutral-400 p-1
         hover:border hover:border-orange-700">
      {title}
    </div>
  )
}

export default Subscribe
