import './category-header.scss'
const CategoryHeader = (props) => {
  return (
    <div id="category-header">
      <div className="left-card-image">
        <img src="/assets/images/category-page/leftimg.png" alt="..."></img>
      </div>
      <div className="header-desc">
        <h1 className="head-cat-title">
          Cartoons are a way to give life to your creations
        </h1>
        <p className="descreption">
          People have been drawing cartoons for quite some time now. This style
          has evolved over time and it's now more than a humorous depiction of
          someone. It's very popular among children, and an interesting way of
          showing an image of yourself to others. It has a colorful nature and a
          different way of interpreting things from reality.
        </p>
      </div>
      <div className="right-card-image">
        <img src="/assets/images/category-page/rightimg.png" alt="..."></img>
      </div>
    </div>
  )
}

export default CategoryHeader
