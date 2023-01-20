import './transparent-search-tag.scss';

const TransparentSearchTag = (props) => {
    return (
        <a className="search-container-tag">
            <i className="fa-solid fa-magnifying-glass"></i>
            {props.title}
        </a>
    );
}

export default TransparentSearchTag;