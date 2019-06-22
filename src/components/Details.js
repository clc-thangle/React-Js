import React, { Component } from 'react';
import dl from './dulieu.json'
import NewRelated from './NewRelated.js';
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
                if (value.id === parseInt(this.props.match.params.id,20)) {
                  return (
                    <div className="jumbotron jumbotron-fluid" key={key}>
                      <div className="container">
                        <img src={value.anh} className="img-fluid" />
                        <h3 className="lead text-center">{value.tieuDe}</h3>
                        <hr className="my-2" />
                        {value.noiDung}
                      </div>
                    </div>
                  )
                }
                else {
                  return;
                }

              })
            }
            <div className="container">
              <h4 className="card-title text-center">Tin lien quan</h4>
              <div className="row">
                <div className="col-12">
                  <div className="card-deck">
                    {
                      
                      dl.map((value,key) => {
                        if(value.id !== parseInt(this.props.match.params.id,20))
                        {
                          if(key <= 3)
                          return (
                            
                            
                              <NewRelated key={key}
                              tinId={value.id}
                              anh={value.anh}
                              tieuDe={value.tieuDe}
                              trichDan={value.trichDan}
                              />
                          )
                        }
                        else {
                          return ;
                        }
                        
                        
                      })
                      
                    }
                    
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