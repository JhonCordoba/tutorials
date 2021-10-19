interface Subject{
    subscribe: (observer: Observer) =>void; 
    unsubscribe: (observer: Observer) =>void; 
}

interface Observer{
    update: (data: any) => void;
}

class BitcoinPrice implements Subject{
    
    private observers: Observer[] = [];

    constructor(){
        const el: HTMLInputElement = document.querySelector("#value");
        el.addEventListener("input", () => {
            this.notify(el.value);
        });
    }

    public subscribe(observer: Observer){
        this.observers.push(observer);
    }

    public unsubscribe(observer: Observer){
        const index: number = this.observers.findIndex(obs => {
            return obs === observer;
        });

        this.observers.splice(index, 1);
    }

    public notify(data: any){
        this.observers.forEach(obs => {
            obs.update(data);
        });
    }
}

class PriceDisplay implements Observer{
    private el: HTMLInputElement;

    constructor(){
        this.el = document.querySelector("#price");
    }
    
    public update(data: any){
        this.el.innerText = data;
    }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);

setTimeout(() => value.unsubscribe(display), 5000);