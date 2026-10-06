import "./Product.css"
import { NavLink } from "react-router"
export default function Product({title, img, price, link}) {
    return (
        <NavLink className="product-card" to={link}>
            <img className="product-img" src={img} alt="product-image" />
            <p className="product-title">{title}</p>
            <p className="product-price" >{price}</p>
        </NavLink>
    )
}