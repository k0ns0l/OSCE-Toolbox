<?php


// header(("Location: ../alerts/temporary-maintenance.html"));
// exit();

require_once __DIR__ . "/../inc/conn.php";
logged_in(true);

$admins_json = json_decode(file_get_contents(__DIR__ . "/../inc/admins.json"));
$admins = array();
$is_admin = false;



foreach ($admins_json as $a => $b) {
	$admins[] = $a;
	if ($_SESSION['email'] == $a) {
		$is_admin = true;
	}
}


$email = $_SESSION['email'];

$user_info = mysqli_fetch_assoc(mysqli_query($conn, "SELECT id, university, exam_date, nick FROM user_info WHERE email='$email'"));

if (empty($user_info['exam_date'])) {
	$uni = $user_info['university'];
	$exam_date_query = mysqli_fetch_assoc(mysqli_query($conn, "SELECT exam_date FROM user_info WHERE university='$uni' AND exam_date>=" . time() . " ORDER BY exam_date LIMIT 0,1"));
	if (empty($exam_date_query)) {
		$exam_date = '';
	} else {
		$exam_date = $exam_date_query['exam_date'];
	}
}

if (!isset($page_title)) {
	$page_title == '';
}
?>

<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">

	<title>OSCE Toolbox | <?php echo $page_title; ?></title>
	<meta content="" name="descriptison">
	<meta content="" name="keywords">

	<!-- Favicons -->
	<link href="<?php echo $url; ?>assets/img/favicon.png" rel="icon">
	<link href="<?php echo $url; ?>assets/img/favicon.png" rel="apple-touch-icon">


	<!-- Vendor CSS Files -->
	<link href="<?php echo $url; ?>assets/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="<?php echo $url; ?>assets/icofont/icofont.min.css" rel="stylesheet">
	<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

	<!-- Template Main CSS File -->
	<link href="<?php echo $url; ?>dashboard/assets/dashboard.css?v=4" rel="stylesheet">
	<link href="<?php echo $url; ?>assets/search.css" rel="stylesheet">


	<!-- JS -->
	<script type="text/javascript" src="<?php echo $url; ?>assets/jquery/jquery.min.js"></script>

	<!-- Google Font -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;1,500&family=Nunito:wght@300;400&display=swap" rel="stylesheet">

	<!-- Minimo font -->
	<link href="https://fonts.cdnfonts.com/css/minimo" rel="stylesheet">



	<?php
	$darkMode = false;
	if (isset($_COOKIE['darkmode']) && $_COOKIE['darkmode'] == 'true') {
		$darkMode = true;
	?>
		<link rel="stylesheet" href="../assets/dark.css">
	<?php } ?>


</head>

<body>

	<div class="page">
		<img src="assets/img/plants.png" class="plant">

		<div id="mySidebar" class="sidebar">


			<a href="../" class="logo"><img src="../assets/img/logo.png"></a>
			<div class="hello">Hello, <b style="color: #31AFB4"><?php echo isset($_SESSION['first_name']) ? $_SESSION['first_name'] . '!' : ''; ?></b></div>
			<br>

			<div class="badge-container">
				<img src="../assets/img/badges/badge1.PNG" alt="badge" width="200px" style="object-fit:cover">
				<?php
				// Fetch join date from user_login table
				$join_query = mysqli_query($conn, "SELECT join_date FROM user_login WHERE email='$email' LIMIT 1");
				$join_row = mysqli_fetch_assoc($join_query);
				$join_timestamp = isset($join_row['join_date']) ? strtotime($join_row['join_date']) : time();
				$hours_since_joined = floor((time() - $join_timestamp) / 3600);
				?>
				<span class="badge-tooltip">
					Joined <?php echo $hours_since_joined; ?> hour<?php echo ($hours_since_joined == 1) ? '' : 's'; ?> ago
				</span>
			</div>
			<style>
				.badge-container {
					position: relative;
					display: inline-block;
					cursor: pointer;
				}

				.badge-tooltip {
					position: absolute;
					bottom: 80%;
					left: 50%;
					transform: translateX(-50%);
					background-color: #333;
					color: #fff;
					padding: 5px 10px;
					border-radius: 5px;
					font-size: 12px;
					white-space: nowrap;
					opacity: 0;
					visibility: hidden;
					transition: opacity 0.3s ease, transform 0.3s ease;
				}

				.badge-container:hover .badge-tooltip {
					opacity: 1;
					visibility: visible;
					transform: translateX(-50%) translateY(-10px);
				}
			</style>
			<br>
			<br>

			<!-- <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a> -->
			<a href="<?php echo $url; ?>dashboard/index" <?php echo $page_title == 'Dashboard' ? "class='active'" : ''; ?>><img src="<?php echo $url; ?>dashboard/assets/img/icon-dashboard.png"> Dashboard</a>


			<a href="<?php echo $url; ?>dashboard/search?category=scenario" <?php echo $page_title == 'Scenarios' ? "class='active'" : ''; ?>><img src="<?php echo $url; ?>dashboard/assets/img/icon-scenarios.png"> Scenarios</a>


			<a href="<?php echo $url; ?>dashboard/search?category=video" <?php echo $page_title == 'Videos' ? "class='active'" : ''; ?>><img src="<?php echo $url; ?>dashboard/assets/img/icon-vr.png"> Videos</a>

			<a href="<?php echo $url; ?>dashboard/search?category=cheatsheet" <?php echo $page_title == 'Cheat sheets' ? "class='active'" : ''; ?>><img src="<?php echo $url; ?>dashboard/assets/img/icon-notes.png"> Info Capsules</a>


			<div class="sidebar-header">MY FILES</div>

			<a href="<?php echo $url; ?>dashboard/my-likes" <?php echo $page_title == 'My Likes' ? "class='active'" : ''; ?>><img src="<?php echo $url; ?>dashboard/assets/img/icon-like.png"> My Likes</a>

			<a href="<?php echo $url; ?>dashboard/score-history" <?php echo $page_title == 'My Scores' ? "class='active'" : ''; ?>><img src="<?php echo $url; ?>dashboard/assets/img/icon-document-folder.png"> My Scores</a>

			<a href="<?php echo $url; ?>dashboard/notes" <?php echo $page_title == 'My Notes' ? "class='active'" : ''; ?>><img src="<?php echo $url; ?>assets/img/icon-note.svg"> My Notes</a>

			<?php if (isset($is_admin) and $is_admin == true) { ?>
				<a href="<?php echo $url; ?>dashboard/my-resources" <?php echo $page_title == 'My Resources' ? "class='active'" : ''; ?>><img src="<?php echo $url; ?>dashboard/assets/img/icon-document-folder.png"> Resources</a>
				<!-- <a href="add-resource" <?php echo $page_title == 'Add Resource' ? "class='active'" : ''; ?>><img src="assets/img/icon-file-add.png"> Add Resource</a> -->
			<?php } ?>

			<div class="sidebar-header">ACCOUNT</div>

			<a href="<?php echo $url; ?>dashboard/my-payments" <?php echo $page_title == 'My Payments' ? "class='active'" : ''; ?>><img src="<?php echo $url; ?>dashboard/assets/img/icon-user.png"> My Payments</a>

			<a href="<?php echo $url; ?>dashboard/my-referrals" <?php echo $page_title == 'My Referrals' ? "class='active'" : ''; ?>><img src="<?php echo $url; ?>dashboard/assets/img/icon-users.png"> My Referrals</a>

			<a href="<?php echo $url; ?>dashboard/account-settings" <?php echo $page_title == 'Account Settings' ? "class='active'" : ''; ?>><img src="<?php echo $url; ?>dashboard/assets/img/icon-user.png"> Account Settings</a>

			<?php if ($is_admin) { ?>
				<a href="<?php echo $url; ?>dashboard/admin" <?php echo $page_title == 'Admin' ? "class='active'" : ''; ?>><img src="<?php echo $url; ?>dashboard/assets/img/icon-user.png"> Admin Settings</a>
			<?php } ?>

			<a href="<?php echo $url; ?>login/logout"><img src="<?php echo $url; ?>dashboard/assets/img/icon-logout.png"> Logout</a>

			<br>

			<center>
				<label style="cursor:pointer">
					<label class="switch footer-switch">
						<input type="checkbox" id="toggleMode" <?php echo $darkMode ? 'checked' : ''; ?>>
						<span class="slider round"></span>
					</label> <i class='bx bx-moon' style="transform:translateY(2px)"></i>
				</label>
			</center>

			<script>
				$('#toggleMode').change(function() {
					let darkMode = this.checked ? 'true' : 'false';
					document.cookie = "darkmode=" + darkMode + "; path=/; max-age=31536000";
					$.post("../index", {
						darkmode: darkMode
					}, function(result) {
						location.reload();
					});
				});
			</script>
		</div>

		<div id="main">

			<div class="search-result-div" id="search-result-div">
				<i class="icofont-search"></i> &nbsp; Search Files
			</div>

			<div class="top-main">

				<div class="row">

					<div class="col-10">
						<div class="hamburger" id="openHamburger" onclick="openNav()">☰</div>
						<div class="hamburger" id="closeHamburger" onclick="closeNav()" style="display: none">X</div>
						<div class="search" onclick="$('#searchInput').focus();">
							<input id="searchInput" class="search-input" placeholder="Search.." type="text">
							<button class="submit-search"><img src="../assets/img/search-logo.png"></button>
							<div class="clear"></div>
						</div>
					</div>


					<div class="col-2 donate-div">
						<form action="https://www.paypal.com/donate" method="post" target="_top">
							<label for="donate" style="cursor: pointer;">
								<img src="../assets/img/like-1.png">
							</label>

							<input type="hidden" name="hosted_button_id" value="5FG8YWB7MRH4N" />
							<input id="donate" style="display: none" type="image" />
						</form>

					</div>

				</div>

			</div>