function Price(){
    return(
        <>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
        Pricing
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base  text-blue">
        Here are the prices of our clothes.
      </p>
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
              clothes
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Size
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              dilivery
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Price
            </th>
            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br" />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3  text-white">Shirt</td>
            <td className="px-4 py-3  text-white">all size</td>
            <td className="px-4 py-3  text-white">all over Pakistan</td>
            <td className="px-4 py-3 text-lg  text-white">1200pkr to 3000pkr</td>
            <td className="w-10 text-center">
              
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3  text-white">T-Shirt</td>
            <td className="border-t-2 border-gray-200 px-4 py-3  text-white">all size</td>
            <td className="border-t-2 border-gray-200 px-4 py-3  text-white">all over pakistan</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg  text-white">
              1500pkr to 3500pkr
            </td>
            <td className="border-t-2 border-gray-200 w-10 text-center">
              
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3  text-white">Trousers</td>
            <td className="border-t-2 border-gray-200 px-4 py-3  text-white">all size</td>
            <td className="border-t-2 border-gray-200 px-4 py-3  text-white">all over pakistan </td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg  text-white">
              2000pkr to 5000pkr
            </td>
            <td className="border-t-2 border-gray-200 w-10 text-center">
              
            </td>
          </tr>
          <tr>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3  text-white">
              Jacket
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3  text-white">
              all size
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3  text-white"  >
              all over pakistan
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3 text-lg text-white -900">
              4000pkr to 10,000pkr
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
              
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
   
    
    </div>
  </div>
</section>

        
        </>
    )
}
export default Price