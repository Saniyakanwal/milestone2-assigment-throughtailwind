import Footer from "./Footer/page"
import Header from "./Header/page"

export default function Home(){
  return(
    <div className='h-[100%]'>
      <Header/>
      <div className='flex'>
      <div className='w-1/2 flex flex-col justify-center items-start m-12'>
        <h1 className='flex font-bold text-[40px]'>"Bite into the Extraordinary!"</h1>
        <p className='text-[19px] text-[rgb(255,165,0)] italic'>"Why settle for just any burger when you can have one that’s extraordinary?we don’t just make burgers – we create edible masterpieces with flavors that take your taste buds on a thrill ride. From juicy patties to unexpected toppings, every bite is designed to surprise and delight. Get ready to taste the best burger adventure in town!"

</p>
        <button className='text-[larger] bg-[rgb(255,255,0)] mt-5 ml-[25px] p-2 text-[rgb(255,69,0)] hover:text-[rgb(255,255,0)] hover:bg-[rgb(255,69,0)]'>Explore Our Menu</button>
      </div>
      <div className='w-1/2 flex justify-center items-end'>
        <img src="/Images/front.gif" alt="home" 
        className='mt-7 mb-7'/>
      </div>
    </div>
    <Footer/>
    </div>
  )
}