import { CheckCircleIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Header from "../components/Header";

function success() {
    const router = useRouter();
    return (
        <div className='bg-gray-100 h-screen'>
            <Header />

            <main className='max-w-screen-lg mx-auto'>
                <div className='flex flex-col p-10 bg-white'>
                    <div className='flex items-center space-x-2 mb-4'>
                        <CheckCircleIcon className='text-green-500 h-10' />
                        <h1 className="text-3xl">
                            Thanks you, your order has been comfirmed!
                        </h1>
                    </div>
                    <p>
                        Thanks for shopping with us! you can check your shippment status
                        order at link below.
                    </p>
                    <button onClick={() => router.push("/orders")}
                        className='button mt-8'>
                        GO TO ORDERS 
                    </button>
                </div>
            </main>
        </div>
    )
}

export default success
