import React, {useState} from 'react';
import './App.css';

import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UnControlledAccordion from "./components/UnControlledAccordion/UnControlledAccordion";
import {UnControlledRating} from "./components/UnControlledRating/UnControlledRating";
import {UnControlledOnOff} from "./components/UnControlledOnOff/UnControlledOnOff";
import {Accordion} from "./components/Accordion/Accordion";


function sum(a: number, b: number) {

    alert(a + b)
}

//sum(23,12);
//sum(100,300);


//function declaration
function App() {
    //полезное что-то
    //обязана вернуть JSX


    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [OnOffValue, setOnOffValue] = useState<boolean>(true);

    return (
        <div className={"App"}>
            <OnOff on = {OnOffValue} onClick={setOnOffValue}/>
            <UnControlledOnOff onChange={setOnOffValue}/> {OnOffValue.toString()}

            <UnControlledAccordion titleValue={"Не контролируемое Menu"}/>
            <Accordion titleValue={"Контролируемое Users"} collapsed={accordionCollapsed} onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>

            <UnControlledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

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
