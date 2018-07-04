import React from "react";

const RecipeListItem = (props) => (
  <tr>
    <td>
      <a target="_blank" href={props.link}>{props.title}</a>
    </td>
  </tr>
);

export default RecipeListItem;