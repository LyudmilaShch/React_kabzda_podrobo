import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {OnOffHomeWork} from "./components/OnOffHomeWork/OnOffHomeWork";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";


function sum(a: number, b: number) {

    alert(a + b)
}

//sum(23,12);
//sum(100,300);


//function declaration
function App() {
    debugger
    //полезное что-то
    //обязана вернуть JSX
    console.log("App rendering")
    return (
        <div>
            <OnOff />
            <OnOff />

            <UnControlledAccordion titleValue={"Menu"}/>
            <UnControlledAccordion titleValue={"Users"}/>

            <UnControlledRating />

{/*            <div>Мое решение</div>
            <OnOffHomeWork OnOrOff={false}/>
            <OnOffHomeWork OnOrOff={true}/>
            <PageTitle title={"This is APP component"}/>
            <PageTitle title={"My friends"}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;
