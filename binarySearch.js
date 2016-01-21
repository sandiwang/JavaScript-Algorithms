function binarySearch(){
	this.a = [];
	this.sort = function(){
		return this.a.sort(function(a,b){return(a-b)});
	};
	this.add = function addNum(){
		for(var i=0;i<addNum.arguments.length;i++)
			this.a.push(addNum.arguments[i]);
		this.a.sort();
	};
	this.search = function gosearch(array, l, r, target){
		var mid=Math.floor((l+r)/2);
		if(l<=r){
			if(target==array[mid]) return mid;
			else if(target<array[mid]){
				return gosearch(array, l, mid, target);
			}
			else return gosearch(array, mid+1, r, target);
		}
	};
	this.deleteNum = function(num){
		var numIndex = this.search(this.a, 0, this.a.length-1, num);
		this.a.splice(numIndex,1);
	};
	this.exists = function(num){
		if(this.search(this.a, 0, this.a.length-1, num)==undefined) return false;
		else return true;
	};
}

