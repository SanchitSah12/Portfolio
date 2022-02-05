import React, { useState } from "react";

import Slide from "@mui/material/Slide";

import Projects from "../data/projects";

function Project(element: {
    link: any;
    img: any;
    name: any;
    description: any;
    timers: any;
    slider: any;
    frameworks: any;
}) {
    var [trig, setTrigger] = useState(false);

    window.addEventListener("scroll", trigger);

    function trigger() {
        var reveals = document.querySelectorAll(".trigger");

        reveals.forEach((element, index) => {
            var windowHeight = window.innerHeight;
            var revealtop = element.getBoundingClientRect().top;
            var revealpoint = 150;

            if (revealtop < windowHeight - revealpoint) {
                setTrigger(true);
            } else {
                setTrigger(false);
            }
        });
    }

    return (
        <Slide direction="up" in={trig} timeout={200 * element.timers}>
            <div className="w-96 justify-center m-5 rounded-3xl p-3">
                <a href={element.link}>
                    <img className="aspect-video" src={element.img} alt="" />
                    <div className="bg-white text-black h-52 px-4 pt-4 text-justify">
                        <h1 className="font-bold text-xl">{element.name}</h1>
                        <p>{element.description}</p>

                        <p className="text-left py-4 font-bold">
                            Frameworks and Languages Used:
                        </p>
                        <div className="flex space-x-5">
                            {element.frameworks.map((framework: any) => {
                                return <span className="w-10 ">{framework}</span>;
                            })}
                        </div>
                    </div>
                </a>
            </div>
        </Slide>
    );
}

function s(props: { slider: boolean | undefined }) {
    return (
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3  overflow-hidden trigger m-auto items-center">
            {Projects.map((item) => {
                return (
                    <Project
                        timers={item.key}
                        key={item.key}
                        link={item.link}
                        img={item.img}
                        name={item.name}
                        description={item.description}
                        slider={props.slider}
                        frameworks={item.frameworks}
                    />
                );
            })}
        </div>
    );
}

export default s;
