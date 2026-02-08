function Header(){
    return(
        <>
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

      <img className = "w-15"  src="https://images-platform.99static.com//SWhjt9y7jA0NbWr0LPu_2awC-E8=/0x716:1197x1913/fit-in/500x500/99designs-contests-attachments/142/142411/attachment_142411279" alt="" />
      <span className="ml-3 text-xl text-white">My Store</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
  <a href="#home" className="mr-5 hover:text-white cursor-pointer">
    Home
  </a>
  <a href="#features" className="mr-5 hover:text-white cursor-pointer">
    Features
  </a>
  <a href="#price" className="mr-5 hover:text-white cursor-pointer">
    Price
  </a>
  <a href="#contact" className="mr-5 hover:text-white cursor-pointer">
    Contact
  </a>
</nav>
   
  </div>
</header>



        </>
    )
}
export default Header