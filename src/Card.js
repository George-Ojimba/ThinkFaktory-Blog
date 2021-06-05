const Card = () => {
  return (
    <div className="card">
      <div className="server">
        <h3>Application Status </h3>

        <div className="circles">
          <div className="circle-1">
            <span>10</span>
            <p>All</p>
          </div>
          <div className="circle-2">
            <span>6</span>
            <p>Available</p>
          </div>
          <div className="circle-3 ">
            <span>4</span>
            <p>Cancel</p>
          </div>
        </div>
      </div>

      <div className="server">
        <h3>Server </h3>
        <div className="circles">
          <div className="circle-1">
            <span>4</span>
            <p>All</p>
          </div>
          <div className="circle-2">
            <span>2</span>
            <p>Active</p>
          </div>
          <div className="circle-3 ">
            <span className="inactive">2</span>
            <p>Inactive</p>
          </div>
        </div>
      </div>

      <div className="server">
        <h3>Health Check Count </h3>
        <div className="circle-4">
          <h1>60</h1>
          <p>Counts</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
