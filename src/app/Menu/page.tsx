import Header from '../Header/page'
import Image from 'next/image'
import Footer from '../Footer/page'

const Menu = () => {
  return (
    <div>
      <Header/>
      <div className='flex flex-col justify-center items-start m-12'>
      <h1 className='flex text-[40px] font-bold ml-96'>"Delicious Bites Await"</h1>
      <p className='text-2xl ml-64 text-[rgb(255,165,0)] italic'>Each burger is a masterpiece, combining fresh ingredients with bold flavors you'll love. <br />Explore our range of burgers and enjoy a burst of flavor in every bite.</p>
    </div>
    <div className='bg-[rgb(255,165,0)] p-2 w-1/3 rounded-xl shadow-md m-auto grid grid-cols-2 gap-2 relative'>
      <div className='bottom-2 left-2 p-1 rounded text-[18px] font-bold text-black underline'>
        <Image src="/Images/pic1.jpg" alt="pic1" width={200} height={150} objectFit='cover' style={{borderRadius:"10px"}}/>
        <h2>Zinger Burger</h2>
        <p>350rs</p>
        </div>
        <div className='bottom-2 left-2 p-1 rounded text-[18px] font-bold text-black underline'>
        <Image src="/Images/pic2.jpg" alt="pic2" width={200} height={150}  objectFit="cover" style={{borderRadius:"10px"}}/>
        <h2>Chicken Burger</h2>
        <p>250rs</p>
        </div>
        <div className='bottom-2 left-2 p-1 rounded text-[18px] font-bold text-black underline'>
        <Image src="/Images/pic3.jpg" alt="pic3" width={200} height={150} objectFit='cover' style={{borderRadius:"10px"}}/> 
        <h2> Beef Burger</h2>
        <p> 380rs</p>
        </div>
        <div className='bottom-2 left-2 p-1 rounded text-[18px] font-bold text-black underline'>
        <Image src="/Images/pic4.jpg" alt="pic4" width={200} height={200} objectFit='cover' style={{borderRadius:"10px"}}/>
        <h2>Cheese Burger</h2>
        <p>200rs</p>
        </div>
        <div className='bottom-2 left-2 p-1 rounded text-[18px] font-bold text-black underline'>
        <Image src="/Images/pic5.jpg" alt="pic5" width={200} height={150} objectFit='cover' style={{borderRadius:"10px"}}/>
        <h2>Chicken crunch Burger</h2>
        <p>350rs</p>
        </div>
        <div className='bottom-2 left-2 p-1 rounded text-[18px] font-bold text-black underline'>
        <Image src="/Images/pic6.jpg" alt="pic6" width={200} height={150} objectFit='cover' style={{borderRadius:"10px"}}/>
        <h2>Double Degger Burger</h2>
        <p>400rs</p>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Menu
