<?php include 'header.php'; ?>
<div class="jumbotron grey lighten-3">
	<?php include 'nav.php'; ?>
</div>
<div class="contact-wrap">
	<div class="row">
		<div class="col-md-7">
			<p><b>say hello, </b> <br>have anyting interesting to say to me? don't hesitate to contact me.</p>
		</div>
		<div class="col-md-5">
			<div class="card-panel">
        		<p><b>email:</b> leninhasda [at] gmail [dot] com</p>
        		<p><b>skype:</b> leninhasda</p>
        	</div>
		</div>
		<div class="col-md-12">
			<div class="inner">
				<hr>
				<form id="form-login" action="" method="post" role="form">
					<div class="row">
						<div class="col-md-6 form-group  field-loginform-password required">
							<label class="control-label" for="loginform-email">name*</label>
							<input type="text" id="loginform-email" class="form-control" name="LoginForm[email]">
							<p class="help-block help-block-error"></p>
						</div>
						<div class="col-md-6 form-group  field-loginform-password required">
							<label class="control-label" for="loginform-password">email*</label>
							<input type="email" id="loginform-password" class="form-control" name="LoginForm[password]">
							<p class="help-block help-block-error"></p>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 form-group  field-loginform-password required">
							<label class="control-label" for="loginform-password">message*</label>
							<textarea id="loginform-password" class="form-control materialize-textarea" rows="5" name="LoginForm[password]"></textarea>
							<p class="help-block help-block-error"></p>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 form-group btn-wrap">
							<button type="submit" class="waves-effect waves-light btn" name="login-button">Submit</button>
						</div>
					</div>
				</form>
			</div>
		</div>

		
	</div>
</div>
<?php include 'footer.php'; ?>