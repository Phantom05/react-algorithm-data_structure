
function foo(){
  return 'hello'
}

const exchangeRate = 0.91

function roundTwoDecimals (amount) {
	return Math.round(amount * 100) / 100
}

const canadianToUs = function (canadian) {
	return roundTwoDecimals(canadian * exchangeRate)
}

function usToCanadian (us) {
	return roundTwoDecimals(us / exchangeRate)
}




exports.canadianToUs = canadianToUs // 내보내기 1
exports.usToCanadian = usToCanadian // 내보내기 2
exports.foobar = foo;