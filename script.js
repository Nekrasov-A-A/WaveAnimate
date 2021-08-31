const circleContainer = document.getElementById('container');
const circleArr = [];
const rows = 15;
const cols = 15;

for(let i = 0; i < rows; i++){
	circleArr[i] = [];
	for(let j = 0; j < cols; j++){
		const circle = document.createElement('div')
		circle.classList.add('idk')
		circleContainer.appendChild(circle)
		circleArr[i].push(circle)
	}
}

circleArr.forEach((col, i) => {
	col.forEach((circle, j) => {
			circle.addEventListener('click', () => {
				circleGrow(i,j)
			})
	})
})

function circleGrow(i,j) {
	if(circleArr[i] && circleArr[i][j]){
		if(!circleArr[i][j].classList.contains('grow')){
			circleArr[i][j].classList.add('grow')
			setTimeout(() => {
			circleGrow(i +1, j)
			circleGrow(i -1, j)
			circleGrow(i, j+1)
			circleGrow(i, j-1)
			}, 100)
			setTimeout(() => {
				circleArr[i][j].classList.remove('grow');
			}, 300);
			
		}
	}
}