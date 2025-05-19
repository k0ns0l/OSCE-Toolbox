<?php
$page_title = "Dashboard";
$nav = "Dashboard";
require_once "header.php"; ?>

<link rel="stylesheet" href="../assets/flip/flip.min.css">
<script src="../assets/flip/flip.min.js"></script>
<div class="content content-dark">
  <br>
  <?php if (!$darkMode) { ?>
    <div class="disclaimer" style="padding:0px; margin:15px;  border: 1px solid #D9D9D9; border-radius: 40; margin-left: auto;">
      <i class='bx bxs-hot'></i> Have you tried the new Dark Mode?
      <label style="cursor:pointer">
        <label class="switch footer-switch">
          <input type="checkbox" id="toggleMode2" <?php echo $darkMode ? 'checked' : ''; ?>>
          <span class="slider round"></span>
        </label> <i class='bx bx-moon' style="transform:translateY(3px)"></i>
      </label>
    </div>
    <script>
      $('#toggleMode2').change(function() {
        let darkMode = this.checked ? 'true' : 'false';
        document.cookie = "darkmode=" + darkMode + "; path=/; max-age=31536000";
        $.post("../index", {
          darkmode: darkMode
        }, function(result) {
          location.reload();
        });
      });
    </script>
  <?php } ?>

  <div class="row" style="width:99%">
    <div class="col-md-8">
      <div class="index-pill">
        <div style="font-size:25px">Good
          <?php
          $hour = date('H');
          echo $dayTerm = ($hour > 17) ? "evening" : (($hour > 12) ? "afternoon" : "morning");
          ?> <?php echo isset($_SESSION['first_name']) ? $_SESSION['first_name'] . '!' : ''; ?>
          👋
        </div>

        <div>We are super stoked to recommend this amazing Pharmacy Crossword book by our friends, Kainat & Aliya. Explore further and show your support by visiting <a href="http://amzn.eu/d/7pmXhXN" style="text-decoration: underline;" target="_blank">here</a>.
          <br>
          <br>
          Also, feel free to test your knowledge on the free crossword sample provided below!
        </div>
      </div>
      <br>
    </div>

    <div class="col-md-4">
      <?php
      $quotes = file("../../quotes.txt");
      $rand = array_rand($quotes);
      ?>
      <div class="quote">
        <?php echo str_replace('"', '', trim(explode(' - ', $quotes[$rand])[0])); ?>
        <br>
        <i>- <?php echo trim(explode('-', $quotes[$rand])[1]); ?></i>
      </div>
    </div>

    <!-- crossword -->
    <div class="col-12">
      <br>
      <iframe src="<?php echo $url; ?>dashboard/crossword" frameborder="0" style="width: 100%;height:700px;background:rgb(0,0,0,0.0);margin-bottom:40px" id="crosswordIframe">
      </iframe>
    </div>

    <style>
      @media only screen and (max-width: 900px) {
        #crosswordIframe {
          display: none;
        }
      }
    </style>

    <script>
      window.addEventListener('message', function(event) {
        var iframe = document.getElementById('crosswordIframe');

        // Check if the user is on a MacBook
        var isMacBook = /Macintosh|MacIntel|MacPPC|Mac68K/.test(navigator.platform) &&
          /Safari/.test(navigator.userAgent) &&
          !/Chrome/.test(navigator.userAgent);

        // Apply different height adjustment for MacBook users
        if (isMacBook) {
          // iframe.style.height = event.data.height + 20 + 'px'; // Example adjustment for MacBook
        } else {
          iframe.style.height = event.data.height + 10 + 'px';
        }
      }, false);

      function copyToClipboard() {
        var copyText = document.getElementById("refurl").href; // Get the href attribute of the link
        console.log(copyText);
        navigator.clipboard.writeText(copyText).then(function() {
          console.log('Copying to clipboard was successful!');
          document.getElementById('copy').innerHTML = '<i class="bx bx-check"></i> Copied';
        }, function(err) {
          console.error('Could not copy text: ', err);
        });
      }

      function handleTickInit(tick) {
        function getTimeUntilNextDay() {
          const now = new Date();
          const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
          return tomorrow - now;
        }

        Tick.count.down(new Date(Date.now() + getTimeUntilNextDay())).onupdate = function(value) {
          tick.value = value;
        };
      }
    </script>
    <!-- end crossword -->

    <div class="col-md-8">
      <?php
      $streak_query = mysqli_query($conn, "SELECT last_date, streak_count FROM daily_streak WHERE email='$email'");

      // Fetch current streak info from DB
      $streak = 0;
      $today = date("Y-m-d");
      $yesterday = date("Y-m-d", strtotime("yesterday"));

      if ($streak_query && $streak_query->num_rows == 1) {
        $streak_assoc = mysqli_fetch_assoc($streak_query);
        $last_date = $streak_assoc['last_date'];
        $streak = $streak_assoc['streak_count'];

        // If last date is today, keep current streak
        if ($last_date === $today) {
          $streak = $streak_assoc['streak_count'];
        }
        // If last date was yesterday, increment streak
        else if ($last_date === $yesterday) {
          $streak = $streak_assoc['streak_count'] + 1;
          mysqli_query($conn, "UPDATE daily_streak SET streak_count=$streak, last_date='$today' WHERE email='$email'");
        }
        // If streak broken, reset to 0
        else {
          mysqli_query($conn, "UPDATE daily_streak SET streak_count=0, last_date='$today' WHERE email='$email'");
          $streak = 0;
        }
      }
      ?>

      <div style="padding: 20px; margin-left: auto;">
        <div>
          <div class="your-streak-row">
            <div class="your-streak-box">
              <div class="your-streak-box-top">Your Streak</div>
              <div class="your-streak-box-number" id="streakCount"><?php echo $streak; ?></div>
            </div>

            <div class="streak-right">
              <div class="streak-top">
                TOP STREAK MEMBERS
                <div style="display:flex;align-items:center">
                  <input checked id="streakConsent" style="cursor: pointer" type="checkbox" name="public">
                  &nbsp;
                  <label for="streakConsent" style="font-size: 12px; font-weight: bolder; cursor: pointer; border-bottom:1px dashed black">
                    Show my streak publicly
                  </label>
                </div>
              </div>
              <div class="streak-avatar-row">
                <?php
                $day_before = date("Y-m-d", strtotime("-2 days"));
                $streak_board = mysqli_query($conn, "SELECT * FROM daily_streak WHERE last_date>'$day_before' ORDER BY streak_count DESC LIMIT 3");
                $user_info = mysqli_query($conn, "SELECT * FROM user_info");
                if ($streak_board && mysqli_num_rows($streak_board) > 0) {
                  $profiles = [];
                  while ($x = mysqli_fetch_assoc($streak_board)) {
                    $name = htmlspecialchars($x['first_name']);
                    // Fetch university from user_info using email
                    $email = $x['email'];
                    $uni = '';
                    $user_info_query = mysqli_query($conn, "SELECT university FROM user_info WHERE email='" . mysqli_real_escape_string($conn, $email) . "' LIMIT 1");
                    if ($user_info_query && mysqli_num_rows($user_info_query) > 0) {
                      $user_row = mysqli_fetch_assoc($user_info_query);
                      $uni = htmlspecialchars($user_row['university']);
                    }
                    $profiles[] = [
                      'name' => $name,
                      'streak_count' => (int)$x['streak_count'],
                      'uni' => $uni
                    ];
                  }
                  // Assign medals based on streak count order
                  foreach ($profiles as $idx => $profile) {
                    if ($idx === 0) {
                      $medalClass = "streak-gold";
                      $imgSrc = "../assets/img/gold.png";
                      $imgAlt = "Gold Award";
                    } elseif ($idx === 1) {
                      $medalClass = "streak-silver";
                      $imgSrc = "../assets/img/silver.png";
                      $imgAlt = "Silver Award";
                    } elseif ($idx === 2) {
                      $medalClass = "streak-bronze";
                      $imgSrc = "../assets/img/bronze.png";
                      $imgAlt = "Bronze Award";
                    } else {
                      $medalClass = "streak-neutral";
                      $imgSrc = "../assets/img/gold.png";
                      $imgAlt = "Award";
                    }
                ?>
                    <div class="streak-profile">
                      <img src="<?php echo $imgSrc; ?>" alt="<?php echo $imgAlt; ?>" class="streak-award-img <?php echo $medalClass; ?>">
                      <div><?php echo $profile['streak_count']; ?></div>
                      <div style="margin-top: 10px; font-weight:bold;"><?php echo $profile['name']; ?></div>
                      <div style="margin-top: 10px; font-size:12px;color:#EF798A">
                        <?php echo $profile['uni'] ? "({$profile['uni']})" : ""; ?>
                      </div>
                    </div>
                <?php
                  }
                } else {
                  echo '<div style="font-size:12px; color:#888; margin-top:10px;">No recent streaks found.</div>';
                }
                ?>
              </div>
            </div>
          </div>
          <div id="streakSuccessMsg" style="color:#31afb4"></div>
          <div id="streakErrorMsg" style="color:#EF798A"></div>
        </div>

        <br>
        <div style="font-size: 12px;font-weight: bolder;">Answer questions daily to maintain your streak!</div>
        <div class="disclaimer" style="padding:0px; margin:0px;  border: 1px solid #D9D9D9; border-radius: 0;">
          <p class="instruction">The next question will appear in:</p>

          <!-- <div class="tick" data-did-init="handleTickInit" style="display:flex; width:240px; justify-content:center; background: white; padding: 6px;" data-state="initialised">
            <div style="align-items: center; justify-content: center; gap: 5px; padding: 0px 6px; font-size: 28.8618px;" data-repeat="true" data-layout="horizontal center fit" data-transform="preset(d, h, m, s) -> delay">
              <div class="tick-group">
                <div data-key="value" data-repeat="true" data-transform="pad(00) -> split -> delay"><span data-view="flip" class="tick-flip"><span class="tick-flip-card"><span class="tick-flip-panel-front tick-flip-front tick-flip-panel" style="transform: rotateX(0deg);"><span class="tick-flip-panel-front-text"><span class="tick-flip-panel-text-wrapper">0</span></span><span class="tick-flip-panel-front-shadow" style="opacity: 0;"></span></span><span class="tick-flip-panel-back tick-flip-back tick-flip-panel" style="transform: rotateX(-180deg);"><span class="tick-flip-panel-back-text"><span class="tick-flip-panel-text-wrapper"></span></span><span class="tick-flip-panel-back-highlight" style="opacity: 2;"></span><span class="tick-flip-panel-back-shadow"></span></span></span><span class="tick-flip-card"><span class="tick-flip-panel-front tick-flip-front tick-flip-panel" style="transform: rotateX(-180deg);"><span class="tick-flip-panel-front-text"><span class="tick-flip-panel-text-wrapper"></span></span><span class="tick-flip-panel-front-shadow" style="opacity: 0;"></span></span><span class="tick-flip-panel-back tick-flip-back tick-flip-panel" style="transform: rotateX(-360deg);"><span class="tick-flip-panel-back-text"><span class="tick-flip-panel-text-wrapper">0</span></span><span class="tick-flip-panel-back-highlight" style="opacity: 0;"></span><span class="tick-flip-panel-back-shadow" style="opacity: 0;"></span></span></span><span class="tick-flip-spacer">0</span><span class="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span><span class="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span><span class="tick-flip-card-shadow" style="opacity: 0; transform: scaleY(0);"></span></span><span data-view="flip" class="tick-flip"><span class="tick-flip-card"><span class="tick-flip-panel-front tick-flip-front tick-flip-panel" style="transform: rotateX(0deg);"><span class="tick-flip-panel-front-text"><span class="tick-flip-panel-text-wrapper">0</span></span><span class="tick-flip-panel-front-shadow" style="opacity: 0;"></span></span><span class="tick-flip-panel-back tick-flip-back tick-flip-panel" style="transform: rotateX(-180deg);"><span class="tick-flip-panel-back-text"><span class="tick-flip-panel-text-wrapper"></span></span><span class="tick-flip-panel-back-highlight" style="opacity: 2;"></span><span class="tick-flip-panel-back-shadow"></span></span></span><span class="tick-flip-card"><span class="tick-flip-panel-front tick-flip-front tick-flip-panel" style="transform: rotateX(-180deg);"><span class="tick-flip-panel-front-text"><span class="tick-flip-panel-text-wrapper"></span></span><span class="tick-flip-panel-front-shadow" style="opacity: 0;"></span></span><span class="tick-flip-panel-back tick-flip-back tick-flip-panel" style="transform: rotateX(-360deg);"><span class="tick-flip-panel-back-text"><span class="tick-flip-panel-text-wrapper">0</span></span><span class="tick-flip-panel-back-highlight" style="opacity: 0;"></span><span class="tick-flip-panel-back-shadow" style="opacity: 0;"></span></span></span><span class="tick-flip-spacer">0</span><span class="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span><span class="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span><span class="tick-flip-card-shadow" style="opacity: 0; transform: scaleY(0);"></span></span></div><span data-key="label" data-view="text" class="tick-label tick-text" style="font-size:8px; margin-top: 2px;" data-value="Days">Days</span>
              </div>
              <div class="tick-group">
                <div data-key="value" data-repeat="true" data-transform="pad(00) -> split -> delay"><span data-view="flip" class="tick-flip"><span class="tick-flip-card"><span class="tick-flip-panel-front tick-flip-front tick-flip-panel" style="transform: rotateX(0deg);"><span class="tick-flip-panel-front-text"><span class="tick-flip-panel-text-wrapper">0</span></span><span class="tick-flip-panel-front-shadow" style="opacity: 0;"></span></span><span class="tick-flip-panel-back tick-flip-back tick-flip-panel" style="transform: rotateX(-180deg);"><span class="tick-flip-panel-back-text"><span class="tick-flip-panel-text-wrapper"></span></span><span class="tick-flip-panel-back-highlight" style="opacity: 2;"></span><span class="tick-flip-panel-back-shadow"></span></span></span><span class="tick-flip-card"><span class="tick-flip-panel-front tick-flip-front tick-flip-panel" style="transform: rotateX(-180deg);"><span class="tick-flip-panel-front-text"><span class="tick-flip-panel-text-wrapper"></span></span><span class="tick-flip-panel-front-shadow" style="opacity: 0;"></span></span><span class="tick-flip-panel-back tick-flip-back tick-flip-panel" style="transform: rotateX(-360deg);"><span class="tick-flip-panel-back-text"><span class="tick-flip-panel-text-wrapper">0</span></span><span class="tick-flip-panel-back-highlight" style="opacity: 0;"></span><span class="tick-flip-panel-back-shadow" style="opacity: 0;"></span></span></span><span class="tick-flip-spacer">0</span><span class="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span><span class="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span><span class="tick-flip-card-shadow" style="opacity: 0; transform: scaleY(0);"></span></span><span data-view="flip" class="tick-flip"><span class="tick-flip-card"><span class="tick-flip-panel-front tick-flip-front tick-flip-panel" style="transform: rotateX(0deg);"><span class="tick-flip-panel-front-text"><span class="tick-flip-panel-text-wrapper">5</span></span><span class="tick-flip-panel-front-shadow" style="opacity: 0;"></span></span><span class="tick-flip-panel-back tick-flip-back tick-flip-panel" style="transform: rotateX(-180deg);"><span class="tick-flip-panel-back-text"><span class="tick-flip-panel-text-wrapper"></span></span><span class="tick-flip-panel-back-highlight" style="opacity: 2;"></span><span class="tick-flip-panel-back-shadow"></span></span></span><span class="tick-flip-card" style=""><span class="tick-flip-panel-front tick-flip-front tick-flip-panel" style="transform: rotateX(-180deg);"><span class="tick-flip-panel-front-text"><span class="tick-flip-panel-text-wrapper">6</span></span><span class="tick-flip-panel-front-shadow" style="opacity: 0;"></span></span><span class="tick-flip-panel-back tick-flip-back tick-flip-panel" style="transform: rotateX(-360deg);"><span class="tick-flip-panel-back-text"><span class="tick-flip-panel-text-wrapper">5</span></span><span class="tick-flip-panel-back-highlight" style="opacity: 0;"></span><span class="tick-flip-panel-back-shadow" style="opacity: 0;"></span></span></span><span class="tick-flip-spacer">5</span><span class="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span><span class="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span><span class="tick-flip-card-shadow" style="opacity: 0; transform: scaleY(0);"></span></span></div><span data-key="label" data-view="text" class="tick-label tick-text" style="font-size:8px; margin-top: 2px;" data-value="Hours">Hours</span>
              </div>
              <div class="tick-group">
                <div data-key="value" data-repeat="true" data-transform="pad(00) -> split -> delay"><span data-view="flip" class="tick-flip"><span class="tick-flip-card"><span class="tick-flip-panel-front tick-flip-front tick-flip-panel" style="transform: rotateX(0deg);"><span class="tick-flip-panel-front-text"><span class="tick-flip-panel-text-wrapper">5</span></span><span class="tick-flip-panel-front-shadow" style="opacity: 0;"></span></span><span class="tick-flip-panel-back tick-flip-back tick-flip-panel" style="transform: rotateX(-180deg);"><span class="tick-flip-panel-back-text"><span class="tick-flip-panel-text-wrapper"></span></span><span class="tick-flip-panel-back-highlight" style="opacity: 2;"></span><span class="tick-flip-panel-back-shadow"></span></span></span><span class="tick-flip-card" style=""><span class="tick-flip-panel-front tick-flip-front tick-flip-panel" style="transform: rotateX(-180deg);"><span class="tick-flip-panel-front-text"><span class="tick-flip-panel-text-wrapper">0</span></span><span class="tick-flip-panel-front-shadow" style="opacity: 0;"></span></span><span class="tick-flip-panel-back tick-flip-back tick-flip-panel" style="transform: rotateX(-360deg);"><span class="tick-flip-panel-back-text"><span class="tick-flip-panel-text-wrapper">5</span></span><span class="tick-flip-panel-back-highlight" style="opacity: 0;"></span><span class="tick-flip-panel-back-shadow" style="opacity: 0;"></span></span></span><span class="tick-flip-spacer">5</span><span class="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span><span class="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span><span class="tick-flip-card-shadow" style="opacity: 0; transform: scaleY(0);"></span></span><span data-view="flip" class="tick-flip"><span class="tick-flip-card"><span class="tick-flip-panel-front tick-flip-front tick-flip-panel" style="transform: rotateX(0deg);"><span class="tick-flip-panel-front-text"><span class="tick-flip-panel-text-wrapper">7</span></span><span class="tick-flip-panel-front-shadow" style="opacity: 0;"></span></span><span class="tick-flip-panel-back tick-flip-back tick-flip-panel" style="transform: rotateX(-180deg);"><span class="tick-flip-panel-back-text"><span class="tick-flip-panel-text-wrapper"></span></span><span class="tick-flip-panel-back-highlight" style="opacity: 2;"></span><span class="tick-flip-panel-back-shadow"></span></span></span><span class="tick-flip-card" style=""><span class="tick-flip-panel-front tick-flip-front tick-flip-panel" style="transform: rotateX(-180deg);"><span class="tick-flip-panel-front-text"><span class="tick-flip-panel-text-wrapper">8</span></span><span class="tick-flip-panel-front-shadow" style="opacity: 0;"></span></span><span class="tick-flip-panel-back tick-flip-back tick-flip-panel" style="transform: rotateX(-360deg);"><span class="tick-flip-panel-back-text"><span class="tick-flip-panel-text-wrapper">7</span></span><span class="tick-flip-panel-back-highlight" style="opacity: 0;"></span><span class="tick-flip-panel-back-shadow" style="opacity: 0;"></span></span></span><span class="tick-flip-spacer">7</span><span class="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span><span class="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span><span class="tick-flip-card-shadow" style="opacity: 0; transform: scaleY(0);"></span></span></div><span data-key="label" data-view="text" class="tick-label tick-text" style="font-size:8px; margin-top: 2px;" data-value="Minutes">Minutes</span>
              </div>
              <div class="tick-group">
                <div data-key="value" data-repeat="true" data-transform="pad(00) -> split -> delay"><span data-view="flip" class="tick-flip"><span class="tick-flip-card"><span class="tick-flip-panel-front tick-flip-front tick-flip-panel" style="transform: rotateX(0deg);"><span class="tick-flip-panel-front-text"><span class="tick-flip-panel-text-wrapper">2</span></span><span class="tick-flip-panel-front-shadow" style="opacity: 0;"></span></span><span class="tick-flip-panel-back tick-flip-back tick-flip-panel" style="transform: rotateX(-180deg);"><span class="tick-flip-panel-back-text"><span class="tick-flip-panel-text-wrapper"></span></span><span class="tick-flip-panel-back-highlight" style="opacity: 2;"></span><span class="tick-flip-panel-back-shadow"></span></span></span><span class="tick-flip-card" style=""><span class="tick-flip-panel-front tick-flip-front tick-flip-panel" style="transform: rotateX(-180deg);"><span class="tick-flip-panel-front-text"><span class="tick-flip-panel-text-wrapper">3</span></span><span class="tick-flip-panel-front-shadow" style="opacity: 0;"></span></span><span class="tick-flip-panel-back tick-flip-back tick-flip-panel" style="transform: rotateX(-360deg);"><span class="tick-flip-panel-back-text"><span class="tick-flip-panel-text-wrapper">2</span></span><span class="tick-flip-panel-back-highlight" style="opacity: 0;"></span><span class="tick-flip-panel-back-shadow" style="opacity: 0;"></span></span></span><span class="tick-flip-spacer">2</span><span class="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span><span class="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span><span class="tick-flip-card-shadow" style="opacity: 0; transform: scaleY(0);"></span></span><span data-view="flip" class="tick-flip"><span class="tick-flip-card"><span class="tick-flip-panel-front tick-flip-front tick-flip-panel" style="transform: rotateX(0deg);"><span class="tick-flip-panel-front-text"><span class="tick-flip-panel-text-wrapper">1</span></span><span class="tick-flip-panel-front-shadow" style="opacity: 0;"></span></span><span class="tick-flip-panel-back tick-flip-back tick-flip-panel" style="transform: rotateX(-180deg);"><span class="tick-flip-panel-back-text"><span class="tick-flip-panel-text-wrapper"></span></span><span class="tick-flip-panel-back-highlight" style="opacity: 2;"></span><span class="tick-flip-panel-back-shadow"></span></span></span><span class="tick-flip-card" style=""><span class="tick-flip-panel-front tick-flip-front tick-flip-panel" style="transform: rotateX(-180deg);"><span class="tick-flip-panel-front-text"><span class="tick-flip-panel-text-wrapper">2</span></span><span class="tick-flip-panel-front-shadow" style="opacity: 0;"></span></span><span class="tick-flip-panel-back tick-flip-back tick-flip-panel" style="transform: rotateX(-360deg);"><span class="tick-flip-panel-back-text"><span class="tick-flip-panel-text-wrapper">1</span></span><span class="tick-flip-panel-back-highlight" style="opacity: 0;"></span><span class="tick-flip-panel-back-shadow" style="opacity: 0;"></span></span></span><span class="tick-flip-spacer">1</span><span class="tick-flip-shadow-top tick-flip-shadow tick-flip-front"></span><span class="tick-flip-shadow-bottom tick-flip-shadow tick-flip-back"></span><span class="tick-flip-card-shadow" style="opacity: 0; transform: scaleY(0);"></span></span></div><span data-key="label" data-view="text" class="tick-label tick-text" style="font-size:8px; margin-top: 2px;" data-value="Seconds">Seconds</span>
              </div>
            </div>
          </div> -->


          <div class="tick" data-did-init="handleTickInit" style="display:flex; width:240px; justify-content:center; background: white; padding: 6px;">
            <div style=" align-items: center; justify-content:center; gap: 5px; padding: 0px 6px;" data-repeat="true" data-layout="horizontal center fit" data-transform="preset(d, h, m, s) -> delay">
              <div class="tick-group">
                <div data-key="value" data-repeat="true" data-transform="pad(00) -> split -> delay">
                  <span data-view="flip"></span>
                </div>
                <span data-key="label" data-view="text" class="tick-label" style="font-size:8px; margin-top: 2px;"></span>
              </div>
            </div>
          </div>
        </div>

        <style>
          .your-streak-row {
            display: flex;
            flex-direction: row;
            gap: 1px;
            flex-wrap: wrap;
            margin-left: auto;
          }

          .your-streak-box {
            min-width: 25px;
            min-height: 160px;
            background: #fff;
            border-radius: 16px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 40px;
            margin-bottom: 8px;
            margin-left: auto;
          }

          .your-streak-box-top {
            font-size: 16px;
            font-weight: bold;
            color: #31afb4;
            margin-bottom: 10px;
          }

          .your-streak-box-number {
            font-size: 48px;
            font-weight: bolder;
            color: #31afb4;
            line-height: 1;
          }

          .streak-right {
            padding: 20px;
            padding-top: 20px;
            flex-grow: 1;
            padding-top: 0px;
          }

          .streak-top {
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            font-size: 12px;
            font-weight: bolder;
            padding-top: 10px;
            font-size: 16px;
            font-weight: bold;
            padding-left: 10px;
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: 550px;
          }

          .streak-avatar-row {
            display: flex;
            flex-direction: row;
            gap: 18px;
            margin-top: 8px;
            flex-wrap: wrap;
          }

          .streak-profile {
            background: #f8f8f8;
            border-radius: 12px;
            box-shadow: 0 1px 6px rgba(0, 0, 0, 0.04);
            padding: 12px 10px 8px 10px;
            min-width: 90px;
            min-height: 120px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .streak-award-img {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            margin-bottom: 6px;
            object-fit: cover;
            border: 2px solid #fff;
            background: #fff;
          }

          @media (max-width: 700px) {

            .your-streak-row {
              flex-direction: column;
              gap: 18px;
            }

            .streak-avatar-row {
              gap: 10px;
            }

            .your-streak-box {
              min-width: 100px;
              min-height: 100px;
              padding: 12px 8px;
            }

            .streak-profile {
              min-width: 70px;
              min-height: 90px;
              padding: 8px 4px 6px 4px;
            }
          }

          .tick-credits {
            display: none !important;
          }

          .tick-group:first-of-type {
            display: none;
          }

          .tick-group {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .tick-flip-panel {
            background-color: #EF798A !important;
          }

          .streak-gold {
            width: 65px;
            height: 65px;
            border-radius: 50%;
            background: linear-gradient(135deg, #FFD700 60%, #FFF8DC 100%);
            margin-bottom: 8px;
            border: 2px solid #fff;
          }

          .streak-silver {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            background: linear-gradient(135deg, #C0C0C0 60%, #F8F8FF 100%);
            margin-bottom: 8px;
            border: 2px solid #fff;
          }

          .streak-bronze {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            background: linear-gradient(135deg, #CD7F32 60%, #FFE4B5 100%);
            margin-bottom: 8px;
            border: 2px solid #fff;
          }

          .streak-neutral {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            background: #e0e0e0;
            margin-bottom: 8px;
            border: 2px solid #fff;
          }

          .instruction {
            margin: 0 0 0 10px;
          }

          .disclaimer {
            display: flex !important;
            flex-direction: column;
            align-items: center;
            background: rgb(0, 0, 0, 0.05);
            font-size: 14px !important;
            padding: 10px;
            padding-bottom: 10px;
            border-radius: 10px;
            margin: 20px 0;
          }

          @media only screen and (min-width: 600px) {
            .disclaimer {
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            }
          }
        </style>

        <br>
        <div id="question" style=""></div>
        <br>

        <label style="width:100%" for="option-a-input">
          <div class="option">
            <input id="option-a-input" type="radio" name="answer" value="A">
            <span id="option-a"></span>
          </div>
        </label>

        <label style="width:100%" for="option-b-input">
          <div class="option">
            <input id="option-b-input" type="radio" name="answer" value="B">
            <span id="option-b"></span>
          </div>
        </label>

        <label style="width:100%" for="option-c-input">
          <div class="option">
            <input id="option-c-input" type="radio" name="answer" value="C">
            <span id="option-c"></span>
          </div>
        </label>

        <label style="width:100%" for="option-d-input">
          <div class="option">
            <input id="option-d-input" type="radio" name="answer" value="D">
            <span id="option-d"></span>
          </div>
        </label>

        <label style="width:100%" for="option-e-input">
          <div class="option">
            <input id="option-e-input" type="radio" name="answer" value="E">
            <span id="option-e"></span>
          </div>
        </label>

        <div class="clear"></div>
        <br>
        <button id="submit-answer" class="main-search-btn">Check Answer</button>

        <div class="alert alert-light" id="answer" style="margin-top:20px;display: none;">
          <div id="answer-feedback" style="">Select an option</div>
          <br>
          <p id="explanation"></p>
        </div>

      </div>

      <script src="https://cdn.jsdelivr.net/npm/@tsparticles/confetti@3.0.3/tsparticles.confetti.bundle.min.js"></script>
      <script type="text/javascript">
        fetch('page-loader/mcq')
          .then(response => response.json())
          .then(questionData => {
            document.getElementById("question").textContent = questionData.question;
            document.getElementById("option-a").textContent = "A. " + questionData.options.A;
            document.getElementById("option-b").textContent = "B. " + questionData.options.B;
            document.getElementById("option-c").textContent = "C. " + questionData.options.C;
            document.getElementById("option-d").textContent = "D. " + questionData.options.D;
            document.getElementById("option-e").textContent = "E. " + questionData.options.E;

            document.getElementById("submit-answer").addEventListener("click", function() {
              var selected = document.querySelector("input[name='answer']:checked");
              if (!selected) {
                document.getElementById("answer-feedback").textContent = "Please select an option!";
                document.getElementById("answer").style.display = "block";
                return;
              }
              var selectedAnswer = selected.value;
              var isCorrect = (selectedAnswer === questionData.correctAnswer);

              $.post("page-loader/mcq", {
                streak: selectedAnswer
              }, function(response) {
                document.getElementById('streakCount').innerHTML = response;
                $("#answer").slideDown();
                document.getElementById("answer-feedback").textContent = isCorrect ? "Correct!" : "Incorrect! Answer: " + questionData.correctAnswer;
                document.getElementById("explanation").textContent = questionData.explanation;
                if (!isCorrect) {
                  var selectedOption = document.querySelector("label[for='option-" + selectedAnswer.toLowerCase() + "-input']");
                  selectedOption.style.color = "red";
                  var correctOption = document.querySelector("label[for='option-" + questionData.correctAnswer.toLowerCase() + "-input']");
                  correctOption.style.fontWeight = "bolder";
                  correctOption.style.color = "green";
                } else {
                  confetti({
                    particleCount: 500,
                    spread: 500,
                    origin: {
                      y: 0.6
                    }
                  });
                }
              });
            });
          })
          .catch(error => {
            console.error('Error:', error);
          });
      </script>
    </div>

    <div class="col-md-4">
      <div id="update_exam_date" class="dashboard-card" style="padding: 20px;">
        <div style="border-bottom: 10px;margin-bottom: 10px;">When is your exam?</div>
        <form method="post">
          <input type="date" class="form-control" name="exam_date">
          <br>
          <button class="btn btn-primary" type="submit">UPDATE</button>
        </form>
      </div>

      <?php
      if (post('exam_date')) {
        $exam_date = strtotime(filter_input(INPUT_POST, 'exam_date', FILTER_SANITIZE_FULL_SPECIAL_CHARS));
        if ($exam_date) {
          $squery = mysqli_query($conn, "UPDATE user_info SET exam_date='$exam_date' WHERE email='$email'");
          if ($squery) {
            $exam_date = $exam_date;
          }
        }
      }

      $time = time();
      if (!empty($exam_date) and $time < $exam_date) {
        $days_left = number_format(($exam_date - $time) / (60 * 60 * 24));

      ?>
        <script type="text/javascript">
          document.getElementById('update_exam_date').style.display = "none";

          function showDatePicker() {
            document.getElementById('update_exam_date').style.display = "block";
            document.getElementById('exam_date').style.display = "none";
          }
        </script>

        <div style="background: #fff;padding: 20px;" id="exam_date">
          <small>Days to exam</small>
          <div style="float:right;cursor: pointer;" onclick="showDatePicker()"><i class='bx bx-edit-alt'></i></div>
          <br>
          <span style="font-size: 40px;font-weight: bolder;"><?php echo $days_left; ?></span>
          <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: <?php echo number_format(((150 - $days_left) / 150) * 100, 5); ?>%;background:#31afb4" aria-valuenow="<?php echo number_format((150 - $days_left) / 100); ?>" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
      <?php } ?>
      <br>
      <a href="https://oscetoolbox.us21.list-manage.com/subscribe/post?u=e35f3ec3cf5ff662229e194c3&id=cf2ce7769e&f_id=00fdede6f0">
        <div class="home-card">
          <div class="home-card-hover"></div>
          <div style="position:absolute;bottom: 20px;width: 100%;;"></div>
      </a>
    </div>
    <br><br>
    <div class="quote dashboard-card" style="word-wrap:break-word">
      <div style="font-size: 14px;font-weight: bolder;margin-bottom:10px">
        <a style="color:#EF798A;text-decoration:underline" href="https://docs.google.com/forms/d/e/1FAIpQLSc9Abxf01DkovB_SpxffwirhdJc2RFHWbRFrO7Ho-0uklD3zg/viewform?usp=sf_link" target="_blank">Sign Up to be an Ambassador here.</a>
      </div>
      <?php
      // Fetch the current user info
      $user_info_query = mysqli_query($conn, "SELECT * FROM user_info WHERE email='" . mysqli_real_escape_string($conn, $email) . "' LIMIT 1");
      $user_info = mysqli_fetch_assoc($user_info_query);
      ?>
      <div style="font-size: 12px;">Your referral number</div>
      <div class="dashboard-card-bignum"><?php echo $user_info['id']; ?></div>

      <a href="<?php echo $url; ?>referral?r=<?php echo $user_info['id']; ?>" id="refurl">
        <div class="dashboard-card-small-link" target="_blank"><?php echo $url; ?>referral?r=<?php echo $user_info['id']; ?></div>
      </a>
      <div id="copy" style="font-size: 12px;cursor:pointer;" onclick="copyToClipboard()"><i class="bx bx-copy"></i> Copy</div>
    </div>
    <br><br><br><br>
  </div>
</div>
</div>
<?php require "footer.php"; ?>