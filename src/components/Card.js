export default function Card({data}) {
    return (
        <div className="">
            <h3 className="">{data.title}</h3>
            <img src={data.image} className=""/>
            <h4 className="">${data.price}</h4>
            <p>{data.description}</p>
        </div>
    )
}