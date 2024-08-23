import { createContext, useState ,useEffect} from "react";

export const GlobalFetchContext = createContext(null);

export const GlobalContextFunction = ({ children }) => {
  const [searchParams, setSearchParams] = useState("");
  const [recipe, setRecipe] = useState("");

  const QueryString = {
    app_key: "26dec7cbdf8684a40898a64c9e15c95d",
    app_id: "69f096ac",
  };

  const HandleFormSubmission = (e) => {
    e.preventDefault();
    useEffect(()=>{
      fetchData()
    },[searchParams])
  };

  const fetchData = async () => {
    const { app_key, app_id } = QueryString;
    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${searchParams}&app_id=${app_id}&app_key=${app_key}`
      );
      const Fetcheddata = await response.json();
    } catch (err) {
      console.log(err.message);
    }
  };


  return (
    <GlobalFetchContext.Provider
      value={{ searchParams, setSearchParams, HandleFormSubmission }}
    >
      {children}
    </GlobalFetchContext.Provider>
  );
};
