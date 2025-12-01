import { useEffect, useState } from "react";

import Places from "./Places.jsx";
import Error from "./Error.jsx";

import {sortPlacesByDistance} from '../loc.js'
import { fetchAvbPlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function getPlaces() {
      setIsFetching(true);

      try {
        const places = await fetchAvbPlaces();

        navigator.geolocation.getCurrentPosition((postition) => {
          const sortPlace = sortPlacesByDistance(places, postition.coords.latitude, postition.coords.longitude);
          
          setAvailablePlaces(sortPlace);

          setIsFetching(false);
        });

      } catch (error) {
        setError({ message: error.message || "Error! Try Again later." });
        
        setIsFetching(false);
      }

    }

    getPlaces();

    // this also works, the only difference is using await and not
    // fetch("http://localhost:3000/places")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((resData) => {
    //     setAvailablePlaces(resData.places);
    //   });
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching data.."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
