const form = document.querySelector(".feedback-form");
const LS_KEY = "feedback-form-state";

const formData = {
email: "",
message: "",
};

const saved = JSON.parse(localStorage.getItem(LS_KEY));

if (saved) {
formData.email = saved.email || "";
formData.message = saved.message || "";


form.elements.email.value = formData.email;
form.elements.message.value = formData.message;
}

form.addEventListener("input", (e) => {
formData[e.target.name] = e.target.value.trim();
localStorage.setItem(LS_KEY, JSON.stringify(formData));
});


form.addEventListener("submit", (e) => {
e.preventDefault();


if (!formData.email || !formData.message) {
alert("Fill please all fields");
return;
}

console.log(formData);

localStorage.removeItem(LS_KEY);
form.reset();
formData.email = "";
formData.message = "";
});