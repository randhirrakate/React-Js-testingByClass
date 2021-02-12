import { Component } from "react";

class ByClass extends Component{

    state=
    {
        my_info: "React",
        my_mobile: "8686261098"
    } 

     myFunction = () => 
        {
            alert('Hii');
        }

        render()
        {
            return(
                <div>
                    <h1> My Name is {this.state.my_info}</h1>
                    <h1> My Mobile No is {this.state.my_mobile}</h1>

                    <button onClick={this.myFunction}>
                        Click Here
                    </button>
                </div>
            );
        }
}

export default ByClass;