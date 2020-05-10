import React, { Component } from 'react'
import axios from 'axios';

 class PostList extends Component {
     constructor(props){
        super(props)
        let sortArry;
        this.state = {
            posts: [],
            errorMsg : '',
            arryLength :0,
            globals: '',
            CountryList: []
        }
        this.sortBy= this.sortBy.bind(this);

        
     }
     
componentDidMount(){

    this.timer = setInterval(() => {

    axios.get('https://api.covid19api.com/summary')
   // axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(response.data.Global)
        console.log(response.data.Global.length)
        console.log(response.data.Countries.length)
        this.setState({arryLength : response.data.Countries.length})
        this.setState({posts: response.data.Countries})
        console.log("Country" );
        this.setState({CountryList :response.data.Countries[76]})
        
        this.setState({globals: response.data.Global})
    })
    .catch(error => {
        
        console.log(error)
        this.setState({errorMsg: 'Error retriving data'})
    })

}, 5000);  
    
}

// componentWillUnmount() {
//     clearInterval(this.timer)
//   }

sortBy = (key) =>{
    console.log("hi");
    console.log(this.state.posts.Country);
    
    // this.setState(prevState => {
    //           this.state.posts.Country.sort()
    //       }); 
    // console.log(posts);
    // console.log("end")
    // const { posts } = this.state
    // this.setState({
    //     posts: posts.sort((a,b) => a<b)
    // })
}


    render(props) {
        console.log(this.props.name)
        const { posts } = this.state
        const { errorMsg } = this.state
        const { arryLength } = this.state
        const { globals } = this.state
        const { CountryList } = this.state
        console.log(CountryList);
        return (
            <div className="container">
                <h1><span>LIVE UPDATE OF COVID19 CASES</span></h1>
               
                {/* {<div className="sort" onClick = { sortBy()}>sort</div>} */}
                {globals ? <div className="global_case">
                
                <ul className="listitem mng">
                            {/* <li> NewConfirmed</li> */}
                            <li>Global</li>
                            <li> Total Confirmed</li>
                            {/* <li> NewDeaths</li> */}
                            <li> Total Deaths</li>
                            {/* <li className="recover"> NewRecovered</li> */}
                            <li className="recover"> Total Recovered</li>
                        </ul>
                        <ul className="listitem">
                            {/* <li> {globals.NewConfirmed}</li> */}
                            <li>Global</li>
                            <li> {globals.TotalConfirmed}</li>
                            {/* <li> {globals.NewDeaths}</li> */}
                            <li> {globals.TotalDeaths}</li>
                            {/* <li className="recover"> {globals.NewRecovered}</li> */}
                            <li className="recover"> {globals.TotalRecovered}</li>
                        </ul>
                
                </div> : null}


                {CountryList ? <div className="global_case">
                
                <ul className="listitem mng">
                            <li> Country</li>
                            {/* <li> NewConfirmed</li> */}
                            <li> Total Confirmed</li>
                            {/* <li> NewDeaths</li> */}
                            <li> Total Deaths</li>
                            <li className="recover"> Total Recovered</li>
                        </ul>
                        <ul className="listitem">
                            <li> {CountryList.Country}</li>
                            {/* <li> {CountryList.NewConfirmed}</li> */}
                            <li> {CountryList.TotalConfirmed}</li>
                            {/* <li> {CountryList.NewDeaths}</li> */}
                            <li> {CountryList.TotalDeaths}</li>
                            <li className="recover"> {CountryList.TotalRecovered}</li>
                        </ul>
                
                </div> : null}


                



                {
                    
                   
                    <div >
                   
                        <ul className="listitem mng">
                        {/* onClick = { sortBy(post.Country)} */}
                            {/* <li > {globals.NewConfirmed}</li> */}
                            <li>Country</li>
                            {/* <li onClick = {()=> this.sortBy()}> Date</li>
                            <li> NewConfirmed</li> */}
                            {/* <li> NewDeaths</li> */}
                            {/* <li className="recover"> NewRecovered</li>

                            <li> Slug</li> */}
                            <li> Total Confirmed</li>
                            <li> Total Deaths</li>
                            <li className="recover"> Total Recovered</li>

                        </ul>
                   
                    
                    </div>
                }
                
                {
                   
                     posts.length ?
                    posts.map(post => 
                    <div key={post.Country}>
                 
                        <ul className="listitem">
                            <li > {post.Country}</li>
                            {/* <li> {post.Date}</li>
                            <li> {post.NewConfirmed}</li> */}
                            {/* <li> {post.NewDeaths}</li> */}
                            {/* <li className="recover"> {post.NewRecovered}</li>

                            <li> {post.Slug}</li> */}
                            <li> {post.TotalConfirmed}</li>
                            <li> {post.TotalDeaths}</li>
                            <li className="recover"> {post.TotalRecovered}</li>

                        </ul>
                   
                    
                    </div>)
                    :null
                }
               
                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}
export default PostList;