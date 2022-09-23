var reversi = {
    stones : [],  // 以0儲存無子 1為黑 2為白 6為待翻黑 7為待翻白    //改成10x10的空間 最外圍一圈不顯示
    rInc2,cInc2,  //延伸檢查增加量
    isValiable = 5,     //紀錄先相同 還是先不同
    init : function(){ 
        //將所有格子填入0 
        for(var r = 0; r < 10; r ++){
            this.stones[i].push(Array(10));    //最外圍一圈也是
            for(var c = 0; c < 10; c ++){
                this.stones[r][c] = 0;
            }
        }
        // 中間填入黑白
        this.stones[3+1][3+1] = 1;
        this.stones[4+1][4+1] = 1;
        this.stones[3+1][4+1] = 2;
        this.stones[4+1][3+1] = 2;
    },
    move : function(r,c){
        for(var rInc = -1; rInc < 2; rInc ++){  //繞周圍一圈檢查
            for(var cInc = -1; cInc < 2; cInc ++){
                if(stones[r+rInc+1][c+cInc+1] != 0 && this.stones[r+1][c+1] != this.stones[r+rInc+1][c+cInc+1]){  //如果周圍有不ㄧ樣的棋 => 同向向外延伸檢查
                    // 將不同的列為待翻
                    for(var i = 0; i < 8; i ++){
                        this.cInc2 += cInc;  //將Inc2＋Inc
                        this.rInc2 += rInc;
                        if(this.stones[r+this.rInc2+1][this.cInc2+1] != 0 && this.stones[r+this.rInc2+1][this.cInc2+1] != this.stones[r+1][c+1]){ //如果延伸有棋且不＝下的
                            this.stones[r+this.rInc2+1][c+this.cInc2+1] += 5;  //將那顆列為待翻
                            isValiable = 6;  //設為6 ＝> 先同後不同＝6 先不同後同＝18
                        }else{  //如果相同  or  沒有棋
                            isValiable = isValiable * 3;
                            break;  //跳出迴圈
                        }   
                    }
                    // 確認是否可翻(相同之間夾著不同) 可＝>不做事 不可＝>改回來,呼叫notValible 最後＝>將全部棋盤待翻的翻
                    if(isValiable != 18){ //不可以翻
                        // 改回來
                        for(var c = 0; c < 8; c ++){
                            for(var r = 0; r < 8; r ++){  
                                if(stones[r][c] == 6){  //不可翻黑改回白
                                    stones = 2;
                                }else if(stones[r][c] == 7){    //不可翻白改回黑
                                    stones = 1;
                                }

                            }
                        }
                        notValibleMove();  //呼叫notValible動畫
                    }
                    //將全部待翻的翻
                    for(var c = 0; c < 8; c ++){
                        for(var r = 0; r < 8; r ++){  
                            if(stones[r][c] == 6){  //待翻黑
                                document.getElementById("div"+r+c).style.backgroundColor = 'black';
                                stones = 1; //改回正常紀錄
                            }else if(stones[r][c] == 7){    //待翻白
                                document.getElementById("div"+r+c).style.backgroundColor = 'white';
                                stones = 2;
                            }

                        }
                    }                    

                    this.cInc2 = 0;  //將Inc2重置
                    this.rInc2 = 0;
                    isValiable = 5;  //將記錄可否翻重置
                }
            }
        }
    },
    updateBoard : function(){

    },
    notValibleMove : function(){

    }
}
// while(r < 8 && c < 8 && this.stones[r+this.rInc2][c+this.cInc2] != this.stones[r][c]){
//     // 持續延伸，直到找到同色的棋 
//     // 一直翻，翻到翻錯再翻回來。
//     if(this.stones[][])             // 將中間不同顏色的棋翻成同色 若無同顏色的旗，則不可下?           



//     this.rInc2 = rInc2 + rInc;
//     this.cInc2 = cInc2 + cInc;
   
// }