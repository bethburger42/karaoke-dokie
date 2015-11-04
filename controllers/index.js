var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});


// <script>
//     $('#calendar').datepicker({
//         inline: true,
//         firstDay: 1,
//         showOtherMonths: true,
//         dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
//     });
// </script>

// router.get('/restricted', function(req, res) {
//   if (req.user) {
//     res.render('restricted');
//   } else {
//     req.flash('danger','You do not have permission to see this page');
//     res.redirect('/');
//   }
// });

module.exports = router;