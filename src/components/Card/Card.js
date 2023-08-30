export default function Card({data}) {
    return (
        <div className="bg-slate-500 w-full p-1.5 flex flex-col items-center mx-auto mb-3">
            <h3 className="font-bold">Brand: {data.title}</h3>
            <img src={data.image} className="h-auto w-1/4 rounded-md" alt="bowling ball"/>
            <h4 className="font-medium">Price: ${data.price}</h4>
            <p>{data.description}</p>
        </div>
    )
}