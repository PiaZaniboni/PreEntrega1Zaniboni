
function ItemListContainer (props) {

    const greeting = props.greeting;

    return (
        <h2 className="text-center text-4xl font-bold">{greeting}</h2>
    );

}

export default ItemListContainer;