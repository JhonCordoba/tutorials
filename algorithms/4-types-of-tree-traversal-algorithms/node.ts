export class TreeNode{

	data: number;
	left: TreeNode;
	right: TreeNode;

	constructor(data: number){
		this.data = data;
		this.left = this.right = null;
	}
}