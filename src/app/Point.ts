export class Point {
    x!: number;
    y!: number;
    res!:number;

    constructor () {
        this.x = 0;
        this.y = 0;
    }
    m(){
        this.x = 10;
        this.y = 10;
    }
    sub() {
        this.res = this.x + this.y;
    }
  }

  
