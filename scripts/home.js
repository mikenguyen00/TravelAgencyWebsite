function Home() {  
    //properties
    this.quoteControl=
    {
        quoteItem:null,
        currentItem:0,
        numberofItems:0,
        interval:null,
        repeatPeriod:5000
    };
    //methods
    this.intialiseQuoteControl=function(){
        //get all items in quoteBar
        let quoteItem=$(".quoteItems");
        //set values
        this.quoteControl.quoteItem=quoteItem;
        this.quoteControl.numberofItems=quoteItem.length;
        //instiate quote loop
        let self=this;
        this.quoteControl.interval=setInterval(function(){
            self.showNewQuoteItem(self);
        },this.quoteControl.repeatPeriod);
    }
    this.showNewQuoteItem=function(self){
        //fade out current item
        $(self.quoteControl.quoteItem).eq(self.quoteControl.currentItem).fadeOut("slow",function(){
            //increment current quoteItem counter
            if (self.quoteControl.currentItem>=(self.quoteControl.numberofItems-1)){
                //reset counter to 0
                self.quoteControl.currentItem=0;
            }
            else{
                //increase counter by one
                self.quoteControl.currentItem++;
            }
            //fade into next item
            $(self.quoteControl.quoteItem).eq(self.quoteControl.currentItem).fadeIn("slow");
        });
    }
}
$(document).ready(function(){
    //instantiate new home class
    app.home= new Home();
    //initialize quote bar
    app.home.intialiseQuoteControl();
});