

<?php require ("templates/header.php") ?>
<?php require ("templates/footer.php") ?>

<main>

<div class="container">
	<div class="row">


		<div class="col-md-6">

		<div class="form-group">
  <h4>Create New Quest:</h4>	
  <textarea name="task" class="form-control" rows="5" id="comment"></textarea>
</div>
			<h4>Points</h4>
    		<input name="points" class="form-control" id="ex3" type="text">
			<br>
			<button class="btn btn-primary" type="submit" onclick="taskCreate()">Create Quest</button>

			<br>
			<hr>
		<h4>Current Task:</h4>
		<br>
		<span id="currentTasks"></span>
				<br><br>	
		<h4>Points for completing this task:</h4>
		<span id="taskPoints"></span>
				<br><br>	
		<button class="btn btn-primary" type="submit" onclick="taskFinish()">Finish Quest</button>
		<br>
		<br>
		<br>
						</div>



				<div class="col-md-6">


					<h4>Completed Tasks </h4>

<ul id="taskHistory" class="list-group">
		</ul>








				<span id="completedTasks"></span>
		
<ul id="taskHistory" class="list-group list-group-flush">
		</ul>
		<!--
  	<ul id="pointsHistory" class="list-group list-group-flush"></span>
		-->



	</div>

	</div>
	</div>
</div>

</main>