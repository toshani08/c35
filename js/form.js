class Form{
    constructor(){

    }
    display(){
        var title = createElement('h1');
        title.html("Car Racing Game");
        title.position(130,0);
        var input = createInput('name');
        input.position(130,160);
        var button = createButton('Start');
        button.position(200,250);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+=1;
            player.update(name);
            player.updateCount(playerCount);
            var greeting = createElement('h2');
            greeting.html("Welcome"+ name);
            greeting.position(130,160);
            
        })
    }
}