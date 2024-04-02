import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FullLink from "../components/FullLink";

function Reroute() {
    const params = useParams();
    const [actualLink, setActualLink] = useState(null);

    useEffect(() => {
        async function fetchActualLink() {
            const response = await fetch("http://localhost:3000/reroute/" + params.hashedLink);
            const data = await response.json();
            setActualLink(data.link);
        }

        fetchActualLink();
    }, [params.hashedLink]);

    return (
        <div>
            {actualLink && <FullLink link={actualLink} />}
        </div>
    );
}

export default Reroute;
