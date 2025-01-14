import {deleteButton,sure, yes, no, li, text,span } from "./consts.js";
export function deleteFunction() {
  deleteButton.addEventListener("click", () => {
    sure.classList.remove("none");
    text.textContent = `Are you sure ${span.textContent}?`;

    yes.addEventListener("click", () => {
      li.remove();
      sure.classList.add("none");
    });

    no.addEventListener("click", () => {
      sure.classList.add("none");
    });
  });
}
