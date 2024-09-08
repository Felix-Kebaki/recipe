import { createContext, useState, useEffect } from "react";

export const GlobalFetchContext = createContext(null);

export const GlobalContextFunction = ({ children }) => {
  const [searchParams, setSearchParams] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);
  const [ifSearching, setIfSearching] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState("");
  const [categories, setCategories] = useState("");
  const [searchCat, setSearchCat] = useState("");
  const [favouriteList, setFavouriteList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParams}`
      );
      const Fetcheddata = await response.json();

      if (Fetcheddata && Fetcheddata.meals) {
        setRecipe(Fetcheddata.meals);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchCategoryList = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/categories.php`
      );
      const Fetcheddata = await response.json();
      
      if (Fetcheddata && Fetcheddata.categories) {
        setCategories(Fetcheddata.categories);
      }
      
    } catch (err) {
      console.log(err.message);
    }
  };

  const fetchFirstLetter = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputSearch.charAt(
          0
        )}`
      );
      const Fetcheddata = await response.json();

      if (Fetcheddata && Fetcheddata.meals) {
        setRecipe(Fetcheddata.meals);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const FetchCatSearch = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchCat}`
      );
      const Fetcheddata = await response.json();
      
      if (Fetcheddata && Fetcheddata.meals) {
        setRecipe(Fetcheddata.meals);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const HandleClickOnCategory=(getCategory)=>{
    setSearchCat(getCategory)
  }

  const HandleInputSearch = (e) => {
    setInputSearch(e.target.value);
    setIfSearching(true);
  };

  const HandleAddToFav = (getFav) => {
    let cpyFavourite = [...favouriteList];
    const index = cpyFavourite.findIndex(
      (each) => each.idMeal === getFav.idMeal
    );

    if (index === -1) {
      cpyFavourite.push(getFav);
    } else {
      cpyFavourite.splice(index);
    }
    setFavouriteList(cpyFavourite);
  };

  useEffect(() => {
    fetchData();
  }, [searchParams, inputSearch]);

  useEffect(() => {
    fetchFirstLetter();
  }, [inputSearch]);

  useEffect(() => {
    FetchCatSearch();
  }, [searchCat]);  

  useEffect(() => {
    fetchCategoryList();
    FetchCatSearch();
  }, []);

  return (
    <GlobalFetchContext.Provider
      value={{
        recipe,
        loading,
        HandleAddToFav,
        favouriteList,
        setLoading,
        setInputSearch,
        inputSearch,
        searchParams,
        setSearchParams,
        ifSearching,
        setIfSearching,
        HandleInputSearch,
        setRecipeDetails,
        recipeDetails,
        categories,
        HandleClickOnCategory,
        searchCat,
      }}
    >
      {children}
    </GlobalFetchContext.Provider>
  );
};
