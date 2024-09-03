import { createContext, useState ,useEffect} from "react";


export const GlobalFetchContext = createContext(null);

export const GlobalContextFunction = ({ children }) => {
  const [searchParams, setSearchParams] = useState("");
  const [recipe, setRecipe] = useState("");
  const [loading, setLoading] = useState(false);

  // const QueryString = {
  //   app_key: "26dec7cbdf8684a40898a64c9e15c95d",
  //   app_id: "69f096ac",
  // };
  
  // https://api.edamam.com/api/recipes/v2?type=public&q=${searchParams}&app_id=${app_id}&app_key=${app_key}
  
  const fetchData = async () => {
    // const { app_key, app_id } = QueryString;
    try {
      setLoading(true)
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchParams}`
      );
      const Fetcheddata = await response.json();
      
      if(Fetcheddata && Fetcheddata.meals){
        setRecipe(Fetcheddata.meals)
        
      }
      setLoading(false)
    } catch (err) {
      console.log(err.message);
      setLoading(false)
    }
  };

useEffect(()=>{
  setLoading(true)
  fetchData()
  setLoading(false)
},[searchParams])


  return (
    <GlobalFetchContext.Provider
      value={{ searchParams, setSearchParams ,recipe, loading ,setLoading}}
    >
      {children}
    </GlobalFetchContext.Provider>
  );
};
