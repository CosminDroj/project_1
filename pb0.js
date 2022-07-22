const dataFetch = async()=>{
    const promiseFetch = await fetch ("https://catfact.ninja/fact");
    try{
      const result= await promiseFetch.json();
      console.log("result", result);
    }catch(error){
      console.log("error", error);
    }
  };
  dataFetch();
  const promise= fetch("https://catfact.ninja/fact");
    promise.then((response) => {
      const result = response;
      console.log("fact", result);
    })
    .catch((error) => {
      console.log("error", error);
    })