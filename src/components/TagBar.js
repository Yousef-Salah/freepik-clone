//
import './TagBar.css';
import Type from './type';
import Tag from './Tag';
import Filters from './Filters';
const Bar=() =>{

    return(
        <div className="container-fluid">
        <nav className="navbar bg-light sticky">
        <span className="container-fluid justify-content-start navbarr" id='navbarr'>
        <Filters/>
         <Type title="Photos" pic='bi bi-image'/>
          <Type title="PSD" pic='bi bi-filetype-psd' />
          <Type title="All images" pic='bx bxs-shapes' />
          <Tag title="arrow"/>
          <Tag title="background"/>
          <Tag title="business card"/>
          <Tag title="certificate"/>
          <Tag title="christmas"/>
          <Tag title="flower"/>
          <Tag title="frame"/>
          <Tag title="halloween"/>
          <Tag title="infographic"/>
          <Tag title="pattern" />
        </span>
      </nav>
      </div>
    );
}
export default Bar