function CocaMinion(dollars, plasticCost, glassCost, glassCnt) {
    if(plasticCost < glassCost) return Math.floor(dollars/plasticCost);
    else{
        if(glassCost * glassCnt > dollars) return Math.floor(dollars / glassCost);
        else{
            dollars -= glassCost * glassCnt;
            return glassCnt + Math.floor(dollars/plasticCost);
        }
    }
}
