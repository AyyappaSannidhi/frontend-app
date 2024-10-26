
const TextBlock = ({ textPoints }) => { 

  return (
    <ul className="text-base md:text-lg text-gray-700 list-none space-y-3">
    {textPoints.map((text, index) => (
      <li key={index} className="flex ">
        <span className="mr-2"></span>
        {text}
      </li>
    ))}
  </ul>
  )
}

export default TextBlock;

