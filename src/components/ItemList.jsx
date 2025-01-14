import Item from "./Item";

export default function ItemList ( props ){

    const greeting = props.greeting;

    return (
        <>
            <h2 className="mt-20 mb-12 text-center text-4xl font-bold font-sans">{greeting}</h2>
            <div className="flex flex-wrap justify-center mx-8">
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