export default function Link(props){

    const { link, children } = props;
    const displayText = children === undefined ? 'Button' : children;

    return (
        <a href={link} alt={displayText} title={displayText} >
            {displayText}
        </a>
    );
}