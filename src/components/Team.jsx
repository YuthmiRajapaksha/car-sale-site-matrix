import useFetch from "../hooks/useFetch";

export const Team = (props) => {
  const { data, isLoading } = useFetch("http://127.0.0.1:8000/api/staff");

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title text-block">
          <h2>Meet our Staff</h2>
          <p style={{ fontWeight: 500, fontSize: 20, color: "darkblack" }}>
            Our team is staffed with trained experts and vehicles specialists
            who know how important your time and money are.
          </p>
        </div>
        <div id="row">
          {data?.staff
            ? data?.staff.slice(0, 4).map((d) => (
                <div key={d.id} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    <img
                      style={{ height: 240 }}
                      src={`http://127.0.0.1:8000/storage/${d.image}`}
                      alt="..."
                      className="team-img"
                    />
                    <div className="caption">
                      <h4>
                        {d.first_name} {d.last_name}
                      </h4>
                      <p>{d.position}</p>
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};
