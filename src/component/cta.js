const Cta = () => {
    return (
        <section
        className="overflow-hidden  bg-cover bg-top bg-no-repeat" style={{ backgroundImage: "url('/images/Brown Fashion LookBook - ')" }}
      >
        <div className="bg-slate-300 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center flex flex-col ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Latest Shirts</h2>
      
            <p className="max-w-lg mx-auto text-white/90  md:mt-6 md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia corporis quasi
              doloribus iure architecto quae voluptatum beatae excepturi dolores.
            </p>
      
            <div className="mt-4 sm:mt-8">
              <a
                href="#"
                className="inline-block rounded-full border border-lg border-black bg-transparent px-12 py-3 text-sm font-medium text-black hover:text-white transition hover:bg-slate-500 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Yours Today
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Cta