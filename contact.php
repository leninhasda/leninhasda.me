<?php include "header.php"?>
	<div class="row" style="margin-bottom: -140px;">
		<div class="img" style="height: 340px; overflow:hidden; padding-top: -100px; background: url(stock-images/bg.jpg) no-repeat 100% 10%">
			<!-- <img src="https://download.unsplash.com/photo-1428223501723-d821c5d00ca3" alt="" width="100%"> -->
		</div>
	</div>

	<div class="container">
		<div class="row">
			<div class="col s8 offset-s2">
				<form class="card-panel">
					<div class="row">
						<div class="col s12">
							<h3 class="red-text text-lighten-2">get in touch with me</h3>		
							<p>have any to say?? feel free to leave me a message</p>
						</div>
					</div>			
					<div class="row"></div>
					<div class="row">
						<div class="input-field col s6">
	          				<input id="first_name" type="text" class="validate">
	          				<label for="first_name">first Name</label>
	        			</div>
	        			<div class="input-field col s6">
	          				<input id="last_name" type="text" class="validate" pattern="[a-z]">
	          				<label for="last_name">last Name</label>
	        			</div>
					</div>
					<div class="row">
						<div class="input-field col s12">
	          				<input id="email" type="email" class="validate">
	          				<label for="email">email</label>
	        			</div>
					</div>
					<div class="row">
						<div class="input-field col s12">
	          				<input id="subject" type="text" class="validate">
	          				<label for="subject">subject</label>
	        			</div>
					</div>
					<div class="row">
						<div class="input-field col s12">
	          				<textarea id="textarea1" class="materialize-textarea"></textarea>
	          				<label for="textarea1">message</label>
	        			</div>
					</div>
					<div class="row">
						<div class="col s12">
							<button class="btn btn-large red lighten-2 waves-effect waves-light" type="submit" name="action">send
						    	<i class="mdi-content-send right"></i>
						  	</button>
						</div>
					</div>
				</form>	
			</div>		
		</div>
	</div>

<?php include "footer.php"?>