import React, { useState, useCallback } from 'react'
import logoWhite from '../../Assets/img/logo_white.png'
import { render } from 'react-dom';
import { useModal } from 'react-hooks-use-modal';
import sslSecurity from '../../Assets/img/ssl-secure-website_light-theme.png'
import closeSVG from '../../Assets/img/x-solid.svg'


function Footer() {
    const [Modal, open, close, isOpen] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false
    });
    const [Modal2, open2, close2, isOpen2] = useModal('root', {
        preventScroll: true,
        closeOnOverlayClick: false
    });
    return (
        <div className='bg-[#00102E] h-30 w-full'>
            <div className=' md:container text-white !w-[1170px] py-20 mx-auto flex'>
                <div className="col w-2/3">
                    <img src={logoWhite} className="h-[30px]" alt="" />
                    <div className='flex gap-6 mt-10 opacity-60'>
                        <img src={sslSecurity} />
                        <p className='text-sm'>Your personal information is securely encrypted by<br />Secure Sockets Layer (SSL) software</p>
                    </div>
                </div>
                <div className="col flex gap-8">
                    <button onClick={open}>
                        Terms and Condition
                    </button>
                    <Modal>
                        <div className='bg-white w-[60em] h-fit px-6 py-10'>
                            <h1 className='mb-10 text-2xl font-bold'>TERMES AND CONDITIONS</h1>
                            <h3 className='mb-4 text-lg font-medium'>1. CLARIFICATION</h3>
                            <p>For the purpose of this ‘website’ and the ‘Terms and Conditions’ herein, the words “our”, “us”, “we” refers to this site.</p>
                            <h3 className='mb-4 mt-8 text-lg font-medium'>2. WEBSITE USE</h3>
                            <p>By using this website you agree to:
                                a. Our Terms and Conditions.
                                b. To the use of website in a legal and lawful manner.
                                c. Its use for the purpose it was intended only.
                                d. Not to compromise website security.</p>
                            <h3 className='mb-4 mt-8 text-lg font-medium'>3. DELIVERY CONFIRMATION</h3>
                            <p>Electronic Travel Authorization application confirmation as mentioned in ‘FAQS’ is usually within 72 hours. Canada Electronic Travel Authorization applications in some instances may take longer.
                                This application site is not responsible for any delay for any reason including but not limited to the following: Rare errors made by immigration officers, errors made in the information provided by you, electronic failures and any other unforeseen cause.
                                These circumstances are exceptional. Our administration takes every reasonable step to expedite delivery of your ETA. We are not responsible for any loss or delay including but not limited to flights, tickets, tours, accommodation, car hire, convention tickets or any other instances resulting from delay or rejection of your application. By using this site you indemnify ETA Canada from any losses, legal fees, claims, expenses and liabilities whatsoever in relation to your use.</p>

                                <h3 className='mb-4 mt-8 text-lg font-medium'>4. REFUNDS</h3>
                            <p>Refunds are available and honoured to failed applicants. The refund amount is credited back to applicant using your original payment method. For more information please refer to FAQS – Q ‘Can I get a refund if me eTA application is rejected?’.</p>
                            <h3 className='mb-4 mt-8 text-lg font-medium'>5. CHANGES</h3>
                            <p>ETA Canada reserves the right to change any part of the ‘Terms and Conditions’ without notice in order to but not limited to improvement of clarity, efficiency, practicality and any other reason ETA Canada deems necessary. ETA Canada may add or remove content where deemed necessary without liability or notification.</p>
                            <button className='text-black absolute right-4 top-4' onClick={close}>
                                <img className='w-[14px]' src={closeSVG} />
                            </button>
                        </div>
                    </Modal>
                    <Modal2>
                        <div className='bg-white w-[60em] h-fit px-6 py-10'>
                            <h1 className='mb-10 text-2xl font-bold'>PRIVACY POLICY</h1>
                            <p>
                                <ul>
                                    <li>
                                    The purpose of our Privacy Policy is to inform the customer how we handle their private information. The services offered through this website are governed by our Privacy Policy. If you have questions pertaining to our Privacy Policy, please contact us through our contact page. We will reply within one business day.
                                    </li><br />
                                    <li>
                                    Private information is provided and submitted by the visitors and applicant of our website voluntarily. This site will not only collect the data but also store traffic data and details of user visits to the website including your email address, your name, any questions submitted, your email signature, etc. Your personal credit or debit card information used to purchase this service is also considered private. All credit card numbers are encrypted for security reasons and to comply with PCI standards. Only the necessary personal information needed to process your order is collected.
                                    </li><br />
                                    <li>
                                    The information obtained through this site is never sold, disclosed or shared. Information is deleted on servers which meet and exceed most government standards. All information in this site will be kept confidential and will not be sold to third parties.
                                    </li><br />
                                    <li>
                                    We reserve the right to refuse service to any applicant for any reason, including but not limited to misrepresented or fraudulent transactions which will be canceled without any further notice.
                                    </li><br />
                                    <li>
                                    Use of this site is subject to the Terms and Conditions. Please review our Terms and Conditions to understand our practices before using our services.
                                    </li><br />
                                    <li>
                                    Any questions concerning this site and its Privacy Policy should be addressed through our contact page.
                                    </li><br />
                                </ul>
                            </p>
                            <button className='text-black absolute right-4 top-4' onClick={close2}>
                                <img className='w-[14px]' src={closeSVG} />
                            </button>
                        </div>
                    </Modal2>
                    <button onClick={open2}>
                        Privacy Policy
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer