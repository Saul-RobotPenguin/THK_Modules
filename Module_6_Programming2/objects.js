
//Car Object
let Car = {
  color: "Sleek Black",
  seats: "7",
  body: "SUV",
  rating: " ",
  briefOverview: function(){
    alert("The color of the car is " + this.color + " and the number of seats it holds is " + this.seats);
  },

  get model() {
    return this.body;
  },

  set review(review) {
    this.rating = review;
  }

};


Car.briefOverview();
alert(Car.model);
alert(Car.review = "7/10");


///Team(Sports)
let TeamLiquid = {
  topLane: " Alphari",
  jungle:  " Santorin",
  midLane: " Jensen",
  support: " CoreJJ",
  botLane: " Tatical",
  coach: " ",
  summary: function(){
    alert("The main roster of Team Liquid consists of" + this.topLane + "," + this.jungle + "," + this.midLane + "," + this.botLane + " and" + this.support);
  },

  get bestPlayer(){
    return this.support ;
  },

  set headCoach(headCoach){
    this.coach = headCoach;
  }

};

TeamLiquid.summary();
alert(TeamLiquid.bestPlayer);
alert(TeamLiquid.headCoach = "Kold");

//Animal
let penguin = {
  diet: "Carnivore",
  features: "Flippers along with wings that don't work",
  fly: " ",
  synopsis: function(){
    alert("The Penguin is a " + this.diet+ " and has " + this.features );
  },

  get commonTypeOfFood(){
    return this.diet
  },

  set canItFly(canItFly){
    this.fly = canItFly;
  }
};

penguin.synopsis();
alert(penguin.commonTypeOfFood);
alert(penguin.canItFly = "No it cannot fly");
