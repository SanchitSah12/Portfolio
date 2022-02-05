import Slide from '@mui/material/Slide';
// import JavascriptIcon from '@mui/icons-material/Javascript';

import Skills from '../data/skills';


function Skill(element: { name: any; slider: boolean | undefined; width: any; timers:any;}) {
    return (
        <div className="w-96 justify-center m-auto">
            <h1 className="text-left font-sans text-sm font-bold">{element.name}</h1>
            <div className="w-full bg-gray-200 rounded-full">
                <Slide direction='left' in={!element.slider} timeout={200*element.timers} >
                    <div className="bg-blue-600 text-xs  font-medium text-blue-100 text-center p-0.5 leading-none rounded-l-full" style={{ width: element.width }}>{element.width}</div>
                </Slide>

            </div>
            <br />
        </div >
    )
}


function s(props: { slider: boolean | undefined; }) {
    return <div>
        {Skills.map((item) => {
            return <Skill timers={item.key} slider={props.slider} key={item.key} name={item.name} width={item.width}></Skill>
        })}
    </div>

};

export default s;