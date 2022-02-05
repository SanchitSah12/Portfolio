import React from 'react';

const Icons = (props: { link: string | undefined; icon: string | undefined; name: any; }) => {
    return <div >
        <a href={props.link} className='text-blue-700 hover:text-blue-900'>    
            <h1><i className={`${props.icon} inline`}></i>{props.name}</h1>
        </a>
    </div>;
};

export default Icons;
