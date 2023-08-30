export default function Card({data}) {
    return (
        <div className="">
            <h3 className="">Brand: {data.title}</h3>
            <img src={data.image} className="" alt="bowling ball"/>
            <h4 className="">Price: ${data.price}</h4>
            <p>{data.description}</p>
        </div>
    )
}