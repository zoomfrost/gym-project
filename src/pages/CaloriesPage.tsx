import { exerciseInsHeaders } from "../api/exercisesInstrucApi";
import { HeroBanner } from "../components/HeroBanner";


import caloriesLogo from '../assets/images/calories.jpg'
import { SearchCalories } from "../components/CaloriesPage/SearchCalories";
import { Box } from "@mui/material";

export const fetchData = async (url: string, headers: typeof exerciseInsHeaders) => {
  const res = await fetch(url, {headers});
  const data = await res.json();

  return data;
};
export const CaloriesPage = () => {

  const func = async () => {
    const data = await fetchData('https://api.api-ninjas.com/v1/caloriesburned?activity=a', exerciseInsHeaders);

  }

  func()
  return (
    <Box>
      <HeroBanner
        title='Calculator'
        subtitle='Control, track & follow'
        subtitle2={<span>Find out how many calories <br/> you`ve been burned doing different activities</span>}
        btnText='Find out'
        imgSrc={caloriesLogo}
        link='#search'
      />
    <SearchCalories />
    </Box>

  )
}
