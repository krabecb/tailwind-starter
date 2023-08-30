import image from '../../images/brad-preece-MRxx3VJPho4-unsplash.jpg'

export default function Header() {
    return (
        <div className="">
            <h1 className="">Three Strikes Bowling Alley Store</h1>
            <div className="">
                <img src={image} className="" alt="bowling pins" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}