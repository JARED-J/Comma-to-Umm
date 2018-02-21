walk(document.body);

function walk(node){
	// Through extensive research I had found that a regex is probably not the best way to go for looping through heavy webpages
    // So stack overflow to the rescue.
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
	var v = textNode.nodeValue;

	// Originally for one case, ex: changing every instance of a single word,
	// but for this implementation it needed variety, and who dosen't like the spice of life?
    if(Math.round(Math.random(1))) {
        v = v.replace(/\b,\b/g, "ummm");
    } else {
        v = v.replace(/\b,\b/g, "and uhhh");
    }
	textNode.nodeValue = v;
}
