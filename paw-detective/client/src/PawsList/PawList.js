import ApiService from "../ApiService";
import { useState, useEffect } from "react";
import PawsItem from "../PawsItem/PawsItem";
import "./PawsList.css";

const PawsList = () => {
  const [paws, setPaws] = useState([]);

  useEffect(() => {
    ApiService.getPaws().then((paws) => {
      setPaws(paws);
    });
  }, []);

  const pawsList =
    paws.length && paws.map((paw) => <PawsItem paw={paw} key={paw.id} />);
  return <ul>{pawsList}</ul>;
};

export default PawsList;
