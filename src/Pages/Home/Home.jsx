import "./Home.css"
import SectionDivider from "../../components/SectionDivider/SectionDivider"
import Product from "../../components/Product/Product"
import ProductBook from "../../assets/Product_Book.png"
import ProducBook2 from "../../assets/Produc_Book2.png"
import ProductCoin from "../../assets/Product_Coin.png"
import ProductCups from "../../assets/Product_Cups.png"
import ProductCards from "../../assets/Product _Cards.png"

export default function Home() {
    return (
        <>
            <section className="banner">
                Home Banner
            </section>


            <SectionDivider text="Featured Products" />
            <div className="products-row">
                <Product img={ProductBook} title="Book idk" price={39.99} link="/" />
                <Product img={ProducBook2} title="Book idk" price={39.99} link="/" />
                <Product img={ProductCoin} title="Coin" price={39.99} link="/" />
                <Product img={ProductCups} title="Cups" price={39.99} link="/" />
                <Product img={ProductCards} title="Card" price={39.99} link="/" />
            </div>
            <SectionDivider text="Featured Products" link="sasfsaf" />

        </>
    )


}
