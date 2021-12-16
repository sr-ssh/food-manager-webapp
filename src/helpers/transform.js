export function filterColumns(data) {
    if (data.length != 0) {
        // Get column names
        const columns = Object.keys(data[0]);
        // Remove by key (firstname)
        const filterColsByKey = columns.filter(c => c !== '');

        // OR use the below line instead of the above if you want to filter by index
        //   columns.shift()

        return filterColsByKey // OR return columns
    } else return data
};