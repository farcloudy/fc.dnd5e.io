function SetWindowCenter(element){
	//console.log(1);
	var parentHeight = $(element).parent().innerHeight();
	var parentWidth = $(element).parent().innerWidth();
	//console.log(parentHeight);

	var selfHeight = $(element).css('height').slice(0, -2);
	var selfWidth = $(element).css('width').slice(0, -2);
	//console.log(selfHeight);

	$(element).css('top', (parentHeight - selfHeight) / 2);
	$(element).css('left', (parentWidth - selfWidth) / 2);
}

function onLoad(){
	SetWindowCenter('div.Main');
}

function testshowlist(actorId){
	$('div#cardList').html(
		getCardByIndexList(actorList[actorId]['cardList'])
	);

}

function startMenu_Staff(){
	$('div.Main').children().css('display', 'none');
	$('div.Main').html("")
}

function getCardByIndexList(indexList){
	var text = ""
	for (id in indexList){
		text = text + "<div>" + cardList[id].name + "</div>"
	}
	return text
}