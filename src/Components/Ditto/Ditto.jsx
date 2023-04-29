import React from "react";

const Ditto = () => {
  const iframeStyle = {
    width: "100%",
    height: "500px",
  };
  return (
    <>
      <div className="row yaman">
        <div className="col-lg-12">
          <iframe
            src="https://ditto.fm/slow_down"
            frameborder="0"
            style={iframeStyle}
          />
        </div>
      </div>
    </>
  );
};

export default Ditto;
