import setText, { appendText } from "./results.mjs";

export function timeout(){

const wait = new Promise((resolve) => {

    setTimeout(() =>{

        resolve("Timeout!");
    },1500);

});
wait.then( text => setText(text));

}

export function interval(){

    const wait = new Promise((resolve) => {

        setInterval(() =>{
            let counter = 0;
            console.log("INTERVAL");
            resolve(`Timeout! ${++counter}`);
        },1500);
        
    });
    wait.then( text => setText(text)).finally(() => appendText(`-- Done ${counter} --`));
    ;



}

export function clearIntervalChain(){
    {

        const wait = new Promise((resolve) => {
            let interval;
            interval = setInterval(() =>{
                let counter = 0;
                console.log("INTERVAL");
                resolve(`Timeout! ${++counter}`);
            },1500);
            
        });
        wait.then( text => setText(text))
        .finally( () => clearInterval(interval))};
        ;
    
    
    
    }


export function xhr(){
}

export function allPromises(){

    let categories = axios.get("http://localhost:3000/itemCategories");
    let statuses = axios.get("http://localhost:3000/orderStatuses");
    let userTypes = axios.get("http://localhost:3000/userTypes");



    


}

export function allSettled(){
}

export function race(){
}