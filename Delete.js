import { Button } from "@mui/material";
import axios from 'axios';
function Delete() {
     function handleDelete(event) {
             event.preventDefault();
             axios.post('http://localhost:5000/delete',{
              un:document.getElementsByName('un')[0].value, 
              pw:document.getElementsByName('pw')[0].value
            }).then((response)=>{
                console.log(response.data);
            })    
     }
return (
    <center>
        <form>
            UserName:<input type="text" name='un' /><br></br>
            Password:<input type="password" name="pw" /><br></br>
            <button onClick={handleDelete}>Delete</button>
        </form>
    </center>
)
}
export default Delete;