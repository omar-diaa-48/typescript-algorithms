function CompareLists(llist1, llist2) {

	while (llist1 || llist2) {
		if (!llist1 || !llist2) {
			return 0;
		}

		if (llist1.data !== llist2.data) {
			return 0;
		}

		llist1 = llist1.next;
		llist2 = llist2.next;
	}

	return 1;
}