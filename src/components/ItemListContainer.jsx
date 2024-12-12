
function ItemListContainer (props) {

    const greeting = props.greeting;

    return (
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2">
            <h2 className="mt-20 text-center text-5xl font-bold font-sans">{greeting}</h2>
        </div>
    );

}

export default ItemListContainer;