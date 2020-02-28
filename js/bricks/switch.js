function onLoadSwitch() {
	let nodeid = getUrlParam('nodeid');
	let next = nextNodes(jsonFlow, nodeById(jsonFlow, nodeid));
	let newUrl = next.type + ".html?nodeid=" + next.id;

	let div = $('#all-transitions');

	let node = nodeById(jsonFlow, nodeid);
	loadCurrentPatient(function() {
		var i = 0;
		$.each(next, function (key, entry) {
			try {
			    eval(node.rules[i].v)
				div.append('<div class=row><div class="col text-center"><a class="btn btn-primary text-center" role=button href=' + entry.type + '.html?nodeid=' + entry.id  + '>' + entry.type + ' ' + entry.name + '</a> ' + node.rules[i].v + ' (' + eval(node.rules[i].v) + ')' + '</div></div>');
			} catch (e) {
				div.append('<div class=row><div class="col text-center"><a class="btn btn-primary text-center" role=button href=' + entry.type + '.html?nodeid=' + entry.id  + '>' + entry.type + ' ' + entry.name + '</a> Error in rule: ' + node.rules[i].v + ' (' + e.message + ')' + '</div></div>');
			}
			div.append('<div class=row><div class="col text-center"><hr/></div></div>');
			i++;
		});
		
	});
	$('#navigation-next').prop('disabled', true);
	$('#input-label').text('Switch node for node: ' + node.name);
}
