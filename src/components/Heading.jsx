
const Heading = ({ heading }) => { 

  return (
    <div className="flex flex-col  items-center text-center space-y-4 mt-8">
    <h2 className="text-2xl md:text-3xl font-bold leading-[1.4]">
      <span className="text-[#FE5A0E] font-playfair font-bold italic bg-gradient-to-r from-[#f80503] to-[#ff7d09] bg-clip-text text-transparent pb-2 pr-1">
        {heading}
      </span>
    </h2>
  </div>
  )
}

export default Heading

