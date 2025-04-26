
function Button({title} : {
    title : string
}) {
  return (
    <div className="text-lg transition-all cursor-pointer 
        duration-200 ease-in-out hover:text-neutral-400 ">
      {title}
    </div>
  )
}

export default Button
