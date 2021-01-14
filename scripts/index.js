const btn = document.querySelector("button");
const errorBanner = document.querySelector('#error-banner');
const defaultRadio = document.getElementById("budget").checked = true;

btn.addEventListener("click", (e) => {
  e.preventDefault()
  const isFormValid = validate()

  if(isFormValid){
    window.location.replace("success.html")
}
  showBanner(isFormValid)
})

const requiredElementIds = ["firstName", "lastName", "email", "company", "message", "budget", "referral"]

const validate = () => {
  let isValid = true
  requiredElementIds.forEach(id => {
    let element = document.querySelector(`#${id}`)
    let isValueEntered = requiredValidator(element)
    element.classList.toggle("control-error", !isValueEntered)
    !isValueEntered ? isValid = false : null
  })
  return isValid;
}

const requiredValidator = (element) => {
  return element.value.trim() ? true : false;
}

const showBanner = (isValid) => {
    errorBanner.classList.toggle('show', !isValid)
  }
  
  errorBanner.addEventListener("click", (e)=>{
    errorBanner.classList.remove("show")
  })