import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = () => {
    API.get("/favorites")
      .then((res) => setFavorites(res.data))
      .catch((err) => console.log(err));
  };

  const removeFavorite = async (id) => {
    try {
      await API.delete(`/favorites/${id}`);
      fetchFavorites();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">❤️ My Favorite Doctors</h2>

      <div className="row">
        {favorites.length === 0 ? (
          <h4 className="text-center">No favorite doctors yet.</h4>
        ) : (
          favorites.map((fav) => (
            <div className="col-md-4 mb-4" key={fav._id}>
              <div className="doctor-card text-center">

                <img
                  src={fav.doctorId.image}
                  alt={fav.doctorId.name}
                  className="doctor-img"
                />

                <h3 className="mt-3">{fav.doctorId.name}</h3>

                <p>{fav.doctorId.specialization}</p>

                <p>⭐ {fav.doctorId.rating}</p>

                <Link
                  to={`/doctors/${fav.doctorId._id}`}
                  className="btn btn-primary me-2"
                >
                  View Profile
                </Link>

                <button
                  className="btn btn-danger"
                  onClick={() => removeFavorite(fav._id)}
                >
                  Remove ❤️
                </button>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Favorites;