import { useEffect, useState } from "react";
import { MENUCDN_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENUCDN_URL + resId);
    const json = await data.json();
    //console.log(json);
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
