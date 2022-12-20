import './category-header.css'
const CategoryHeader = (props) => {
	return (
		<section id='CategoryHeader' >
			<div className='container-fluid' id="category-header">
				<div className='row' >
					<div className='col col-lg-4  col-sm-12 leftImageCard'>
						<img src={require('./leftimg.png')} alt='...' ></img>
					</div>
					<div className='col col-lg-4 col-md-9 col-sm-12 titleWdescreption' >
						<h1 className='Catotitle'>{props.catotitle}</h1>
						<p className='descreption'>{props.catodesc}</p>
					</div>
					<div className='col col-lg-4 col-md-3 col-sm-12 rightImageCard'>
						<img  src={require('./rightimg.png')} alt='...' ></img>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CategoryHeader;
