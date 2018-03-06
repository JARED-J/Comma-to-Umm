walk(document.body);

function walk(node){
	// http://is.gd/mwZp7E
	var child, next;
	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}
	switch ( node.nodeType ) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
	let replaced = textNode.nodeValue;

	// Originally for one case, ex: changing every instance of a single word
	// added number generator to enhance variety, compared to just repeating umm, to give it a more natural feel.
    if(Math.round(Math.random(1))) {
        replaced = replaced.replace(/,/ig, "ummm");
    } else {
        replaced = replaced.replace(/,/ig, "and uhhh");
	}
	// old regex
	// replaced = replaced.replace(/\b,\b/g, "ummm")
	// new regex
	// /,/ig
	textNode.nodeValue = replaced;
}
