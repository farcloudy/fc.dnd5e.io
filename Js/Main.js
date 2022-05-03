function SHElement(Eid, Ety){
	var TButton = 'span' + Eid;
	var Target = Ety + Eid;
	if ($(TButton).text() == '展开'){
		$(Ety).show();
		$(TButton).text("折叠");
	} else{
		$(Ety).hide();
		$(TButton).text("展开");
	}
}
