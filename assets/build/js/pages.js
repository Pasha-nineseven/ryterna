// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 14px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 16px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="index.html">Вход</a></li> \
		<li><a href="registration.html">Registration</a></li> \
		<li><a href="profile.html">Profile</a></li> \
		<li><a href="configuration.html">Configuration</a></li> \
		<li><a href="configuration-in.html">Configuration-in</a></li> \
		<li><a href="politics.html">politics</a></li> \
	</ol> \
</div>');