Parse.initialize("lJs15otki5hwhMrF0XDk20M5QhlHtifaX0IAqDGA", "8gTbmsZzVhMl9D8mNwdj2LF5h3Vmzei8KIeiquEp");
      
      var Menu = Parse.Object.extend("Dinner_Parkside_7_13");
      var query = new Parse.Query(Menu);
      var week_day = new Date().getDay();
      var day;
      // if (week_day == 0){
      //   day = "Sunday";
      // } else if(week_day == 1){
      //   day = "Monday";
      // }else if(week_day == 2){
      //   day = "Tuesday";
      // }else if(week_day == 3){
      //   day = "Wednesday";
      // }else if(week_day == 4){
      //   day = "Thursday";
      // }else if(week_day == 5){
      //   day = "Friday";
      // }else if(week_day == 6){
      //   day = "Saturday";
      // }

      query.select("Sunday");
      query.find().then(function(results){

        for (var i =0; i<results.length; i++){
          var object=results[i];
          
          $('.food_list').append('<h2>'+object.get('Sunday')+'</h2>');

        }

          


          //alert(object.id + ' - ' + object.get('Sunday'));
          
        });