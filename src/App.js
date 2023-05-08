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

import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import SimpleNavbar from "./containers/SimpleNavbar";
import UpdateDish from "./containers/UpdateDish";
import MyNavbar from "./containers/MyNavbar";
import NavScrollExample from "./containers/Navbar";
import { Dropdown, DropdownButton } from "react-bootstrap";
import DishByName from "./containers/DishByName";


function App() {

  
  // To see if the user is verified
  function isVerified()
  {
    const info = sessionStorage.getItem("isVerified");
    if(info == "true")
    {
      return true;
    }
    return false;
  }

  // To handle click of login form button
  const navigate = useNavigate();
  function onClickHandeler(userName, password) {

    if (userName === "") {
      alert("Please enter the user-name!");
      return;
    }
    if (password === "") {
      alert("Please enter the password!");
      return;
    }
    const data = {
      userId: userName,
      password: password
    }
    fetch("https://localhost:7289/api/Users", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data)
    }).then(response => response.json()).then(dat => {
      
      // setting information in localStorage
      sessionStorage.setItem("isVerified", dat);
      if(dat == false)
      alert("user-name or password is incorrect!!");
      else
      navigate("/")
    });

  }




  const data = useFetchAllDishes();

  // const menus = useFetchAllMenus();

  // const categories = useFetchAllCategories();

  //data.forEach(dish => console.log(dish.dishImage))

  // const data = useVerifyUser(id, pass);
  // console.log(data);

  return (
    <div className="App">
      
      <NavScrollExample/>
      <Routes>
        <Route path="/" element={isVerified() ? <ShowMenus /> : <Navigate to = "/login"/>} exact />
        <Route path="/login" element = {<Login onClickHandeler = {onClickHandeler}/>}/>
        <Route path="/addCategory" element={isVerified() ? <AddCategory /> : <Navigate to = "/login"/>} />
        <Route path="/addDish" element={isVerified() ? <AddDish /> : <Navigate to = "/login"/>} />
        <Route path="/addMenu" element={isVerified() ? <AddMenu /> : <Navigate to = "/login"/>} />
        <Route path="/deleteCategory" element={isVerified() ? <DeleteCategory /> : <Navigate to = "/login"/>} />
        <Route path="/deleteDish" element={isVerified() ? <DeleteDish /> : <Navigate to = "/login"/>} />
        <Route path="/updateDish" element={isVerified() ? <UpdateDish /> : <Navigate to = "/login"/>} />
        <Route path="/dishByName" element={isVerified() ? <DishByName /> : <Navigate to = "/login"/>} />
      </Routes>
     
    </div>
  );
}

export default App;


{/* <h1 style={{ color: 'red', textAlign: "center", fontSize: "50px" }}>Dhaba-e-Ishq</h1>
      <SimpleNavbar />
      <Routes>
        <Route path="/" element={isVerified() ? <ShowMenus /> : <Navigate to = "/login"/>} exact />
        <Route path="/login" element = {<Login onClickHandeler = {onClickHandeler}/>}/>
        <Route path="/addCategory" element={isVerified() ? <AddCategory /> : <Navigate to = "/login"/>} />
        <Route path="/addDish" element={isVerified() ? <AddDish /> : <Navigate to = "/login"/>} />
        <Route path="/addMenu" element={isVerified() ? <AddMenu /> : <Navigate to = "/login"/>} />
        <Route path="/deleteCategory" element={isVerified() ? <DeleteCategory /> : <Navigate to = "/login"/>} />
        <Route path="/deleteDish" element={isVerified() ? <DeleteDish /> : <Navigate to = "/login"/>} />
        <Route path="/updateDish" element={isVerified() ? <UpdateDish /> : <Navigate to = "/login"/>} />
      </Routes> */}
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
