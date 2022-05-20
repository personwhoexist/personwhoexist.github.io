ok();
var ok1 = 0;
var pos = 1;
var e;
var test = false;
var test1 = 0;
var testing = 0;
var ai1 = 0;
var nobreak = false;
var rando = 0;
var aigoing = 0;
var tested = false;
var currentnum = 0;
var input1 = [0];
var input2 = [0];
var input3 = [0];
var input4 = [0];
var input5 = [0];
var input6 = [0];
var input7 = [0];
var input8 = [0];
var input9 = [0];
var input10 = [0];
var all = [input1, input2, input3, input4, input5, input6, input7, input8, input9, input10];
function ok1f() {
    aigoing = 0;
    currentnum = currentnum + 1;
    nobreak = false;
    return;
}
function ok() {
    ok1 = ok1 + 1;
    if (ok1 != 211) {
        setTimeout(ok, 0.001)
    }
    if (ok1 == 211) {
        ok11();
        return;
    }
    if (ok1 == pos) {
        document.write("<img id = " + ok1 + " src = 'test1.png' width = 150 height = 100>")
    }
    if (ok1 != pos) {
        document.write("<img id = " + ok1 + " src = 'test.png' width = 150 height = 100>")
    }
}
function ok11() {
    document.write("no");
    document.addEventListener('keydown', function okk(e) {
        if (e.code == 'KeyD') {
            if (test == true) {
                document.getElementById(pos).src = "https://personwhoexist.github.io/test.png";
            }
            if (test == false) {
                document.getElementById(pos).src = "https://personwhoexist.github.io/stairsed.png";
            }
            if ((pos + 1) <= 210) {
                if ((pos) / 10 != Math.floor((pos) / 10)) {
                    pos = pos + 1;
                    if (document.getElementById(pos).src == "https://personwhoexist.github.io/stairsed.png") {
                        test = true;
                    }
                    if (document.getElementById(pos).src != "https://personwhoexist.github.io/stairsed.png") {
                        test = false;
                    }
                }
            }
            document.getElementById(pos).src = "https://personwhoexist.github.io/test1.png";
            for (i = 1; i < 211; i++) {
                if (document.getElementById(i).src == "https://personwhoexist.github.io/stairsed.png") {
                    test1 = test1 + 1;
                }
            }

            if (test1== 209) {
                document.open()
            }
            test1 = 0;
        }
    });
    document.addEventListener('keydown', function okk1(e) {
        if (e.code == 'KeyS') {
            if (test == true) {
                document.getElementById(pos).src = "https://personwhoexist.github.io/test.png";
            }
            if (test == false) {
                document.getElementById(pos).src = "https://personwhoexist.github.io/stairsed.png";
            }
            if ((pos + 10) <= 210) {
                pos = pos + 10;
                if (document.getElementById(pos).src == "https://personwhoexist.github.io/stairsed.png") {
                    test = true;
                }
                if (document.getElementById(pos).src != "https://personwhoexist.github.io/stairsed.png") {
                    test = false;
                }
            }
            document.getElementById(pos).src = "https://personwhoexist.github.io/test1.png";
            for (i = 1; i < 211; i++) {
                if (document.getElementById(i).src == "https://personwhoexist.github.io/stairsed.png") {
                    test1 = test1 + 1;
                }
            }

            if (test1== 209) {
                document.open()
            }
            test1 = 0;
        }
    });
    document.addEventListener('keydown', function okk3(e) {
        if (e.code == 'KeyA') {
            if (test == true) {
                document.getElementById(pos).src = "https://personwhoexist.github.io/test.png";
            }
            if (test == false) {
                document.getElementById(pos).src = "https://personwhoexist.github.io/stairsed.png";
            }
            if ((pos - 1) > 0) {
                if ((pos - 1) / 10 != Math.floor((pos - 1) / 10)) {
                    pos = pos - 1;
                    if (document.getElementById(pos).src == "https://personwhoexist.github.io/stairsed.png") {
                        test = true;
                    }
                    if (document.getElementById(pos).src != "https://personwhoexist.github.io/stairsed.png") {
                        test = false;
                    }
                }
            }
            document.getElementById(pos).src = "https://personwhoexist.github.io/test1.png";
            for (i = 1; i < 211; i++) {
                if (document.getElementById(i).src == "https://personwhoexist.github.io/stairsed.png") {
                    test1 = test1 + 1;
                }
            }
            if (test1== 209) {
                document.open()
            }
            test1 = 0;
        }
    });
    document.addEventListener('keydown', function okk4(e) {
        if (e.code == 'KeyW') {
            if (test == true) {
                document.getElementById(pos).src = "https://personwhoexist.github.io/test.png";
            }
            if (test == false) {
                document.getElementById(pos).src = "https://personwhoexist.github.io/stairsed.png";
            }
            if ((pos - 10) > 0) {
                pos = pos - 10;
                if (document.getElementById(pos).src == "https://personwhoexist.github.io/stairsed.png") {
                    test = true;
                }
                if (document.getElementById(pos).src != "https://personwhoexist.github.io/stairsed.png") {
                    test = false;
                }
            }
            document.getElementById(pos).src = "https://personwhoexist.github.io/test1.png";
            for (i = 1; i < 211; i++) {
                if (document.getElementById(i).src == "https://personwhoexist.github.io/stairsed.png") {
                    test1 = test1 + 1;
                }
            }

            if (test1 == 209) {
                document.open()
            }
            test1 = 0;
        }
    });
        document.addEventListener('keydown', function okk4(e) {
        if (e.code == 'KeyK') {
            aitested();
        }
    });
}
function aitested(){
    nobreak = true;
    if(tested == false){
        rando = Math.floor(Math.random() * 4)
        if(rando == 0){
            up()
        }
        if(rando == 1){
            down()
        }
        if(rando == 2){
            left()
        }
        if(rando == 3){
            right()
        }
        aigoing = aigoing + 1;
        document.write(aigoing);
        if(aigoing == 2){
            ok1f()
            return;
        }
        if(aigoing != 2){
            setTimeout(aitested, 100)
        }
    }
}
function left(){
            if (test == true) {
                document.getElementById(pos).src = "https://personwhoexist.github.io/test.png";
            }
            if (test == false) {
                document.getElementById(pos).src = "https://personwhoexist.github.io/stairsed.png";
            }
                if ((pos - 1) <= 211) {
                    if ((pos - 1) / 10 != Math.floor((pos - 1) / 10)) {
                    pos = pos - 1;
                    all[currentnum][all[currentnum].length] = "left";
                    }
            }
            if (document.getElementById(pos).src == "https://personwhoexist.github.io/stairsed.png") {
                test = true;
                }
                if (document.getElementById(pos).src != "https://personwhoexist.github.io/stairsed.png") {
                test = false;
                }
            document.getElementById(pos).src = "https://personwhoexist.github.io/test1.png";
            for (i = 1; i < 211; i++) {
                if (document.getElementById(i).src == "https://personwhoexist.github.io/stairsed.png") {
                    test1 = test1 + 1;
                }
            }

            if (test1 == 209) {
                document.open()
            }
            test1 = 0; 
}
function right(){
            if (test == true) {
                document.getElementById(pos).src = "https://personwhoexist.github.io/test.png";
            }
            if (test == false) {
                document.getElementById(pos).src = "https://personwhoexist.github.io/stairsed.png";
            }
                if ((pos + 1) <= 211) {
                    if ((pos) / 10 != Math.floor((pos) / 10)) {
                    pos = pos + 1;
                    all[currentnum][all[currentnum].length] = "right";
                    }
            }
            if (document.getElementById(pos).src == "https://personwhoexist.github.io/stairsed.png") {
                test = true;
                }
                if (document.getElementById(pos).src != "https://personwhoexist.github.io/stairsed.png") {
                test = false;
                }
            document.getElementById(pos).src = "https://personwhoexist.github.io/test1.png";
            for (i = 1; i < 211; i++) {
                if (document.getElementById(i).src == "https://personwhoexist.github.io/stairsed.png") {
                    test1 = test1 + 1;
                }
            }

            if (test1 == 209) {
                document.open()
            }
            test1 = 0;
}
function up(){
            if (test == true) {
                document.getElementById(pos).src = "https://personwhoexist.github.io/test.png";
            }
            if (test == false) {
                document.getElementById(pos).src = "https://personwhoexist.github.io/stairsed.png";
            }
                if ((pos - 10) > 0) {
                all[currentnum][all[currentnum].length] = "up";
                pos = pos - 10;
            }
            if (document.getElementById(pos).src == "https://personwhoexist.github.io/stairsed.png") {
                test = true;
                }
                if (document.getElementById(pos).src != "https://personwhoexist.github.io/stairsed.png") {
                test = false;
                }
            document.getElementById(pos).src = "https://personwhoexist.github.io/test1.png";
            for (i = 1; i < 211; i++) {
                if (document.getElementById(i).src == "https://personwhoexist.github.io/stairsed.png") {
                    test1 = test1 + 1;
                }
            }
            if (test1 == 209) {
                document.open()
            }
            test1 = 0;
}
function down(){

            if (test == true) {
                document.getElementById(pos).src = "https://personwhoexist.github.io/test.png";
            }
            if (test == false) {
                document.getElementById(pos).src = "https://personwhoexist.github.io/stairsed.png";
            }
                if ((pos + 10) <= 210) {
                pos = pos + 10;
                all[currentnum][all[currentnum].length] = "down";
            }
            if (document.getElementById(pos).src == "https://personwhoexist.github.io/stairsed.png") {
                test = true;
                }
                if (document.getElementById(pos).src != "https://personwhoexist.github.io/stairsed.png") {
                test = false;
                }
            document.getElementById(pos).src = "https://personwhoexist.github.io/test1.png";
            for (i = 1; i < 211; i++) {
                if (document.getElementById(i).src == "https://personwhoexist.github.io/stairsed.png") {
                    test1 = test1 + 1;
                }
            }

            if (test1 == 209) {
                document.open()
            }
            test1 = 0;
}
