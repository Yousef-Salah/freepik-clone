import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchQuery from '../../../../context/SearchQuery';
import './transparent-search-tag.scss';

const TransparentSearchTag = (props) => {

    const navigate = useNavigate();
    const title = props.title.replace(' ', '_');
    const searchQuery = useContext(SearchQuery);

    return (
        <a className="search-container-tag" onClick={() => {
            searchQuery.current.searchInput = props.title; 
            return navigate(`search/${title}`);
        }}>
            <i className="fa-solid fa-magnifying-glass"></i>
            {props.title}
        </a>
    );
}

export default TransparentSearchTag;