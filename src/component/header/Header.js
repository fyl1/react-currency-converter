import '../../styles/header/header.css';
import {useState, useEffect} from "react";
import axios from "axios";

function Header(props) {

    const [rateUSD,setRatesUSD] = useState([]);

    const [rateEUR,setRatesEUR] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.apilayer.com/exchangerates_data/convert?to=UAH&from=USD&amount=1&apikey=8El09v1tgPaDSKNR0TGCUrzqXBE6AdDI"
            )
            .then((response) => {
                setRatesUSD(response.data.info.rate);
            });
        axios
            .get(
                "https://api.apilayer.com/exchangerates_data/convert?to=UAH&from=EUR&amount=1&apikey=8El09v1tgPaDSKNR0TGCUrzqXBE6AdDI"
            )
            .then((response) => {
                setRatesEUR(response.data.info.rate);
            });
    }, []);


            function format(number) {
                return number.toFixed(2);
            }




    return (
     <header>
         <div className="currencies-now">
             <div className="currencies-now__item">{format(rateUSD)} USD </div>
             <div className="currencies-now__item">{format(rateEUR)} EUR</div>

         </div>
     </header>
    );
}

export default Header;
