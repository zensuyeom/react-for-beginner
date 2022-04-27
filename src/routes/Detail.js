import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();

    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <img src={detail.large_cover_image} />
          <h2>{detail.title}</h2>
          <p>{detail.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
