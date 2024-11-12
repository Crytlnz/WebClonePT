const Card = ({ text1, text2 }) => {
  return (
    <div className="p-6 md:p-8 bg-card rounded-lg flex flex-col justify-between h-full">
      <div className="mb-6 md:mb-8">
        <p className="text-[16px] md:text-[20px]">{text1}</p>
        <h3 className="blue-gradient text-[24px] md:text-[32px] font-semibold">{text2}</h3>
      </div>
      {/* Make image responsive */}
      <img
        src="assets/gunung_keren.jpg"
        alt=""
        className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-lg"
      />
    </div>
  );
};

export default Card;
