function deleteNode(llist, position) {
	// Write your code here
	if (!llist) {
		return null;
	}

	if (position === 0) {
		return llist.next
	}

	let head = llist;

	let i = 0;
	while (i < position) {
		llist = llist.next;

		if (!llist) {
			return head;
		}

		i++;
	}

	const node = llist.next.next
	llist.next = node;

	return head;
}