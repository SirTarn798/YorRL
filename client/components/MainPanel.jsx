import { useState, useEffect } from "react";

function MainPanel() {
  const [hashedLink, setHashedLink] = useState("");
  const [inputLink, setInputLink] = useState("");
  const [givenLink, setGivenLink] = useState("");

  const submitLink = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/add", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ link: inputLink }),
    });
    const data = await response.json();
    setHashedLink(data.hashedLink);
  };

  useEffect(() => {
    if (hashedLink) {
      setGivenLink("localhost:5173/reroute/" + hashedLink);
    }
  }, [hashedLink]);

  return (
    <div>
      <form onSubmit={submitLink}>
        <div className="formContainer">
          <div className="container">
            <input
              type="text"
              name="inputLink"
              value={inputLink}
              placeholder="Enter a URL"
              onChange={(e) => setInputLink(e.target.value)}
            />
          </div>
          <button>Shorten URL</button>
        </div>
      </form>
      <div className="hashedLink">
        <p>{givenLink}</p>
      </div>
    </div>
  );
}

export default MainPanel;
