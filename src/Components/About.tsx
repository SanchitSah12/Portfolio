import React from 'react';
import Icons from './icons'
function About() {
    return (
        <section className="p-4 lg:flex m-[5%] reveal  lg:mb-32" id="about">
            <div className="lg:m-4 lg:ml-10">
                <img className="w-52 h-52 block ml-auto mr-auto rounded-full lg:h-72 lg:w-72 lg:absolute lg:translate-y-[2rem]" src="https://media-exp1.licdn.com/dms/image/C4D03AQFR32hT71fs0A/profile-displayphoto-shrink_400_400/0/1641449042082?e=1649289600&v=beta&t=rgm7IDKNGUMhlOFtfWqDuQ-v4jA8QrJqAxGGTtQ7v80" alt="" />
            </div>

            <div className="text-black mt-10 lg:ml-96">
                <h1 className="text-center text-2xl font-bold lg:text-3xl">About Me</h1>
                <br />
                <p>I am Sanchit Sah from Nainital Uttarakhand, currently a student of B.Tech IT in Vellore Institute of Technology. I am currently learning WEB Development. I love to learn new technologies and work with them. I also love gaming so come around for a game of Valorant or Apex Legends. </p>

                <div className="mt-5 lg:mt-16 lg:ml-52 lg:mr-32 border-solid border-2 p-4 rounded-lg">
                    <h1 className="text-gray-600">External Links:</h1>
                    <br />
                    <div className="flex flex-row space-x-4">
                        <Icons link={"https://www.hackerrank.com/sahsanchit"} icon={"fab fa-hackerrank "} name={"Hackerrank"}></Icons>
                        <Icons link={"https://leetcode.com/SanchitSah/"} icon={"fas fa-code "} name={"Leetcode"}></Icons>
                    </div>
                </div>

            </div>
        </section>
    )

}


export default About;