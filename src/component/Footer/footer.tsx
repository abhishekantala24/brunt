import React from "react";

const Copyright: React.FC = (): JSX.Element => (
  <footer>
    <div className="copyright">
      <div className="container-fluid copy-border">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6 text-lg-start text-center">
            <p>Copyright © 2023 Talentrackr All rights reserved.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-6 text-lg-end text-center">
            <p>Version TTCore 2023-07-12.</p>
          </div>
        </div>
      </div>
    </div>
  </footer> 
);

export default Copyright;
