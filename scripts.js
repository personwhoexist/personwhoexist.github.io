var test1 = ['Gans,', 'Das ist eine Katze, nicht eine Gans', 's/dn', '2'];
var test2 = ['N/A,', 'Ein Kaninchen ist schnell', 'yn', '1'];
var test3 = ['Surikate,', 'Die Surikate ist geschickt', 's/dn', '1'];
var test4 = ['Pfau,', 'Er mag den Pfau', 's/dn', '2'];
var test5 = ['N/A,', 'Das Flusspferd ist klein', 'yn', '1'];
var test6 = ['N/A,', 'Das ist eine Katze, nicht eine Panda', 'yn', '2'];
var test7 = ['N/A,', 'Den Computer ist grau', 'yn', '2'];
var test8 = ['Jacke,', 'Er tragt eine Jacke', 's/dn', '2'];
var test9 = ['N/A,', 'Einen Gans ist ärgerlich', 'yn', '2'];
var test10 = ['Heft,', 'Das ist ein Heft', 's/dn', '1'];
var test11 = ['Hund,', 'Der Hund ist braun', 's/dn', '1'];
var test12 = ['N/A,', 'Das ist den Tisch', 'yn', '2'];
var test13 = ['Meerschweinchen,', 'Das Meerschweinchen ist hier', 's/dn', '1'];
var test14 = ['N/A,', 'Den Panda ist langsam', 'yn', '2'];
var test15 = [
  'Meerschweinchen,',
  'Hier ist der Hund und hier ist den Wolf',
  'yn',
  '1',
];
var test16 = ['Vogel,', 'Der Vogel ist blau', 's/dn', '1'];
var test17 = ['Papagei,', 'Der Papagei ist bunt', 's/dn', '1'];
var test18 = [
  'Schildkröte,',
  'Das ist ein Fels nicht eine Schildkröte',
  's/dn',
  '2',
];
var test19 = ['Affe,', 'Das ist ein Affe', 'yn', '1'];
var test20 = ['Elefant,', 'Er findet den Elefant', 's/dn', '2'];
var possiblesentences = [
  test1,
  test2,
  test3,
  test4,
  test5,
  test6,
  test7,
  test8,
  test9,
  test10,
  test11,
  test12,
  test13,
  test14,
  test15,
  test16,
  test17,
  test18,
  test19,
  test20,
];
var w = 1;
var numcorrect = 0;
var downed = false;
var chosenthing = Math.floor(Math.random() * possiblesentences.length);
if (possiblesentences[chosenthing][2] == 's/dn') {
  document.write(
    '<p>Is the word ' +
      possiblesentences[chosenthing][0] +
      ' the subject or direct object in this sentence: ' +
      possiblesentences[chosenthing][1] +
      '.</p>'
  );
}
if (possiblesentences[chosenthing][2] == 'yn') {
  document.write(
    '<p>Does this sentence make sense? ' +
      possiblesentences[chosenthing][1] +
      '.</p>'
  );
}
let e = document.createElement('button');
if (possiblesentences[chosenthing][2] == 's/dn') {
  e.innerHTML = 'Subject';
}
if (possiblesentences[chosenthing][2] == 'yn') {
  e.innerHTML = 'Yes';
}
if (possiblesentences[chosenthing][3] == '1') {
  e.onclick = function () {
    correct();
  };
}
if (possiblesentences[chosenthing][3] == '2') {
  e.onclick = function () {
    wrong();
  };
}
document.body.appendChild(e);
let a = document.createElement('button');
if (possiblesentences[chosenthing][2] == 's/dn') {
  a.innerHTML = 'Direct Object';
}
if (possiblesentences[chosenthing][2] == 'yn') {
  a.innerHTML = 'No';
}
if (possiblesentences[chosenthing][3] == '2') {
  a.onclick = function () {
    correct();
  };
}
if (possiblesentences[chosenthing][3] == '1') {
  a.onclick = function () {
    wrong();
  };
}
document.body.appendChild(a);
function correct() {
  document.open();
  document.write(
    "<img src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAulBMVEX///8AgAAAfgAAfAAAgQAAegD6/foAhADt9u34/PjK48rR59Hm8ub9//35/fn0+/RKn0qLtovZ69l6t3pYpVgAiABQoVDh8eFxsnE2lDbW6tYukS4Phw+12rWmzqa42bjB3sEeih6WxpZlrGU6lToajBo3mzeEv4Sq0qqax5pkrmSNwY1EmURZnlk4kjhJmElFoEVbrVsnkydrtWuIxIgXjhdUqlR1uHV8tXyTyZORwZFdpl1zsHMahhoKmhd5AAAI40lEQVR4nO1da1vaTBB1dwMJIRReQK4RAshNrAVbWy/1//+tF9AqlRA2J5Ms08fzod+qc9zJ7O6Zy56dfeITn/hEEpQ7buBWTVuRHtza1+ubm5tvX6euaVNSQfFqIOQLxGDUMW0OPYJbJd6hzodl0xYRo1rZJbhGblnMmzaKEk5Lig9Qds8zbRYhhh/5rSHlyP1nljE431vCLcf23DFtGg2cZSjBNcXnfySo/jpAcIPuzLR1BJj7hwkKqVbs9w33MmIJ11C3Ae+A440i+W2W0V9wDjiFoX2MoZBixPikGnSjffSV43WPq6d6DR2CG0+tMfXUmha/rafWi6aNRdC3dBmuOXYvTJsbH174ae0QRbtXMm1xTBS+q+O8dimO+6ZNjole1GEmDKrC60LlXsYkuKbYM210HHitGGHmFXLCaFvMx/bRDXKM3LSodZjZY8jnMuXV48XRV6gfpg3XRT5MmdFh+Mu05bo4oMwcRY7LGjpLyEcZfYdTkCCbWHoxxnxUyNuCadu10KyABEWOx5mmXIt/mHldwgkPJ50NUB/1A9O2a6GoKVzsw1qwkE4dbeFibwkbLBLgpZmPLuGAh4pRhQ7cW7R47BQrlKDs8oijQ/QwIxQPHy2CB+41we+mbdeCU8d9lIXknR8iwsUWNg8dMWjDSzhlEUebRzOFh6B47PWF+fFM4YEV9HnEURe9FApxz8JHPVS4ELLeNG28DkqwcMHlPNpHP8J1HDVtuxa8CbqEqs3iPJqvwVHGCkwbr4WLAUpQ8fDRKixcKB7aUxkXLu5YlAqVZvBebw1Z7PUdWAAWTyz2+gTiWjcwbbwWZucoQ7Fg4aPNW/hSyKS2ZAWfR+3AtO1amMMEmaR7O7iPLlmUzjhX6ArKMYu9Pj9/RhlaQxZ1iMfK8COWcMQijnotdAVlm4eP9uB7vT38Ytp6HRTvcB9loeE7P2Fx7ZKFj549wHu9NTdtuxZc+CNUIx4FCQ3YR+9YJCnOFmhVkBA86p76cEGCarHwUe8J3ihuWfhoYQHyY5Ps7aOVa0Lcs9jrm1iVutgIFyx6twtTdAHFgEeRcx+uXBM84mgZ3ijkhIUAfBaz5W6XIY9k7wzlx6Wwq4lXBU1YbBRloOXulSCTIm64Sl1YPJIUeCKNSdFMkkQak/MofK+3mBQf4uIaDx8twIk0NsneHEhQiAfTtmuhilepV3js9SP4IzznIQBHzrOKZjg0bbsW8ESaqrPwUec37KN3LCbrlOYgPyFsHhOg3AQdaSySvc7oX0+kDeEVfJ4TFiQ4QW8+n7kpqFlFWFyTV3TmFFvf2gPfH9w0puSHXLhKXY7pBOChL+T2D73+l7ru9gde2EUmAJd/5nb8SFqkynIAVwWpFZUN3vLvU7/053T3Td25gPugE4A7HydJCzkgG5ddgJO9dB1pxUbITx9TjSfQm10ZihqRCWEEN39AGmHEwzt7G0RxtHhg7Ju0KSYuFRYwQapEWlQFK0GaoAiLa6JGE+w6dsTfWF0l/SUOLq41aOLokQb/xAVy32Htiahr8uidxkp2denDBIk60jSEBauVwFmaCZK9JMKFe61hgIVXG+fxJMV5QEGwqCkN1VGKswHMcEEhXGhPupFL7GhRhBNpqkEhXMQQoNUS+YXle/gjJOmkaMZR2GUFCDczvEp9TlClXo15667HrgfswAUJgqKTIn5jcdx554UWLFy0g+QEj7+nEEIx3kG/B/ITwifo9nHukTtprAkwVfw8ukq+14OdKrEkBbxK/ZzgUogmKtVEexUfQH7rX0KQSMv/Qo/Dsq0ZbvAkhVwRKNwFvHNaVrQoOk/wL+hSVKlX8XKB9bVUg+IXfCSZP6NIUiQoiNCj6OJ7Pc1DKsMkDDUc1cMLEvQ+gpQZrsNN9KeSn8PdPmOibp+LZAyP7Yv4aEey8aNOQoZCdSOcqZygvZ4qSZGfwH/kP7ZEfC9T+O9n01Wp9+Bs3hvFgxE1wEeSEb5p4MGlO+84QNHDK4Apxz2V+vC38m5QqKPmp3Ai7Zy0ArjUw0cwvpm0DKF40YV/HHGVeukhKluhaVN375rTxBNpiBAUjR94SujNqtsPilh5ireFBtQE11E9McO9aqU+vNfbqYwkgx9Y2KFYcXeuAs1DL9oeRzojyQpw3PuL4tvPSzDaMa0qdec+McNdirgAbC3SGqXjwamhHYp/vkUP3mMVmBbRogjf5HYo3r5sGnjXpJVm6zKiDO9R3N40ElSpp9tJgU822DGx7WqnIkP+9yrldia8nmfHyEofH/e0fzKiBn7S2sF4jP5PP4Mq9SpBuMHxO4tOCoMU5XU2nRRVCkeF4Gc17gkfxJwQo8xmrpGEm9iQ7QzbQo2sopXpCIgE05hRyIxHQOCvuaEEs/TRF4rZfovE4poexUxXkVpc0wLe5AkQNPO2D15qF5tgGuLaSVG0Hk3NV8XvefFgcN6/m8UqykFgjGA2FFMWLsxTlBPDc1hcXLvWI2gbnwuYckSVJzADOFWKlK3LOIrpOaq8NO6jW6QXbrIQ17SQGsXWyYwpSYdiVuKaFrSaouIiM3FNCylQzFq4OAbyTeP0HiWmppituKYFWgVO1kzzCQGldqNO84EtOgVO3gWmyYSDbBXl46nOriT6FtUJP1TYoVjF055dSUHRP+25gMkdVT6d2l7/AUnDDYNH4BJuGrmTOnCHIxFFteTwyl2CLLG0T3ej2EWzDq8hj0HceDmD5PHoxgZNyFHlNYvHi17QAVZREs0Kygid+MWaFtXMtYwQuwZOXvOIo++IG27I5gJmBy9WJ7oibLnLDN6V/irKLofDzB70X2GW9skfuMOh/YivfDRtKgpNiorHi7ah8HTawmSXqY9u4WisokU5iDt7lI+uosykDD9F5KdW9NTMU8oUYihNI3uJfR4vMUaitIjoCFc11h/hK/K9g8OSFOX8AIPI9w/M2lHUY+vNwV2GNVbmwqYRcIW3kh+XURLNQjoZ9C+fxe6jA34jMG0SNUoXv791bak2kIOnnqn65lTRvJj/t8XjjJcq84lPfCIl/A/MNKcMijOiFQAAAABJRU5ErkJggg==' width = " +
      w +
      ' height = ' +
      w +
      '>'
  );
  if (downed == false) {
    if (w < 201) {
      w = w + 1;
      setTimeout(correct, 3);
    } else {
      numcorrect = numcorrect + 1;
      downed = true;
    }
  }
  if (downed == true) {
    if (w > 0) {
      w = w - 1;
      setTimeout(correct, 1);
    } else {
      remake();
    }
  }
}
function wrong() {
  document.open();
  document.write(
    "<img src = 'data:image/png;base64,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' width = " +
      w +
      ' height = ' +
      w +
      '>'
  );
  if (downed == false) {
    if (w < 201) {
      w = w + 1;
      setTimeout(wrong, 3);
    } else {
      downed = true;
    }
  }
  if (downed == true) {
    if (w > 0) {
      w = w - 1;
      setTimeout(wrong, 1);
    } else {
      remake();
    }
  }
}
function remake() {
  if (possiblesentences.length == 1) {
    document.write(
      '<p> You got ' +
        numcorrect +
        ' correct out of 20! That is ' +
        numcorrect * 5 +
        '%!'
    );
    if (numcorrect == 20) {
      document.write('<p> Congrats! You got a perfect score!</p>');
    }
  }
  downed = false;
  possiblesentences.splice(chosenthing, 1);
  chosenthing = Math.floor(Math.random() * possiblesentences.length);
  if (possiblesentences[chosenthing][2] == 's/dn') {
    document.write(
      '<p>Is the word ' +
        possiblesentences[chosenthing][0] +
        ' the subject or direct object in the sentence: ' +
        possiblesentences[chosenthing][1] +
        '.</p>'
    );
  }
  if (possiblesentences[chosenthing][2] == 'yn') {
    document.write(
      '<p>Does this sentence make sense? ' +
        possiblesentences[chosenthing][1] +
        '.</p>'
    );
  }
  let t = document.createElement('button');
  if (possiblesentences[chosenthing][2] == 's/dn') {
    t.innerHTML = 'Subject';
  }
  if (possiblesentences[chosenthing][2] == 'yn') {
    t.innerHTML = 'Yes';
  }
  if (possiblesentences[chosenthing][3] == '1') {
    t.onclick = function () {
      correct();
    };
  }
  if (possiblesentences[chosenthing][3] == '2') {
    t.onclick = function () {
      wrong();
    };
  }
  document.body.appendChild(t);
  let g = document.createElement('button');
  if (possiblesentences[chosenthing][2] == 's/dn') {
    g.innerHTML = 'Direct Object';
  }
  if (possiblesentences[chosenthing][2] == 'yn') {
    g.innerHTML = 'No';
  }
  if (possiblesentences[chosenthing][3] == '2') {
    g.onclick = function () {
      correct();
    };
  }
  if (possiblesentences[chosenthing][3] == '1') {
    g.onclick = function () {
      wrong();
    };
  }
  document.body.appendChild(g);
}
