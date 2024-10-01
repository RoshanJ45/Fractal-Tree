        const canvas = document.getElementById('treeCanvas');
        const ctx = canvas.getContext('2d');
        const complexitySlider = document.getElementById('complexity');


        complexitySlider.addEventListener('input', drawTree);


        function drawTree() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const complexity = complexitySlider.value;
            drawBranch(canvas.width / 2, canvas.height, -90, complexity, 100);
        }


        function drawBranch(x, y, angle, depth, length) {
            if (depth === 0) return;


            const x2 = x + Math.cos(angle * Math.PI / 180) * length;
            const y2 = y + Math.sin(angle * Math.PI / 180) * length;


            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `hsl(${depth * 30}, 100%, 50%)`;
            ctx.lineWidth = depth * 0.6;
            ctx.stroke();


            drawBranch(x2, y2, angle - 20, depth - 1, length * 0.7);
            drawBranch(x2, y2, angle + 20, depth - 1, length * 0.7);
        }


        drawTree();
    