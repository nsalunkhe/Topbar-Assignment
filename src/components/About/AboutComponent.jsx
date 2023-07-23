import React from "react";
import Trupti_Office from "../../assets/images/Trupti_office.png";
import "./AboutComponent.scss";
import Comp2 from "../TeamSlider/TeamSlider";
import Comp3 from "../CustomerReview/CustomerReview";

const Comp1 = () => {
  return (
    <div className="container">
      <div className="sub-container-1">
        <div className="info">
          <h1 className="heading">Trupti Treats</h1>
          <p className="sub-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
            scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit
            turpis pretium eget maecenas. Vestibulum dolor mattis consectetur
            eget commodo vitae.
          </p>

          <p className="sub-info-2">
            Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus.
            Elementum ullamcorper nec, habitasse vulputate. Eget dictum quis est
            sed egestas tellus, a lectus. Quam ullamcorper in fringilla arcu
            aliquet fames arcu. Lacinia eget faucibus urna, nam risus nec
            elementum cras porta. Sed elementum, sed dolor purus dolor dui. Ut
            dictum nulla pulvinar vulputate sit sagittis in eleifend dignissim.
            Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque
            viverra lectus arcu, tincidunt ultrices pellentesque.
          </p>
        </div>
        <div className="logo">
          <img src={Trupti_Office} alt="Trupti_Office_logo" className="office" />
        </div>
      </div>
      <div className="sub-container-2">
        <div className="team-heading">
          <h1>Our team</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        {/* <div> */}
          <Comp2 />
        {/* </div> */}
        <div className="comp3">
          <Comp3 />
        </div>
      </div>
    </div>
  );
};

export default Comp1;
