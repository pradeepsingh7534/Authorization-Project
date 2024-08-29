import Loader from "../Components/Loader";
import React from "react";
import { AuthContext } from "../Context/AuthContext";
import Pagination from "../Components/Pagination";
import ProductList from "../Components/ProductList"

function Dashboard() {

  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(0);
  const [orderBy, setOrderBy] = React.useState("asc");
  const [loading, setLoading] = React.useState(true);
  const {AuthState , LogoutUser} = React.useContext(AuthContext);
  const {token} = AuthState;


  function getData(page, orderBy){

    setLoading(true);
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=10&orderBY=${orderBy}`)
    .then((res)=> res.json())
    .then((res)=> {
      setData(res.data)
      setTotalPage(res.totalPages)
      setLoading(false);
    })
    .catch((err)=> {
      console.log(err)
      setLoading(false);
    })

  }

  React.useEffect(()=>{

    getData(page, orderBy)

  }, [page, orderBy])

  function handlePage(val){
    const changeBy = page + val;
    setPage(changeBy);
  }

  function handleOrderBy(val){
    setOrderBy(val);
  }


  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={()=> LogoutUser()}>Logout</button>
        <p>
          Token: {token}
          <b data-testid="user-token"></b>
        </p>
      </div>
      <br />
      <Pagination current = {page} onChange= {handlePage} totalPage={totalPage} />
      <div style={{ display: "flex", justifyContent: "center" }}>
          {loading ? <Loader/> : <ProductList products={data}/>}
      </div>
   
    </div>
  );
}

export default Dashboard;
