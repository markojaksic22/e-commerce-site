import image from "next/image";
import Currency from "react-currency-formatter";

function Order({ id, amount, items, images }) {
    return (
        <div className='relative border rounderd-md'>
            <div className='flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600'>
                <div><p className='text-xs font-bold'>Total</p>
                    <p>
                        <Currency quantity={amount} currency="GBP" /> - Next day delivery
                    </p>

                </div>

                <div>
                    <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-rigth text-blue-500'>{items.length} items</p>
                </div>

                <p className='absolute top-2 right-2 text-xs whitespace-nowrap w-40 lg:w-72 truncate'>Order # {id}</p>
            </div>

            <div className='p-5 sm:p-10 '>
                <div className='flex space-x-6 overflow-x-auto'>
                    {images.map(image => (
                        <img src={image} alt="" className='h-20 object-contain s:h-32'/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Order
