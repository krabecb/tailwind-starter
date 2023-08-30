import image from '../../images/brad-preece-MRxx3VJPho4-unsplash.jpg'

export default function Header() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="font-mono text-xl w-full bg-red-600">Three Strikes Bowling Alley Store</h1>
            <div className="flex items-center p-2.5 mb-5 w-full bg-red-600">
                <img src={image} className="h-auto w-1/4 rounded-md flex justify-center" alt="bowling pins" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}