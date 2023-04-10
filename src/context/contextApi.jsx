import React, {createContext, useEffect, useState} from "react";
import { fetchCoinsData , fetchCryptoStatsData } from "../utils/api";

export const Context = createContext();


export const CoinContext = (props) => {

    const [loading, setLoading] = useState(false);
    const [selectCategories, setSelectCategories] = useState('coins/markets');
    const [coinResults, setCoinResults] = useState(null);
    const [cryptoStats, setCryptoStats] = useState([])
    const [currency, setCurrency] = useState('usd');


    useEffect(()=>{
        fetchCryptoData(selectCategories)
        fetchStats()
    }, [selectCategories, currency]);

    const fetchCryptoData = (query) =>{
        setLoading(true)
        fetchCoinsData(`${query}?vs_currency=${currency}&order=market_cap_desc&per_page=120`).then((res) => {
            setCoinResults(res)
            console.log(res)
            setLoading(false)
        })
    }

    const fetchStats = () => {
        setLoading(true)
        fetchCryptoStatsData().then(res=>{
            setCryptoStats(res.data)
            setLoading(false)
        })
    }

    return(
        <Context.Provider 
        value={{
            loading,
            setLoading,
            selectCategories,
            setSelectCategories,
            coinResults,
            cryptoStats,
            setCurrency,
            currency
        }}
        >
            {props.children}
        </Context.Provider>
    )
}