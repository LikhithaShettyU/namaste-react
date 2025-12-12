import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

    useEffect(() => {
      if (!resId) return;
      fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [resId]);

  // const fetchData = async () => {
  //   console.log("resId:", resId);
  //   console.log("Fetching from:", MENU_API + resId);

  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();

  //   setResInfo(json.data);
  // };

    const fetchData = async () => {
      try {
        console.log("Fetching from:", MENU_API + resId);
        const resp = await fetch(MENU_API + resId);
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const json = await resp.json();


        // According to your docs the useful object may be in json.data.data or json.data
        const inner = json?.data?.data ?? json?.data ?? null;


        // Set resInfo to the inner object that contains `cards`
        setResInfo(inner);
        } catch (err) {
        console.error("Error fetching menu:", err);
        setResInfo(null);
      }
  };

  return resInfo;
};

export default useRestaurantMenu;
