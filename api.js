export const updateClickCount = (clickCount) => {
  fetch(`<host>/api/v1/progress?click_count=${clickCount}`, {
    method: "PATCH",
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
};
