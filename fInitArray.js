fInitArray = function(rows, columns) {
	  
  var matrix = new Array(rows); // initialize an array with proper number of [rows] and [columns]
 
  for (var i = 0; i < rows; i++) { // creating two dimensional matrix
	  matrix[i] = new Array(columns);
	  }

  for(var i = 0; i < rows; i++) {
      for(var j = 0; j < columns; j++) {
    	if (Math.random() > 0.5) // if the random number is greater than 0.5
    		{matrix[i][j] = 1}  // the value written in the matrix is 1
        else
			{matrix[i][j] = 0}  // else, we write 0
    	}
      }

  return matrix;
  };