/**
 * 获取组织加购数据
 */
export function getStructureList(arr,pid){
	const newArr=[]
	arr.forEach(i => {
		if(i.pid==pid){
			const children=getStructureList(arr,i.id)
			if(children.length){
				i.children=children
			}
			newArr.push(i)
		}
	});
	return newArr
}

