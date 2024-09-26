export interface ExchangeRateData {
        date: string;
        rate: number;
    }
export default async function fetchFX() {
    const response = await fetch('http://127.0.0.1:5000/get_purchase_price?Item=Pins/Badges&Buyer%20Country=Japan');
    const data = await response.json();
    console.log(data);
    // dataをExchangeRateData型に変換する
    const formattedData = data.map((item: any) => {
        return {
            date: item.Date,
            rate: item['Purchase Price in JPY'],
        };
    });


    return formattedData;
}
