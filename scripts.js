var wordlength = 19;
var currentnum = 1;
var levelopen = 0;
var word = '';
var testeded = false;
document.write('<h3> </h3>');
function forg() {
  if (testeded == false) {
    testeded = true;
    levelopen = 1;
    currentnum = 1;
    word =
      'GMOs are a difficult topic to tackle because there are multiple kinds that one thinks of when genetically modified organisms come up. One type is modern-day corn looking different from 300 years ago or banana’s being bigger, having fewer seeds, and turning that beautiful yellow we all know and love. And the other kind involves insecticides and herbicides and genetically modified organisms that resist those chemicals. But something they both have in common is that they were both selectively bred to express a certain gene that was found in their DNA.';
    wordlength = word.length;
    ok();
  }
}
function fort() {
  if (testeded == false) {
    testeded = true;
    levelopen = 3;
    currentnum = 1;
    word =
      "GMOs have been used to prolong the life of fruits and vegetables, and have been used to resist chemicals, but is it really true? The existence of our modern-day corn is proof enough, the original corn ear had hard kernels surrounding the seeds. But a gene was found that if repressed and turned off, would make the ears seeds not have a hardcover. But our ancestors didn't know that, but they selectively bred ears of corn that had the repressed gene to get corn that didn't have hard coverings and was much easier to eat. A modern-day example of that is non-browning apples. Scientists have been in the lab to lengthen the life of an apple, and it works!";
    wordlength = word.length;
    ok();
  }
}
function forr() {
  if (testeded == false) {
    testeded = true;
    levelopen = 4;
    currentnum = 1;
    word =
      'With farmers having “super crops” that last longer or are resistant/immune to herbicides our agricultural status in America is doing nothing but shooting up. We are taking huge steps to stop world hunger. The more we use GMOs, the more farmers are able to produce food. The farther science advances us in GMOs the closer we are to solving all the problems found in agriculture and possibly in other problems like medicine. But the herbicides and insecticides used are no doubt harming the environment and harming our human race. It really becomes choosing the better of 2 evils. Even though GMOs have improved our food output, the hazards that herbicides and insecticides pose to us are far worse. Studies show that they can cause infertility, some cancers, a high rise in blood sugars, and multiple other diseases that could harm our generation and those coming after us. Why would we sacrifice our health to make more food when our society is excelling at a rate faster than ever before.';
    wordlength = word.length;
    ok();
  }
}
function forq() {
  if (testeded == false) {
    testeded = true;
    levelopen = 5;
    currentnum = 1;
    word =
      'Possible solutions can be found pretty easily. Stop using herbicides and insecticides, or another one is to stop genetically modifying the plants resistance to chemicals and go all organic. Another way is to make a herbicide that doesn’t have a  harmful effect on animals or humans to get the best of both worlds. The same goes for insecticides, stop using them until they are not harmful to at least humans if not other animals as well. Another way that could fix this problem is to genetically modify the plants to bear a better harvest so that less=more. The problem is less of GMOs and more the chemicals getting spread because of the GMOs.';
    wordlength = word.length;
    ok();
  }
}
function fore() {
  if (testeded == false) {
    testeded = true;
    levelopen = 2;
    currentnum = 1;
    word =
      "The environmental impact of long-term breeding of bananas or corn to get them to look a certain way or be more nutritious have barely had any environmental impact at all. But the herbicide and insecticide-resistant plants have a huge environmental impact, and people around the world are arguing if it's horrendous to our community, or if it's okay because it's more streamlined for the farmers. The GMO plants are often bred to form resistance or immunities to herbicides like “Round up” so the farmer doesn't have to till the land to get weeds out, they only have to spray herbicides on the land. The farmers do this often enough to where the weeds have gotten resistant to the herbicide, and those weeds spread into other areas that aren’t using herbicides, and those farms cant kill the weeds unless they pick them all out. The same thing happens with insecticides. Plants have been bred to resist the effects of insecticides and insects, then the insects evolve and become resistant to those insecticides and become better at affecting the crops and then the bugs migrate to other farms ruining those farms. The effect of insecticides and herbicides have been documented to show that they can cause disease.";
    wordlength = word.length;
    ok();
  }
}
function ok() {
  if (currentnum < wordlength) {
    setTimeout(ok1, 1);
  } else {
    if (levelopen == 1) {
      document.write('<h1 onclick = fore()>Environmental impact</h1>');
      document.write(
        '<img src="https://personwhoexist.github.io/earth.jpg" height="300" width="400" />'
      );
    }
    if (levelopen == 2) {
      document.write('<h1 onclick = fort()>Evidence</h1>');
      document.write(
        '<img src="https://personwhoexist.github.io/tomato.jpg" height="300" width="480" />'
      );
    }
    if (levelopen == 3) {
      document.write('<h1 onclick = forr()>Relevance</h1>');
      document.write(
        '<img src="https://personwhoexist.github.io/corn.jpeg" height="300" width="481" />'
      );
    }
    if (levelopen == 4) {
      document.write('<h1 onclick = forq()>Possible Solutions</h1>');
      document.write(
        '<img src="https://personwhoexist.github.io/no.jpg" height="300" width="400" />'
      );
    }
    if (levelopen == 5) {
      document.write('<h1>Works Cited</h1>');
      document.write(
        '<a href = "https://www.eurekalert.org/news-releases/721466 ">https://www.eurekalert.org/news-releases/721466 </a>'
      );
      document.write('<h3></h3>');
      document.write(
        '<a href = "https://www.vox.com/2014/11/3/18092738/are-gm-crops-good-or-bad-for-the-environment ">https://www.vox.com/2014/11/3/18092738/are-gm-crops-good-or-bad-for-the-environmen </a>'
      );
      document.write('<h3></h3>');
      document.write(
        '<a href = "https://www.nongmoproject.org/gmo-facts/ ">https://www.nongmoproject.org/gmo-facts/  </a>'
      );
      document.write('<h3></h3>');
      document.write(
        '<a href = "https://ndnr.com/endocrinology/gmo-crops-glyphosate-detrimental-effects-on-health/  ">https://ndnr.com/endocrinology/gmo-crops-glyphosate-detrimental-effects-on-health/   </a>'
      );
      document.write('<h3></h3>');
      document.write(
        '<a href = "https://www.fda.gov/food/agricultural-biotechnology/how-gmo-crops-impact-our-world ">https://www.fda.gov/food/agricultural-biotechnology/how-gmo-crops-impact-our-world  </a>'
      );
      document.write('<h3></h3>');
      document.write(
        '<a href = "https://abcnews.go.com/Health/health-effects-gmo-foods/story?id=23459884 ">https://abcnews.go.com/Health/health-effects-gmo-foods/story?id=23459884  </a>'
      );
      document.write('<h3></h3>');
    }
    testeded = false;
  }
}
function ok1() {
  document.open();
  if (levelopen >= 1) {
    document.write('<h2>GMOs<h2>');
    document.write('<h1 onclick = forg()>Overview</h1>');
    document.write(
      '<img src="https://personwhoexist.github.io/3+4.jpg" height="300" width="225" />'
    );
  }
  if (levelopen >= 2) {
    document.write(
      '<h3>GMOs are a difficult topic to tackle because there are multiple kinds that one thinks of when genetically modified organisms come up. One type is modern-day corn looking different from 300 years ago or banana’s being bigger, having fewer seeds, and turning that beautiful yellow we all know and love. And the other kind involves insecticides and herbicides and genetically modified organisms that resist those chemicals. But something they both have in common is that they were both selectively bred to express a certain gene that was found in their DNA.</h3>'
    );
    document.write('<h1 onclick = fore()>Environmental impact</h1>');
    document.write(
      '<img src="https://personwhoexist.github.io/earth.jpg" height="300" width="400" />'
    );
  }
  if (levelopen >= 3) {
    document.write(
      "<h3>The environmental impact of long-term breeding of bananas or corn to get them to look a certain way or be more nutritious have barely had any environmental impact at all. But the herbicide and insecticide-resistant plants have a huge environmental impact, and people around the world are arguing if it's horrendous to our community, or if it's okay because it's more streamlined for the farmers. The GMO plants are often bred to form resistance or immunities to herbicides like “Round up” so the farmer doesn't have to till the land to get weeds out, they only have to spray herbicides on the land. The farmers do this often enough to where the weeds have gotten resistant to the herbicide, and those weeds spread into other areas that aren’t using herbicides, and those farms cant kill the weeds unless they pick them all out. The same thing happens with insecticides. Plants have been bred to resist the effects of insecticides and insects, then the insects evolve and become resistant to those insecticides and become better at affecting the crops and then the bugs migrate to other farms ruining those farms. The effect of insecticides and herbicides have been documented to show that they can cause disease.</h3>"
    );
    document.write('<h1 onclick = fort()>Evidence</h1>');
    document.write(
      '<img src="https://personwhoexist.github.io/tomato.jpg" height="300" width="480" />'
    );
  }
  if (levelopen >= 4) {
    document.write(
      "<h3>GMOs have been used to prolong the life of fruits and vegetables, and have been used to resist chemicals, but is it really true? The existence of our modern-day corn is proof enough, the original corn ear had hard kernels surrounding the seeds. But a gene was found that if repressed and turned off, would make the ears seeds not have a hardcover. But our ancestors didn't know that, but they selectively bred ears of corn that had the repressed gene to get corn that didn't have hard coverings and was much easier to eat. A modern-day example of that is non-browning apples. Scientists have been in the lab to lengthen the life of an apple, and it works!</h3>"
    );
    document.write('<h1 onclick = forr()>Relevance</h1>');
    document.write(
      '<img src="https://personwhoexist.github.io/corn.jpeg" height="300" width="481"/>'
    );
  }
  if (levelopen >= 5) {
    document.write(
      '<h3>With farmers having “super crops” that last longer or are resistant/immune to herbicides our agricultural status in America is doing nothing but shooting up. We are taking huge steps to stop world hunger. The more we use GMOs, the more farmers are able to produce food. The farther science advances us in GMOs the closer we are to solving all the problems found in agriculture and possibly in other problems like medicine. But the herbicides and insecticides used are no doubt harming the environment and harming our human race. It really becomes choosing the better of 2 evils. Even though GMOs have improved our food output, the hazards that herbicides and insecticides pose to us are far worse. Studies show that they can cause infertility, some cancers, a high rise in blood sugars, and multiple other diseases that could harm our generation and those coming after us. Why would we sacrifice our health to make more food when our society is excelling at a rate faster than ever before.</h3>'
    );
    document.write('<h1 onclick = forq()>Possible Solutions</h1>');
    document.write(
      '<img src="https://personwhoexist.github.io/no.jpg" height="300" width="400"/> '
    );
  }
  document.write("<link rel='stylesheet' type='text/css' href='styles.css' />");
  for (i = 0; i < currentnum + 1; i++) {
    if (i == 0) {
      document.write('<h3>');
    }
    document.write(word[i]);
  }
  currentnum = currentnum + 1;
  setTimeout(ok, 0);
}
