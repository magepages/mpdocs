Affiliate Link Cloaker
==================================



You can protect your affiliate links by using our Link Cloaker.
For example, instead of the standard affiliate link: http://www.example.com/?affiliate_id=22, you would use: http://www.yourdomain.com/my-friend-website.html


In this example, I will use affiliate link: ``http://www.example.com/?affiliate_id=22``
There are 3 ways to create a cloaker link.

PHP
--------

You can create a php file as the following::

	<?php header("Location: http://www.example.com/?affiliate_id=22"); ?>


HTML
--------

Creating a new HTML file with the following content::

	<html>
		<body>
			<meta HTTP-EQUIV="Refresh" CONTENT="0;URL=http://www.example.com/?affiliate_id=22">
		</body>
	</html>


Javascript
------------

The last way is javascript::

	<html>
		<head>
			<script type="text/javascript"> 
				window.location="http://www.example.com/?affiliate_id=22";
			</script>
		</head>
	<body</body>
	</html>



Once it is saved, upload it to your website. Now, instead of using your normal affiliate code, you can reference your uploaded affiliate web page, and no one can strip off your affiliate ID.
