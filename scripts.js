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
document.write("worked");
    aitested();
}
function ok() {
    ok1 = ok1 + 1;
    if (ok1 != 211) {
        setTimeout(ok, 0.001)
    }
    if (ok1 == 211) {
        document.write("fin");
        ok11();
    }
    if (ok1 == pos) {
        document.write("<img id = " + ok1 + " src = 'test1.png' width = 150 height = 100>")
    }
    if (ok1 != pos) {
        document.write("<img id = " + ok1 + " src = 'test.png' width = 150 height = 100>")
    }
}
function ok11() {
    document.addEventListener('keydown', function okk(e) {
        if (e.code == 'KeyD') {
            if (test == true) {
                document.getElementById(pos).src = "https://personwhoexist.github.io/test.png";
            }
            if (test == false) {
                document.getElementById(pos).src = "https://personwhoexist.github.io/stairsed.png";
            }
            if ((pos + 1) <= 211) {
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
            if ((pos + 10) <= 211) {
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
    document.addEventListener('keydown', function okk2(e) {
        document.write("noworks");
        if (e.code == 'KeyQ') {
            document.write("okkkkkkkkkkokokokeed");
            if(nobreak == false){
            document.write("okjk");
            aitested();
            }
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
}
function aitested(){
    document.write("okkk");
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
        if(aigoing < 2){
        document.write("ok6");
        ok1f();
        document.write("ok2");
        }
        if(aigoing == 2){
            document.write("ok1")
            setTimeout(ok1f, 100)
            tested = true;
        }
    }
    if(tested == true){
    document.write("ok")
    document.write(all[currentnum].length)
    for(i = all[currentnum].length - 1; i > 0; i--){
        if(all[currentnum][i] == "left"){
            right()
            left()
        }
        if(all[currentnum][i] == "right"){
            left()
            right()
        }
        if(all[currentnum][i] == "up"){
            down()
            up()
        }
        if(all[currentnum][i] == "down"){
            up()
            down()
        }
    }
    currentnum = currentnum + 1;
    nobreak = false;
    aigoing = 0;
    tested = false;
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
                if ((pos + 10) <= 211) {
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
