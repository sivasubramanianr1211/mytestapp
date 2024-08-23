import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Primary Contact: M Rajkumar
                
              </h2>
              <div><h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-xl">Mobile:</h3></div>
              <div><h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-xl lg:text-xl xl:text-xl">Email:</h3></div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
