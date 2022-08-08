
import { HeroBanner } from "../components/HeroBanner";


import caloriesLogo from '../assets/images/calories.jpg'
import { SearchCalories } from "../components/CaloriesPage/SearchCalories";
import { Box } from "@mui/material";


export const CaloriesPage = () => {

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
