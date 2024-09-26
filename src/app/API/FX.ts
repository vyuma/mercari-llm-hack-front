export default async function fetchFX() {
    const APIKEY = process.env.NEXT_PUBLIC_DOLL_APIKEY;
    const response = await fetch('https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=USD&to_currency=JPY&apikey='+APIKEY); 
    // APIはhttps://zenn.dev/taizo_pro/articles/16bf8bd2f84c32を見よう
    const data  = await response.json();
    console.log(data);
    // ここでdataを取得する！
    return data['Realtime Currency Exchange Rate']['5. Exchange Rate'];
}
