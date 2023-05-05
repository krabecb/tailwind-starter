export default function Card({data}) {
    return (
        <div className="bg-slate-50 w-3/4 p-1.5 rounded flex flex-col items-center mx-auto mb-3">
            <h3 className="font-bold">{data.title}</h3>
            <img src={data.image} className="h-auto w-1/4 rounded-md"/>
            <h4 className="font-medium">${data.price}</h4>
            <p>{data.description}</p>
        </div>
    )
}