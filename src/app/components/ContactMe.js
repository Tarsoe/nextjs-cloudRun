import Image from 'next/image';

const ContactMe = () => {
    return (
        // <div className="bg-blue-400 p-8 -mt-10 h-[300px] rounded-lg text-white">
        <div className=" p-8 -mt-10 h-[300px] rounded-lg text-white">
            <h2 className="text-xl font-bold tracking-[7px] mb-6">CONTACT ME AT</h2>

            <div className="mb-4 flex items-center">
                {/* <Image
                    src="/mail.png"
                    alt="Email"
                    width={24}  // Must use pixel value
                    height={24} // Must use pixel value
                    className="mr-4"
                /> */}
                <Image
                    src="/mail.png"
                    alt="Email"
                    width={24}
                    height={24}
                    // layout="intrinsic"  // Keeps intrinsic size and responsive resizing
                    className="mr-4"
                />

                <span>6431503130@lamduan.mfu.ac.th</span>
            </div>

            <div className="mb-4 flex items-center">
                <Image
                    src="/phone.png"
                    alt="Phone"
                    width={24}  // Must use pixel value
                    height={24} // Must use pixel value
                    className="mr-4"
                />
                <span>093-443-8586</span>
            </div>

            <div className="mb-4 flex items-center">
                <Image
                    src="/website.png"
                    alt="Website"
                    width={24}  // Must use pixel value
                    height={24} // Must use pixel value
                    className="mr-4"
                />
                <a href="https://mywebsite.com" className="underline" target="_blank" rel="noopener noreferrer">
                    https://mywebsite.com
                </a>
            </div>

            <div className="mb-4 flex items-center">
                <Image
                    src="/git.png"
                    alt="GitHub"
                    width={24}  // Must use pixel value
                    height={24} // Must use pixel value
                    className="mr-4"
                />
                <a href="https://github.com" className="underline" target="_blank" rel="noopener noreferrer">
                    https://github.com
                </a>
            </div>

            <div className="mb-4 flex items-center">
                <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={24}  // Must use pixel value
                    height={24} // Must use pixel value
                    className="mr-4"
                />
                <div>
                    <a
                        href="https://www.facebook.com/profile.php?id=100010304749441&mibextid=ZbWKwL"
                        className="underline block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Tar Soegay
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;



// import Image from 'next/image';

// const ContactMe = () => {
//     return (
//         <div className="bg-blue-400 p-8 -mt-10 h-[300px] rounded-lg text-white">
//             <h2 className="text-xl font-bold tracking-[7px] mb-6">CONTACT ME AT</h2>

//             <div className="mb-4 flex items-center">
//                 <Image
//                     src="/mail.png"
//                     alt="Email"
//                     width={24}
//                     height={24}  // Fixed dimensions in pixels
//                     className="mr-4"
//                 />
//                 <span>6431503130@lamduan.mfu.ac.th</span>
//             </div>

//             <div className="mb-4 flex items-center">
//                 <Image
//                     src="/phone.png"
//                     alt="Phone"
//                     width={24}
//                     height={24}  // Fixed dimensions in pixels
//                     className="mr-4"
//                 />
//                 <span>093-443-8586</span>
//             </div>

//             <div className="mb-4 flex items-center">
//                 <Image
//                     src="/website.png"
//                     alt="Website"
//                     width={24}
//                     height={24}  // Fixed dimensions in pixels
//                     className="mr-4"
//                 />
//                 <a href="https://mywebsite.com" className="underline" target="_blank" rel="noopener noreferrer">
//                     https://mywebsite.com
//                 </a>
//             </div>

//             <div className="mb-4 flex items-center">
//                 <Image
//                     src="/git.png"
//                     alt="GitHub"
//                     width={24}
//                     height={24}  // Fixed dimensions in pixels
//                     className="mr-4"
//                 />
//                 <a href="https://github.com" className="underline" target="_blank" rel="noopener noreferrer">
//                     https://github.com
//                 </a>
//             </div>

//             <div className="mb-4 flex items-center">
//                 <Image
//                     src="/facebook.png"
//                     alt="Facebook"
//                     width={24}
//                     height={24}  // Fixed dimensions in pixels
//                     className="mr-4"
//                 />
//                 <div>
//                     <a
//                         href="https://www.facebook.com/profile.php?id=100010304749441&mibextid=ZbWKwL"
//                         className="underline block"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         Tar Soegay
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactMe;



// import Image from 'next/image';

// const ContactMe = () => {
//     return (
//         <div className="bg-blue-400 p-8 -mt-10 h-[300px] rounded-lg text-white">
//             {/* <h2 className="text-2xl font-bold mb-6">Contact Me At</h2> */}
//             <h2 className="text-xl font-bold tracking-[7px] mb-6">CONTACT ME AT</h2>

//             <div className="mb-4 flex items-center">
//                 <Image
//                     src="/mail.png"
//                     alt="Email"
//                     width={24}
//                     height={24}
//                     className="mr-4"
//                 />
//                 <span>6431503130@lamduan.mfu.ac.th</span>
//             </div>

//             <div className="mb-4 flex items-center">
//                 <Image
//                     src="/phone.png"
//                     alt="Phone"
//                     width={24}
//                     height={24}
//                     className="mr-4"
//                 />
//                 <span>093-443-8586</span>
//             </div>

//             <div className="mb-4 flex items-center">
//                 <Image
//                     src="/website.png"
//                     alt="Website"
//                     width={24}
//                     height={24}
//                     className="mr-4"
//                 />
//                 <a href="https://mywebsite.com" className="underline" target="_blank" rel="noopener noreferrer">
//                     https://mywebsite.com
//                 </a>
//             </div>

//             <div className="mb-4 flex items-center">
//                 <Image
//                     src="/git.png"
//                     alt="GitHub"
//                     width={24}
//                     height={24}
//                     className="mr-4"
//                 />
//                 <a href="https://github.com" className="underline" target="_blank" rel="noopener noreferrer">
//                     https://github.com
//                 </a>
//             </div>

//             <div className="mb-4 flex items-center">
//                 <Image
//                     src="/facebook.png"
//                     alt="Facebook"
//                     width={24}
//                     height={24}
//                     className="mr-4"
//                 />
//                 <div>
//                     {/* <span>(Tar Soegay)</span> */}
//                     <a
//                         href="https://www.facebook.com/profile.php?id=100010304749441&mibextid=ZbWKwL"
//                         className="underline block"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         Tar Soegay
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactMe;