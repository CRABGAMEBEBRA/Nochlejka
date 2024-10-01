'use client'
import { Col, Container, Row } from "reactstrap";
import css from './mainPage.module.css'
import Image from "next/image";
import settings from '../assets/интерфейс_Монтажная область 1 (1).png';
import introPage from "./text";
import {useState } from "react";

export default function MainPage(){
    const [textNumber, setTextnumber] = useState(0);
    return (
        <Container className={css.registration_container}>
            <Col className={css.cat}/>
            <Image alt='settings' className={css.settings} src={settings} width={80} height={80}/>
                <Col className={css.bubble}>
                    <Row className={css.bubble1}></Row>
                    <Row className={css.textDiv}>
                        {introPage[textNumber].split("<br/>").map(introPageElement => (<p className={css.miniTextDiv}>{introPageElement.split("<b>").map((newEl,index) => (<p className={css.introPageElement}>{index%2==1? <b>{newEl}</b>:newEl}</p>))}</p>))}
                    </Row>
                    <Row className={css.nextPage} onClick={()=>setTextnumber(textNumber+1)}>
                    </Row>
                </Col>
                <Col className={css.statusDiv}><p className={css.status}>Статус</p></Col>
        </Container>
    )
}