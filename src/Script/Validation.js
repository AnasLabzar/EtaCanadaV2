import React from 'react'

function Validation() {
    const Form = document.getElementById("formScript");
    console.log(Form);
    if (Form) {
        Form.addEventListener('submit', function(e) {
            console.log("sdf"); 
            const SelectNationality = document.getElementById("selectCountry");
            
            if (SelectNationality.value.trim() == "") {
                
                const ErrorForm = document.getElementById('error');
                ErrorForm.innerHTML = "Please don't forget select your nationality."
                ErrorForm.classList.add("text-red-500");
                e.preventDefault();
            }else{
                console.log("khataa");
            }
        })
    }
  return (
    <div>Validation</div>
  )
}

export default Validation