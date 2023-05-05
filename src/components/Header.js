import image from '../images/brad-preece-MRxx3VJPho4-unsplash.jpg'
export default function Header() {
    return (
        <div className="flex flex-col items-center">
            <h1 className='font-mono text-xl m-2.5'>My Bowling Alley Business</h1>
            <img className='h-auto w-1/4 rounded-md flex justify-center mb-7 hover: focus' src={image} />
        </div>
    )
}