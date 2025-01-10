import Item from "./Item";

export default function ItemList ( props ){

    const greeting = props.greeting;

    return (
        <>
            <div className="">
                <h2 className="my-20 text-center text-5xl font-bold font-sans">{greeting}</h2>
            </div>
            <div className="flex flex-wrap justify-center">
                { props.products.map( (item) => (
                    <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        category={item.category}
                        img={item.img}
                    />
                ))}
            </div>
        </>
    );

}