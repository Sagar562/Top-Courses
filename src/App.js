import React, { useEffect, useState } from "react";
import { apiUrl, filterData } from "./data";
import Filter from "./Components/Filter";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";

const App = () => {

  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title)

  async function fetchData()
  {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect ( () => {
    fetchData();
  }, []);


  return <div className="min-h-screen flex flex-col bg-bgDark2">

  <div>
    <Navbar></Navbar>    
  </div>
    
  <div className="bg-bgDark2">
    <div>
      <Filter filterData = {filterData} category={category} setCategory={setCategory}></Filter>
      </div>

      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
      {
          loading ? (<Spinner></Spinner>) : (<Cards category={category} setCategory={setCategory} courses={courses}></Cards>)
      }
      </div>


  </div>

    
  </div>;
};

export default App;
