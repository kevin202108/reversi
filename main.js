var reversi = {
    stones : [],
    init : function(){
        for(var r = 0; r < 8; r ++){
            this.stones[i].push(Array(8));
            for(var c = 0; c < 8; c ++){
                this.stones[r][c] = document.getElementById("stone"+r+c);
            }
        }
    }
}