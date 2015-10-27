<?php include 'header.php'; ?>

<div class="jumbotron grey lighten-3">
	<?php include 'nav.php'; ?>
</div>

<div class="row work-item-wraps">
	<?php foreach (range(1,5) as $value): ?>
	<div class="col-md-4 col-sm-6 col-xs-12 work-item">
		<div class="inner">
			<div class="card">
				<div class="card-image waves-effect waves-block waves-light">
					<img class="activator" src="stock-images/about-1.jpg">
				</div>
				<div class="card-content">
					<span class="card-title truncate activator grey-text text-darken-4">Travel Booking Bangladesh</span>
				</div>
				<div class="card-reveal">
					<span class="card-title grey-text text-darken-4">
						Bengal E-boi
						<i class="fa fa-close pull-right"></i>
					</span>
					<div class="url"><b>url:</b> <a href="http://bengaleboi.com">http://bengaleboi.com</a></div>
					<div class="desc">
						<p>Here is some more information about this product that is only revealed once clicked on.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
<?php endforeach ?>
</div>

<?php include 'footer.php'; ?>