import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UpdateMovie(props) {
  const [formValues, setFormValues] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: []
  });

  const onChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues, "FORM VALS");
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .put("http://localhost:5000/api/movies/update-movie/2", formValues)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  //   useEffect(() => {
  //     axios.get("http://localhost:5000/api/movies/2`").then(res => {
  //       console.log(res, "RES");
  //     });
  //   }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="change title"
          name="title"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="change director"
          name="director"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="change metascore"
          name="metascore"
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="change actors"
          name="stars"
          onChange={onChange}
        />
        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
}
