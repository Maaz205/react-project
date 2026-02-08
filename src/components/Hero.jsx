function Hero(){
    return(
        <>
<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       <span className="text-white">Welcome</span> <span className="text-blue-600">to my store</span>
      </h1>
      <p className="mb-8 leading-relaxed">
     Welcome to our clothing store, where style meets comfort. We offer a wide range of high-quality clothing designed to suit every personality and occasion. From everyday essentials to trend-inspired pieces, our collection is carefully crafted to ensure great fit, premium fabrics, and modern designs.

We believe fashion should be confident, comfortable, and accessible. Whether you’re dressing for work, casual outings, or special moments, our goal is to help you look and feel your best. Shop with us and experience fashion that speaks your style.
      </p>
      
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="https://img.freepik.com/premium-photo/colorful-womens-clothes-wood-hangers-rack-fashion-store-women-s-closet_114963-3966.jpg"
      />
    </div>
  </div>
</section>


        </>
    )
}
export default Hero