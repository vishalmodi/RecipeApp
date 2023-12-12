import React, { useState } from "react";

function RecipeCreate( {handleCreateRecipe} ) {

  // default empty form data object
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  // declare hook to collect form data
  const [formData, setFormData] = useState({ ...initialFormState });

  // collect inputs as and when user add
  const handleChange = ({ target }) => {
    setFormData(
      {
        ...formData, 
        [target.name]: target.value
      });
  };

  // form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // pass new recipe object to parent component
    handleCreateRecipe(formData);

    // display empty inputs
    setFormData({...initialFormState});
  }

  return (
    <form name="create" onSubmit={handleFormSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                type="text"
                required="true"
                placeholder="name"
                onChange={handleChange}
                value={formData.name}
              ></input>
            </td>
            <td>
              <input
                name="cuisine"
                type="text"
                required="true"
                placeholder="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              ></input>
            </td>
            <td>
              <input
                name="photo"
                type="url"
                required="true"
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo}
              ></input>
            </td>
            <td>
              <textarea
                name="ingredients"
                required="true"
                placeholder="Ingredients"
                rows="3"
                onChange={handleChange}
                value={formData.ingredients}
              ></textarea>
            </td>
            <td>
              <textarea
                name="preparation"
                required="true"
                placeholder="Preparation"
                rows="3"
                onChange={handleChange}
                value={formData.preparation}
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
