
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

    // const emptyGear = {
    //     name: "",
    //     price: 0,
    //     description: "",
    //     review: "",
    //     url: "",
    //     img: ""
    //   }


    return(
        <div>
            <h1 style={{border: "3px solid yellow", marginTop:"300px"}}> HELLO</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
                <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                />
                <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                />
                <input
                type="text"
                name="review"
                value={formData.review}
                onChange={handleChange}
                />
                <input
                type="text"
                name="url"
                value={formData.url}
                onChange={handleChange}
                />
                <input
                type="text"
                name="img"
                value={formData.img}
                onChange={handleChange}
                />
                <input type="submit" />
            </form>
        </div>
    )
}


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