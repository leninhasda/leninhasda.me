	<footer class="footer clearfix">
		<div class="pull-left">
			<p>&copy; 2015.</p>
		</div>
		<div class="pull-right text-right">
			<em>last update: <?=date("d M, Y", strtotime("yesterday"))?></em>
		</div>
	</footer>

</div> <!-- /container -->



<!-- Latest compiled and minified jquery -->
<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<!-- Latest compiled and minified bootstrap js -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script src="./bower_components/Materialize/dist/js/materialize.min.js"></script>
<script type="text/javascript">
$(function () {
	$('[data-toggle="tooltip"]').tooltip({delay: 50});
})
</script>
</body>
</html>