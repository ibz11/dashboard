
interface Property{
    id: number;
    title:string
    description:string
    price:number
    location:string
    imageUrls:string[]

}

const Card = ({data}:{data:Property}) => {
    const { title, description, price, location,ImageUrls } = data;
    return (
        <div className="border rounded-lg p-4 shadow-md">
         {/* <pre>{JSON.stringify(data.imageUrls,2)}</pre> */}
         {/* {ImageUrls.map(image=>(
          <img src={image} className="h-10"/>
         ))} */}

        <img src={ImageUrls[1]} className="h-10"/>
        <h2 className="text-xl font-bold mb-2 text-white">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-green-500 font-semibold">Ksh. {price}</span>
          <span className="text-gray-500">{location}</span>
          
        </div>
      </div>
    );
}

export default Card;

