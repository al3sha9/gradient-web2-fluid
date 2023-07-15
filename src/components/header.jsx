import NavbarTop from "./navbar"

function HeaderBg() {

    return (
      <>
        <header className="bg-alpha" id="header">
                    <NavbarTop />
            <div className="container">
                
            <div className="row">
                <div className="col-md-6">
                    <h1 className="header-title mt-5 pt-5">Hi,<br />I am<br />Ali Shan.</h1>
                </div>
            </div>
            </div>
        </header>
      </>
    )
  }
  
  export default HeaderBg
  