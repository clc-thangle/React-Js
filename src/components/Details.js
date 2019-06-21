import React, { Component } from 'react';
import dl from './dulieu.json'
class Details extends Component {
  render() {


    console.log(this.props.match.params.id);
    console.log(typeof (this.props.match.params.id))


    return (
      <div>
        <div>
          <header className="masthead news">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-lg-6 my-auto">
                  <div className="header-content mx-auto" style={{ textAlign: 'center' }}>
                    <h1 className="mb-5">News Details</h1>
                    <a href="/download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
                  </div>
                </div>
                <div className="col-lg-6 my-auto">
                  <div className="device-container hinhcuavy">
                    <div className="device-mockup iphone6_plus portrait white">
                      <div className="device">
                        <div className="screen">
                          {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                          <img src="https://avatars1.githubusercontent.com/u/46485840?s=400&amp;u=bd2979d378b3f679aaa51fb30d1a7fa360835ec5&amp;v=4" className="img-fluid"></img>
                        </div>
                        <div className="button">
                          {/* You can hook the "home button" to some JavaScript events or just remove it */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/* begin news */}
          <div>
            {
              dl.map((value, key) => {
                if (value.id == this.props.match.params.id) {
                  return (
                    <div className="jumbotron jumbotron-fluid">
                      <div className="container">
                        <img src={value.anh} className="img-fluid" />
                        <h3 className="lead text-center">{value.tieuDe}</h3>
                        <hr className="my-2" />
                        {value.noiDung}
                      </div>
                    </div>
                  )
                }


              })
            }
            <div className="container">
              <h4 className="card-title text-center">Tin lien quan</h4>
              <div className="row">
                <div className="col-12">
                  <div className="card-deck">
                    <div className="card">
                      <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/500x300/" alt /></a>
                      <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae in
                          magnam ex totam doloribus suscipit ratione, ipsam ut quam consequuntur earum numquam
                quasi obcaecati deserunt! Sint dicta fugit eos et!</p>
                      </div>
                    </div>
                    <div className="card">
                      <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/500x300/" alt /></a>
                      <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae in
                          magnam ex totam doloribus suscipit ratione, ipsam ut quam consequuntur earum numquam
                quasi obcaecati deserunt! Sint dicta fugit eos et!</p>
                      </div>
                    </div>
                    <div className="card">
                      <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/500x300/" alt /></a>
                      <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae in
                          magnam ex totam doloribus suscipit ratione, ipsam ut quam consequuntur earum numquam
                quasi obcaecati deserunt! Sint dicta fugit eos et!</p>
                      </div>
                    </div>
                    <div className="card">
                      <a href="chitiet.html"><img className="card-img-top" src="http://placehold.it/500x300/" alt /></a>
                      <div className="card-body">
                        <h4 className="card-title">Title</h4>
                        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae in
                          magnam ex totam doloribus suscipit ratione, ipsam ut quam consequuntur earum numquam
                quasi obcaecati deserunt! Sint dicta fugit eos et!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* end news */}
        </div>

      </div>
    );
  }
}

export default Details;