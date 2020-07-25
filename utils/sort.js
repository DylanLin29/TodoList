import _ from "lodash";
function sort(data, category, order) {
	return _.orderBy(data, [category], [order]);
}

export default sort;
