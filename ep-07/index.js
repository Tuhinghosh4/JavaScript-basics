//github
const githubAPI="https://api.github.com/users/Tuhinghosh4";
const fetchData = async()=>{
    try{
        const res = await fetch(githubAPI);
        const jsonData = await res.json();
        console.log(jsonData);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("will run always");
    }
}
fetchData();