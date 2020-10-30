
import React from "react";



const Form = (props) => {
    const [formData, setFormData] = React.useState(props.gear);

    //FUNCTIONS
    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent Form from Refreshing
      props.handleSubmit(formData); // Submit to Parents desired function
      props.history.push("/gear"); //Push back to display page
    };
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return(
        <div className="formContainer">
            {/* <h1 style={{border: "3px solid yellow", marginTop:"150px"}}> Add New Tech Gear</h1> */}
            <form onSubmit={handleSubmit} className="form">
                <div className="techGearh1">
                    <h1>Add New Tech Gear</h1>
                </div>
                
                <input className="input1"
                type="text"
                name="name"
                placeholder="product name"
                value={formData.name}
                onChange={handleChange}
                />
                <input className="input2"
                type="number"
                name="price"
                placeholder="product price"
                // value={formData.price}
                onChange={handleChange}
                />
                <textarea className="input3"
                type="text"
                name="description"
                placeholder="product description"
                // value={formData.description}
                onChange={handleChange}
                />
                <textarea className="input4"
                type="text"
                name="review"
                placeholder="product review"
                // value={formData.review}
                onChange={handleChange}
                />
                <input className="input5"
                type="text"
                name="url"
                placeholder="product url"
                value={formData.url}
                onChange={handleChange}
                />
                <input className="input6"
                type="text"
                name="img"
                placeholder="product image address"
                value={formData.img}
                onChange={handleChange}
                />
                <input type="submit" className="submit"/>
            </form>
        </div>
    )
}

// textarea
// const Form = (props) => {
//   //STATE FOR THE FORM
//   const [formData, setFormData] = React.useState(props.gear);

//   //FUNCTIONS
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent Form from Refreshing
//     props.handleSubmit(formData); // Submit to Parents desired function
//     props.history.push("/"); //Push back to display page
//   };

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   return (
//       <div style={{border:"20px solid yellow"}}>
    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     name="name"
    //     value={formData.name}
    //     onChange={handleChange}
    //   />
//       <input
//         type="number"
//         name="price"
//         value={formData.price}
//         onChange={handleChange}
//       />
//        <input
//         type="text"
//         name="description"
//         value={formData.description}
//         onChange={handleChange}
//       />
//        <input
//         type="text"
//         name="review"
//         value={formData.review}
//         onChange={handleChange}
//       />
//        <input
//         type="text"
//         name="url"
//         value={formData.url}
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="img"
//         value={formData.img}
//         onChange={handleChange}
//       />
//       <input type="submit" value={props.label} />
//     </form>

//       </div>
//   );
// };

export default Form;