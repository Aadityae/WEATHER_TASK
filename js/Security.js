class Security {

    constructor(){

        
        this.button1 = createButton('Sunrise');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        

        this.button2 = createButton('Day');
        this.button2.position(100,220);
        this.button2.style('background', 'lightgrey');
//add code for creating and positioning the third input box and button

this.button3 = createButton('Sunset');
this.button3.position(100,420);
this.button3.style('background', 'lightgrey');

this.button4 = createButton('Night');
this.button4.position(100,520);
this.button4.style('background', 'lightgrey');

this.reset = createButton('Reset');
this.reset.position(100,920);
this.reset.style('background', 'lightgrey');
        
    }

    

    display(){

        this.button1.mousePressed(() => {
            background(sunrise)
            this.button1.hide()
            this.button2.hide()
            this.button3.hide()
            this.button4.hide()
        });

        this.button2.mousePressed(() => {
            background(day)
            this.button1.hide()
            this.button2.hide()
            this.button3.hide()
            this.button4.hide()
        });
//add code for what happens when the third button is pressed
this.button3.mousePressed(() => {
   background(sunset)
   this.button1.hide()
   this.button2.hide()
   this.button3.hide()
   this.button4.hide()
});

this.button4.mousePressed(() => {
    background(night)
    this.button1.hide()
    this.button2.hide()
    this.button3.hide()
    this.button4.hide()
});

this.reset.mousePressed(() => {
    background(0)
    this.button1 = createButton('Sunrise');
    this.button1.position(100,120);
    this.button1.style('background', 'lightgrey');    

    

    this.button2 = createButton('Day');
    this.button2.position(100,220);
    this.button2.style('background', 'lightgrey');
//add code for creating and positioning the third input box and button

this.button3 = createButton('Sunset');
this.button3.position(100,420);
this.button3.style('background', 'lightgrey');

this.button4 = createButton('Night');
this.button4.position(100,520);
this.button4.style('background', 'lightgrey');
    
});

    }
}