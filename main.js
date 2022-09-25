let isBlack = true;  //紀錄是否為黑棋下

let reversi = {
    stones : [],  // 以0儲存無子 1為黑 2為白 6為待翻黑 7為待翻白 11新下的黑 12新下的白    //改成10x10的空間 最外圍一圈不顯示
    init : function(){ 
        //將所有格子填入0 
        for(let r = 0; r < 10; r ++){
            reversi.stones.push(Array(10));    //最外圍一圈也是
            for(let c = 0; c < 10; c ++){
                reversi.stones[r][c] = 0;
            }
        }
        // 中間填入黑白
        reversi.stones[3+1][3+1] = 1;
        reversi.stones[4+1][4+1] = 1; 
        reversi.stones[3+1][4+1] = 2;
        reversi.stones[4+1][3+1] = 2;
        //更新棋盤
        reversi.filp();
        isBlack = true;
    },
    move : function(r,c){
        let rNow = r + 1;           //中心新下的那顆棋
        let cNow = c + 1;

        let isAround = false;       //周圍是否有棋
        let canMove = false;        //判斷這能不能下

        let cAround = 0;            
        let rAround = 0;    

        let rCheck = rNow;             //延伸檢查格子的r,c
        let cCheck = cNow;

        let stripHasDif = false;         //紀錄延伸檢查那條是否經過不同的棋
        let stripCanflip = false;        //紀錄延伸檢查那條是否可翻

        //0.沒有棋才能下
        if(reversi.stones[rNow][cNow] != 0){  
            console.log("there has a stone 值:"+reversi.stones[rNow][cNow]);
            return 0;
        }

        //1.把下的那格改成待翻
        if(isBlack){
            this.stones[rNow][cNow] = 11;  //黑的時間存新下黑
        }else{
            this.stones[rNow][cNow] = 12;  //白的時間存新下白
        }
        //2.繞周圍一圈
        for(let rInc = -1; rInc < 2; rInc ++){  
        for(let cInc = -1; cInc < 2; cInc ++){
            rAround = r + rInc + 1;                                 //周圍要檢查棋的r,c
            cAround = c + cInc + 1;  
            if(rAround == rNow && cAround == cNow){                 //中間下的那顆棋不檢查
                //console.log("中間不檢查")
                continue;
            }

            //(2)檢查與自己不同的棋 => (有)向外延伸檢查,沿路改為待翻
            if(reversi.stones[rAround][cAround] != 0 &&             //周圍的那格有棋 且與自己不同
               reversi.stones[rNow][cNow]-10 != reversi.stones[rAround][cAround]){ 
                
                isAround = true;  //紀錄周圍有與自己不同的棋

                //同向向外延伸檢查開始
                for(let i = 0; i < 8; i ++){
                    rCheck += rInc;
                    cCheck += cInc;

                    if(reversi.stones[rCheck][cCheck] == 0){
                        break;
                    }
                    if(reversi.stones[rCheck][cCheck] != reversi.stones[rNow][cNow]-10){  
                        //如果與自己不同
                        stripHasDif = true;  //記錄起來
                        reversi.stones[rCheck][cCheck] += 5;  //將他列為待翻

                    }else{  
                        //如果與自己相同
                        if(stripHasDif){          //如果中間夾了不同 => 紀錄可翻
                            stripCanflip = true;
                            canMove = true;  
                        }
                        break;
                    } 
                    
                }   //延伸檢查結束

                if(stripCanflip){           // 如果這條可以翻
                    reversi.filp();         //  翻
                }else{                      // 不能翻
                    this.canNotFlip();      //  改回來
                }

                stripHasDif = false;     //重設延伸檢查紀錄
                stripCanflip = false;
                
                rCheck = rNow;             //延伸檢查格子的r,c
                cCheck = cNow;
            }
        }}
        
        //(2)
        if(!isAround || !canMove){  //周圍沒有與自己不同的棋 => 把自己改回,結束
            reversi.stones[rNow][cNow] = 0;               // 改回無棋
        }else{
            if(isBlack){
                document.getElementById("stone"+r+c).style.backgroundColor = 'black';
                this.stones[rNow][cNow] = 1;  //黑的時間存新下黑
                isBlack = false;
            }else{
                document.getElementById("stone"+r+c).style.backgroundColor = 'white';
                this.stones[rNow][cNow] = 2;  //白的時間存新下白
                isBlack = true;
            }
        }

    },
    canNotFlip : function(){                                // 將棋盤上所有待翻的棋改回來
        for(let r = 1; r < 9; r ++){
            for(let c = 1; c < 9; c ++){ 
                if(reversi.stones[r][c] != 0){                  // 如果有棋
                    if(reversi.stones[r][c] > 5 && reversi.stones[r][c] < 10){// 如果他是待翻的
                        reversi.stones[r][c] -= 5;              // 改回原本顏色
                    }
                }
            }
        }
    },
    //將棋盤上所有待翻的棋翻面 並更新HTML
    filp : function(){    
        let rBoard = 0;
        let cBoard = 0;  
        for(let r = 1; r < 9; r ++){
            for(let c = 1; c < 9; c ++){
                rBoard = r - 1;
                cBoard = c - 1;
                //如果為待翻白,黑棋 => 翻成黑棋
                if(reversi.stones[r][c] == 7 || reversi.stones[r][c] == 1){
                    //黑棋顯示到html上
                    document.getElementById("stone"+rBoard+cBoard).style.backgroundColor = 'black';
                    reversi.stones[r][c] = 1;               //改回正常紀錄
                //如果為待翻黑,白棋 => 翻成白棋
                }else if(reversi.stones[r][c] == 6 || reversi.stones[r][c] == 2){

                    //白棋顯示到html上
                    document.getElementById("stone"+rBoard+cBoard).style.backgroundColor = 'white';
                    reversi.stones[r][c] = 2;               //改回正常紀錄

                }else if(reversi.stones[r][c] == 0){  
                    //無棋顯示到html上
                    document.getElementById("stone"+rBoard+cBoard).style.backgroundColor = 'rgb(182, 230, 200)';
                }
            }
        }
    },
    notValibleMove : function(){

    }
}

function init(){
    reversi.init();
}

function stoneOnclick(r,c){
    reversi.move(r,c);
}
