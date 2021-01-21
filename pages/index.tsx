import * as React from "react";
import { useQuery } from "react-query";
function IndexPage() {
  const [selectedVersion, setSelectedVersion] = React.useState("v1");

  React.useEffect(() => {}, [selectedVersion]);

  const query = useQuery(["/static/home-page", selectedVersion], () => {
    return fetch(`/static/home-page-${selectedVersion}.json`).then((res) =>
      res.json()
    );
  });

  return (
    <div>
      {["v1", "v2", "v3", "v4"].map((version) => {
        return (
          <button
            className="mr-3 bg-blue-300 px-2"
            key={version}
            onClick={() => {
              setSelectedVersion(version);
            }}
          >
            {version}
          </button>
        );
      })}

      <div>{JSON.stringify(query.data)}</div>
    </div>
  );
}

export default IndexPage;
