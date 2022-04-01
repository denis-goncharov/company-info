'use strict';

function CompanyInfo(props) {
  return (
    <div>
      <div className="company-info">
          <div className="name"><ion-icon name="sparkles"></ion-icon><span>{props.name}</span></div>
          <div className="address"><span>{props.address}</span></div>
          <div className="attach">
            <span>Camera adjuster:</span>
            <div className="button">
              <ion-icon name="person-outline"></ion-icon>
              <span>Attach user</span>
            </div>
          </div>
          <div className="additional">
            <div className="row border-bottom">              
              <div className="additional-row-container">
                <div className="additional-row">
                  <div className="column width">
                    <div className="owner"><span>{props.ownerName}</span></div>
                  </div>
                  <div className="column border-left center">
                    <div className="icon border-bottom"><ion-icon name="call-outline"></ion-icon></div>
                    <div className="icon"><ion-icon name="mail-outline"></ion-icon></div>
                  </div>
                  <div className="column border-left width">
                    <div className="value border-bottom left"><span>{props.phone}</span></div>
                    <div className="value left"><span>{props.email}</span></div>
                  </div>
                </div>                
              </div>
            </div>
            <div className="row">
              <div className="additional-row-container border-left">
                <div className="additional-row">
                  <div className="column width">
                    <div className="caption border-bottom first"><span>Signup Date:</span></div>
                    <div className="caption"><span>Events:</span></div>
                  </div>
                  <div className="column border-left width">
                    <div className="value border-bottom"><span>{props.signupDate}</span></div>
                    <div className="value"><span>{props.eventsCounter}</span></div>
                  </div>
                  <div className="column border-left width">
                    <div className="caption border-bottom"><span>Cameras:</span></div>
                    <div className="caption"><span>Employes</span></div>
                  </div>
                  <div className="column border-left">
                    <div className="value border-bottom"><span>{props.camerasCounter}</span></div>
                    <div className="value"><span>{props.employeeCounter}</span></div>
                  </div>
                </div>              
              </div>
            </div>
          </div>          
      </div>
      <div className="planContainer">
            <div className="left-corner"><div className="corner"></div></div>
            <div className="caption"><span>Plan:</span></div>
            <div className="value"><span>{props.planName}</span></div>
            <div className="caption"><span>Paid till:</span></div>
            <div className="value width"><span>{props.planStatus}</span></div>
            <div className="right-corner"><div className="corner"></div></div>
          </div>
    </div>
  );
}