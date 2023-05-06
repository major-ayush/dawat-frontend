import React, { useEffect, useState } from "react";
import useFetchAllMenus from "./customHooks/useFetchAllMenus";
import usePostMenu from "./customHooks/usePostMenu";
import useFetchMenuById from "./customHooks/useFetchMenuById";
import useVerifyUser from "./customHooks/useVerifyUser";
import useFetchAllCategories from "./customHooks/useFetchAllCategories";
import useFetchCategoryByCatId from "./customHooks/useFetchCategoryByCatId";
import useFetchAllCategoriesByMenuId from "./customHooks/useFetchAllCategorisByMenuId";
import usePostCategory from "./customHooks/usePostCategory";
import useDeleteCategory from "./customHooks/useDeleteCategory";
import useFetchAllDishes from "./customHooks/useFetchAllDishes";
import useFetchDishByDishId from "./customHooks/useFetchDishByDishId";
import useFetchAllDishesByCatId from "./customHooks/useFetchAllDishesByCatId";
import usePostDish from "./customHooks/usePostDish";
import useUpdateDish from "./customHooks/useUpdateDish";
import useDeleteDish from "./customHooks/useDeleteDish";
import Login from "./containers/Login";
import AddMenu from "./containers/AddMenu";
import AddCategory from "./containers/AddCategory";
import AddDish from "./containers/AddDish";
import DeleteCategory from "./containers/DeleteCategory";
import DeleteDish from "./containers/DeleteDish";
import DishCard from "./containers/DishCard";
import MenuCard from "./containers/MenuCard";
import CategoryCard from "./containers/CategoryCard";
import CategoriesByMenuId from "./containers/CategoriesByMenuId";
import ShowMenus from "./containers/ShowMenus";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import AboutUs from "./AboutUs";
import SimpleNavbar from "./containers/SimpleNavbar";
import UpdateDish from "./containers/UpdateDish";

function App() {

  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  // const [isVerified, setIsVerified] = useState(null);

  // function onNameChangeHandeler(event) {
  //   setUserName(event.target.value);
  // }
  // function onPasswordChangeHandeler(event) {
  //   setPassword(event.target.value);
  // }
  // function onClickHandeler() {
  //   const data = {
  //     userId: userName,
  //     password: password
  //   }
  //   fetch("https://localhost:7289/api/Users", {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     method: 'POST',
  //     mode: 'cors',
  //     body: JSON.stringify(data)
  //   }).then(response => response.json()).then(dat => setIsVerified(dat));
  // }





  // const data = useFetchAllDishes();

  // const menus = useFetchAllMenus();

  // const categories = useFetchAllCategories();

  //data.forEach(dish => console.log(dish.dishImage))

  // const data = useVerifyUser(id, pass);
  // console.log(data);

  return (
    <div className="App">
    <h1 style = {{color : 'red', textAlign : "center", fontSize : "50px"}}>Dhaba-e-Ishq</h1>
    <SimpleNavbar/>
    <Routes>
      <Route path = "/" Component={ShowMenus} exact/>
      <Route path = "/addCategory" Component = {AddCategory}/>
      <Route path = "/addDish" Component = {AddDish}/>
      <Route path = "/addMenu" Component = {AddMenu}/>
      <Route path = "/deleteCategory" Component = {DeleteCategory}/>
      <Route path = "/deleteDish" Component = {DeleteDish}/>
      <Route path = "/updateDish" Component = {UpdateDish}/>
    </Routes>
      
    </div>
  );
}

export default App;


// login page component rendering
// {
//   isVerified === true ? <h1>You are at home page</h1> : isVerified === null ? <Login
//     userName={userName}
//     password={password}
//     onNameChangeHandeler={onNameChangeHandeler}
//     onPasswordChangeHandeler={onPasswordChangeHandeler}
//     onClickHandeler={onClickHandeler}
//     isValid={true}
//   /> : <Login
//     userName={userName}
//     password={password}
//     onNameChangeHandeler={onNameChangeHandeler}
//     onPasswordChangeHandeler={onPasswordChangeHandeler}
//     onClickHandeler={onClickHandeler}
//     isValid={false}
//   />
// }

// {
//   categories.map(cat => <CategoryCard
//     catName = {cat.catName}
//     catImage = {cat.catImage}
//     key = {cat.catId}
//   />)
// }

{/* <CategoriesByMenuId menuId = {11}/> */ }
{/* {
        data.map(dish => <DishCard
                dishName = {dish.dishName}
                dishImage = {dish.dishImage}
                dishDescription = {dish.dishDescription}
                dishNature = {dish.dishNature}
                dishPrice = {dish.dishPrice}
                key = {dish.dishId}
            />)
      } */}

{/* <CategoriesByMenuId menuId = {11}/> */ }
