import imageProductDesktop from './assets/image-product-desktop.jpg';
import imageProductMobile from './assets/image-product-mobile.jpg';
import cardImg from './assets/card.png';

export const ProductCard = () => {
  return (
    <div className="card flex flex-col sm:flex-row bg-white rounded-lg">
        <div className="container-img rounde-md">
            <img src={imageProductDesktop} alt="Product Desktop" className='hidden sm:flex w-80 rounded-l-lg' />
            <img src={imageProductMobile} alt="Product Mobile" className='sm:hidden block rounded-ss-lg rounded-se-lg'/>
        </div>
        <div className="container-content sm:w-80 pl-[2em] flex flex-col justify-center p-[2em]">
            
            <h2 className='text-preset-4 grey mb-[1.5em]'>PERFUME</h2>
            <h3 className='text-preset-1 black mb-[1em]'>Gabrielle Essence Eau<span className='hidden md:inline'><br/></span> De Parfum</h3>
            <p className='text-preset-3 grey mb-[2em]'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
            <div className="price flex flex-row items-center mb-[2em]">
                <span className='text-preset-1 green-500'>$149.99</span> <span className='text-preset-5 grey ml-[1em] line-through'>$169.99</span>
            </div>
            <button className='bg-[#3D8168] py-[1em] px-[2em] white rounded-md flex flex-row items-center justify-center'><img src={cardImg} alt="" className='inline-block mr-[0.5em]' /> Add to Cart</button>
        </div>  
    </div>
  )
}