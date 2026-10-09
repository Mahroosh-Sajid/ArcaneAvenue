import './SectionDivider.css'
import Star from "../../assets/Star.png"
import { NavLink } from 'react-router'
import { useState } from 'react'
export default function SectionDivider({text, link}) {
    function drawLine(){
        return(
            <div className="div-line"/>
        )
    }
    function drawWithLink(){
        return(
            <>
            <div className="div-line" />
            <NavLink className="div-line" to={link}>View All</NavLink>
            <div className="div-line short" />
            </>
        )
    }
    return (
        <div className="section-divider">
            <div className="divider-col ">
                <div className="div-line" />
            </div>
            <div className="divider-col-middle">
                <img src={Star} />
                <h2>{text}</h2>
                <img src={Star} />
            </div>
            <div className="divider-col">
                {link ? drawWithLink() : drawLine() }
            </div>
        </div>
    )
}