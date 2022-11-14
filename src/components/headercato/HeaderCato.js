import './HeaderCato.css'
const HeaderWithPargraph=  () =>
{
    return(
     <div className='container-fluid'>
      <div className='row' >
      <div className='col col-lg-4  col-sm-12 leftImageCard'>
        <img src='leftimg.png' alt='...' ></img>
      </div>
      <div className='col col-lg-4 col-md-9 col-sm-12 titleWdescreption' >
        <h1 className='title'>Cartoons are a way to give life to your creations</h1>
        <p className='descreption'>People have been drawing cartoons for quite some time now. This style has evolved over time and it's now more than a humorous depiction of someone. It's very popular among children, and an interesting way of showing an image of yourself to others. It has a colorful nature and a different way of interpreting things from reality.</p>
      </div>
      <div className='col col-lg-4 col-md-3 col-sm-12 rightImageCard'>
        <img src='rightimg.png' alt='...' ></img>
      </div>
      </div>
     </div>
    );
}

export default HeaderWithPargraph;
