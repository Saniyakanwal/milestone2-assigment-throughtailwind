import Link from "next/link"
const Header = () => {
  return (
    <div className='flex justify-between items-center p-5 bg-gradient-to-t from-orange-500 to bg-[rgb(255,255,0)]'>
      <h1 className='text-[40px] text-[rgb(255,255,0)] m-1 font-bold' >Burger </h1>
      <div className='flex justify-center items-center mt-7 mb-7 gap-4 font-bold text-black'>
      <Link href="/">Home</Link>
      <Link href="/Menu">Menu</Link>
      <Link href="/Contact">Contact</Link>
      </div>
      <button className='bg-[rgb(255,255,0)] text-black rounded-md p-3 text-[16px] font-bold hover:bg-[rgb(231,68,8)]'>Cart</button>
    </div>
  )
}

export default Header
