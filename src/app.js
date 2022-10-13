class IndecisonApp extends React.Component{
   constructor(props) {
     super(props);
     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
     this.handlePick = this.handlePick.bind(this);
     this.handleAddOption = this.handleAddOption.bind(this);
     this.handleSingleDeleteOption = this.handleSingleDeleteOption.bind(this);
     this.state = {
     options : props.options
      }
    }  
    componentDidMount()
    {
        try{
        const json = localStorage.getItem('options');
        const options = JSON.parse(json)

        this.setState(()=> ({options : options}));
        }

        catch(e){

        }


        
    }

    componentDidUpdate(prevProps , prevState)
    {
        if (prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
        } 
    }

    componentWillUnmount()
    {
        console.log("The component will unmount");
    }


    
    handleDeleteOptions() {
        this.setState( () => ({options :[]}));
    }

    handleSingleDeleteOption(optionToRemove){
        this.setState((prevState) =>({
            options: prevState.options.filter((option)=>{
                return optionToRemove !== option;
            })
        }));
    }
    
    handlePick () {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option){

        if (!option) {
            return 'Please enter a valid input';
        }
        else if (this.state.options.indexOf(option) > -1) 
        {``
            return 'The data already exists';
        }

        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat([option])
        //  };
        // });

        this.setState( (prevState) => ({options: prevState.options.concat([option])}));
    }
    render()
    {
        const title = 'Indecison App';
        const subtitle = 'Let the computer think ';
        return (
                 <div>
                <Header  subtitle = {subtitle} />
                <Action 
                hasOptions = {this.state.options.length > 0}
                handlePick = {this.handlePick}/>
                <Options 
                 options = {this.state.options}
                 handleDeleteOptions = {this.handleDeleteOptions}
                 handleSingleDeleteOption = {this.handleSingleDeleteOption}/>
                <AddOptionsForm
                 handleAddOption = {this.handleAddOption} 
                />
                </div>
                );
    }
}


const Header =  (props) => {
    return(
        <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        </div>
   
    );
}


Header.defaultProps = {

    title : 'Indecision App'
};

//class Header extends React.Component {
  //  render()
    //{
        //console.log(this.props);
        
   // }
//}


const Action = (props) => {

    return(
        <div>
         <button 
         onClick = {props.handlePick}
         disabled = {!props.hasOptions}
         >Tell me what shall I select</button>
        </div>
    );
}


const Options = (props) => {

    return(
        <div>
        <button onClick = {props.handleDeleteOptions}>Remove this</button>
        {props.options.length ===  0 && <p>Please add an option to get started</p>} 
            {props.options.map((option) => 
                <AddNewOptions 
                 key = {option} 
                 optionText = {option} 
                 handleSingleDeleteOption = {props.handleSingleDeleteOption}
                 />
                 )
            }   
        </div>      
    );
}


const AddNewOptions = (props) => {
    return(
        <div>
         {
         <p>{props.optionText}

         <button onClick = {(e)=>{
            props.handleSingleDeleteOption(props.optionText);
         }}>delete</button>
         </p>
         }
        </div>
    );
}

// class AddNewOptions extends React.Component {
//     render()
//     {
//         return(
//             <div>
//              {
//              <p>{this.props.optionText}</p>
//              }
//             </div>
//         );
//     }
// }


class AddOptionsForm extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        }

        
    }

    handleAddOption(e)  {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState( () => ({error}));

        // this.setState( () => {
        //     return {error};
        // });
        if (!error){
            e.target.elements.option.value = '';
        }
    }
    render()
    {
      return (
        <div>
          {this.state.error && <p>{this.state.error}</p>}
         <form onSubmit={this.handleAddOption}>
          <input type = 'text' name = 'option' />
          <button>Add Option</button>
         </form>
        </div>
      );  
    }
}

IndecisonApp.defaultProps = {
    options : []
};

ReactDOM.render(<IndecisonApp /> , document.getElementById('app'));

//I am noob