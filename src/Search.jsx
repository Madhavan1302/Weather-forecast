import { useState } from "react";
import "./Search.css"

const Search=({props})=>{
    const [cit,setCit]=useState("");
    const search=(e)=>{
        if(e.key==="Enter"){
            props(cit);
        }
    }
    return(<>
    <div className="search-container">
        <div><input value={cit} type="text" placeholder="Enter the city" onChange={(e)=>{setCit(e.target.value)}} onKeyDown={(e)=>{search(e)}}/></div>
        <div className="btn btn-primary" onClick={()=>{props(cit)}}>Search</div>
    </div>
    </>);
}
export default Search;