import { createContext, useState, useEffect } from "react";

export const GlobalFetchContext = createContext(null);

export const GlobalContextFunction = ({ children }) => {
  const [searchParams, setSearchParams] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ifSearching, setIfSearching] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState("");
  const [categories, setCategories] = useState([]);
  const [searchCat, setSearchCat] = useState("");
  const [favouriteList, setFavouriteList] = useState([]);

  const fetchAllRecipe = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s`,
      );
      const Fetcheddata = await response.json();
      setRecipe(Fetcheddata.meals || []);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategoryList = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/categories.php`,
      );
      const Fetcheddata = await response.json();
      setCategories(Fetcheddata.categories || []);
    } catch (err) {
      console.error(err.message);
    }
  };

  const fetchFirstLetter = async () => {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${inputSearch.charAt(
          0,
        )}`,
      );
      const Fetcheddata = await response.json();
      setRecipe(Fetcheddata.meals || []);
    } catch (err) {
      console.error(err.message);
    }
  };

  const SearchAllRecipeByCategory = async (search) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`,
      );
      const Fetcheddata = await response.json();
      setRecipe(Fetcheddata.meals || []);
      setSearchCat(search);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const FetchOneRecipe = async (foodName, navigate) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`,
      );
      const Fetcheddata = await response.json();
      if (Fetcheddata.meals) {
        navigate(`/recipe/recipes/${Fetcheddata.meals[0].idMeal}`);
      } else {
        console.error("Recipe not available")
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const HandleClickOnCategory = (getCategory) => {
    SearchAllRecipeByCategory(getCategory);
  };

  const HandleInputSearch = (e) => {
    setInputSearch(e.target.value);
    setIfSearching(true);
  };

  const HandleAddToFav = (getFav) => {
    let cpyFavourite = [...favouriteList];
    const index = cpyFavourite.findIndex(
      (each) => each.idMeal === getFav.idMeal,
    );

    if (index === -1) {
      cpyFavourite.push(getFav);
    } else {
      cpyFavourite.splice(index);
    }
    setFavouriteList(cpyFavourite);
  };

  // useEffect(() => {
  //   fetchAllRecipe();
  // }, [searchParams, inputSearch]);
  useEffect(() => {
    fetchAllRecipe();
  }, []);

  // useEffect(() => {
  //   fetchFirstLetter();
  // }, [inputSearch]);

  // useEffect(() => {
  //   SearchAllRecipeByCategory();
  // }, [searchCat]);

  // useEffect(() => {
  //   fetchCategoryList();
  //   SearchAllRecipeByCategory();
  // }, []);

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
        fetchCategoryList,
        FetchOneRecipe,
      }}
    >
      {children}
    </GlobalFetchContext.Provider>
  );
};
