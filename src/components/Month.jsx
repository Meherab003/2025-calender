const Month = (month) => {
  console.log(month.month.days);
  const days = month.month.days;
  return (
    <div className="backdrop-blur-3xl rounded-xl py-5 shadow-inner">
      <p className="font-title text-2xl pl-5 font-semibold pb-3">
        {month.month.name}
      </p>
      <div className="bg-gradient-to-tr from-blue-500 to-pink-500">
        <div className="grid grid-cols-7 backdrop-blur-3xl shadow-inner mb-1">
          <p className="poppins font-semibold py-1 text-center text-blue-900">
            S
          </p>
          <p className="poppins font-semibold py-1 text-center text-blue-900">
            M
          </p>
          <p className="poppins font-semibold py-1 text-center text-blue-900">
            T
          </p>
          <p className="poppins font-semibold py-1 text-center text-blue-900">
            W
          </p>
          <p className="poppins font-semibold py-1 text-center text-blue-900">
            T
          </p>
          <p className="poppins font-semibold py-1 text-center text-red-900">
            F
          </p>
          <p className="poppins font-semibold py-1 text-center text-blue-900">
            S
          </p>
        </div>
      </div>
      <div className="grid grid-cols-7">
        {days.map((day, idx) => (
          <p
            className={`poppins font-medium pb-1 text-center hover:-rotate-12 transform duration-200 cursor-pointer ${
              day.day_name === "Friday" && "text-red-900"
            }
          `}
            key={idx}
          >
            <span
              className={`${
                day.international_holidays.length !== 0 &&
                "font-title text-lg text-blue-700 font-bold"
              }${
                day?.national_holidays &&
                "font-title text-lg text-green-700 font-bold"
              } ${
                day?.Eid &&
                "font-title text-lg border-2 border-yellow-300 rounded-tr-xl rounded-tl-xl text-white p-1 font-bold"
              }`}
            >
              {day.day}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Month;
