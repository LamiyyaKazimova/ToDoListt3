import {
  input,
  button,
  div,
  wrapper,
  body,
  sure,
  yes,
  no,
  text,
  orderedList,
  newButton,
  deleteButton,
  editButton,
  newInput,
  li,
  commonButton,
  span,
} from "./assets/consts.js";

import { add } from "./assets/main.js";

import { newFunction } from "./assets/newFunction.js";

import { deleteFunction } from "./assets/deleteFunction.js";

button.addEventListener("click", () => {
  if (input.value.trim() === "") {
    return;
  }
  newButton.style.display = "none";
  span.textContent = input.value;
  add();

  newFunction();

  deleteFunction();

  commonButton.append(editButton, deleteButton);
  li.append(span, newInput, commonButton, newButton);
  orderedList.append(li);
  wrapper.append(orderedList);

  input.value = "";
});
