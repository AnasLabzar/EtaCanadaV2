import React from 'react'
import { CountryList } from '../../Assets/json/countryList'
import '../../Assets/style/style.css';

function Modal() {

    function Validate(){
        const Form = document.getElementById("formScript");
        if (Form) {
            Form.addEventListener('submit', function(e) {
                const SelectNationality = document.getElementById("selectCountry");
                const EmailAdress = document.getElementById("EmailAdress");
                const selectTypeTrip = document.getElementById("selectTypeTrip");
                
                if (SelectNationality.value.trim() == "" || EmailAdress.value.trim() == "" || selectTypeTrip.value.trim() == "") { 
                    
                    const ErrorForm = document.getElementById('error');
                    const ModalForm = document.getElementById('formModal')
                    ErrorForm.innerHTML = "<div className='w-full bg-red-200 py-2 text-red-600' style='width: full; padding: 5px 0; background: red;  margin-top: 5px; color: white;'>Please fill in all fields.</div>"
                    ErrorForm.classList.add("text-red-500");
                    ErrorForm.classList.add("text-[18px]");
                    ErrorForm.classList.add("text-center");
                    ModalForm.classList.add("top-[10%]");
                    e.preventDefault();
                }else{
                    const ErrorForm = document.getElementById('error');
                    ErrorForm.innerHTML = ""
                    ErrorForm.classList.remove("text-red-500");
                    e.preventDefault();

                    var access = localStorage.getItem('access');
                    if (access == "true") {
                        localStorage.setItem("KeyAccess", "1")
                    }

                    const KeyAccess = localStorage.getItem("KeyAccess");
                    if (KeyAccess == "1") {
                        window.location.href = "http://go-canadian.com/apply-en";
                    }
                }
            })
        }
    }
    return (
        <div id='formModal' className='!w-fit absolute left-[36%] text-center top-[13%] bg-white px-10 mx-10 py-5 box-shadow-xl' onmousemove="myFunction(event)">
            <h1 className='text-3xl font-semibold my-2'>Prepare your travel to Canada</h1>
                    <div id='error'></div>
            <form action="" className='formScript' id="formScript">
                <div className='mt-8'>
                    <p className='text-lg mb-1'>What is your citizenship?</p>
                    <select id="selectCountry" class="select text-lg w-full py-1 text-[14px] !rounded-sm select-bordered px-2  bg-gray-300 text-gray-800">
                        <option value='' disabled name="Nationality" selected className="!text-black">Your nationality :</option>
                        {/* {
                                errors.email && <h3>{errors.email}</h3>
                            } */}
                        {CountryList.map((data, key) => (
                            <option key={key} value={data.code} className="!text-black !rounded-sm font-regular opacity-70">
                                {data.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div class="reason flex flex-col mt-8">
                    <h2 className='block !text-center text-black mb-1'>Your Email Address</h2>
                    <input placeholder='Email adsress' id="EmailAdress" type="email" className='py-1 px-3 border border-black text-gray-800 bg-gray-300'></input>
                </div>
                <div class="reason flex flex-col mt-8">
                    <h2 className='block !text-center text-black mb-1'>Select the type of your trip :</h2>
                    <select id="selectTypeTrip" class="select text-lg w-full py-1 text-[14px] !rounded-sm select-bordered px-2  bg-gray-300 text-gray-800">
                        <option value='' disabled name="Nationality" selected className="!text-black !text-sm">Type of your trip  :</option>
                        <option value='Holiday' name="Nationality" className="!text-black !text-sm">Holiday</option>
                        <option value='FV' name="Nationality" className="!text-black !text-sm">Family Visit</option>
                        <option value='Business' name="Nationality" className="!text-black !text-sm">Business</option>
                        <option value='Holiday' name="Nationality" className="!text-black !text-sm">Transit</option>
                    </select>
                </div>
                <div class="button-action flex flex-col text-center mt-6">
                    <button id='submitModal' onClick={Validate} type="submit" className='font-bold hover:bg-[#26374a] hover:text-white py-3 w-full bg-[#00102E] text-white'>ORDER NOW</button>
                    <p className='!text-center mx-auto text-black mt-6 text-[12px] px-6 flex flex-col w-[30em]'>In order to assist you in all your steps
                        The customer service is at your disposal 7 days a week from 08h to 21h
                        You can contact our operators by Chat, E-mail or Phone
                        Our customer service number is : <b className='mt-1'>+1-202-555-0106</b></p>
                </div>
            </form>
        </div>
    )
}

export default Modal