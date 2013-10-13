Parse.initialize("lJs15otki5hwhMrF0XDk20M5QhlHtifaX0IAqDGA", "8gTbmsZzVhMl9D8mNwdj2LF5h3Vmzei8KIeiquEp");

      var week = 40;

      var the_date = new Date();

      var week_day = the_date.getDay();

      var day;
      
      if(week_day == 1) week+=1;
      if (week_day == 0){
        day = "Sunday";
      } else if(week_day == 1){
        day = "Monday";
      }else if(week_day == 2){
        day = "Tuesday";
      }else if(week_day == 3){
        day = "Wednesday";
      }else if(week_day == 4){
        day = "Thursday";
      }else if(week_day == 5){
        day = "Friday";
      }else if(week_day == 6){
        day = "Saturday";
      }

      //For Parkside

      if($('body').has('#food_list_parkside')){

      var week_to_fetch = "Dinner_Parkside_Week" + week.toString();

      var Menu = Parse.Object.extend(week_to_fetch);
      var query = new Parse.Query(Menu);

      query.select(day);
      query.find().then(function(results){

        for (var i =0; i<results.length; i++){
          var object=results[i];
          var food_item = object.get(day);
          var color = "#444444";

          if(food_item.indexOf('(V)') != -1){
            color = "#008000";
          }
          if(food_item.indexOf('(VEG)') != -1){
            color = "#ffcc00";
          }
          
          $('#food_list_parkside_dinner').append("<h2 style=\"color:" + color + ";\">" + food_item + '</h2>');
          //$('h2').css('color', color);

        }


          


          //alert(object.id + ' - ' + object.get('Sunday'));
          
        });

      var week_to_fetch = "Lunch_Parkside_Week" + week.toString();

      var Menu = Parse.Object.extend(week_to_fetch);
      var query = new Parse.Query(Menu);

      query.select(day);
      query.find().then(function(results){

        for (var i =0; i<results.length; i++){
          var object=results[i];
          var food_item = object.get(day);
          var color = "#444444";

          if(food_item.indexOf('(V)') != -1){
            color = "#008000";
          }
          if(food_item.indexOf('(VEG)') != -1){
            color = "#ffcc00";
          }
          
          $('#food_list_parkside_lunch').append("<h2 style=\"color:" + color + ";\">" + food_item + '</h2>');
          //$('h2').css('color', color);

        }

          //alert(object.id + ' - ' + object.get('Sunday'));
          
        });

      var week_to_fetch = "Breakfast_Parkside_Week" + week.toString();

      var Menu = Parse.Object.extend(week_to_fetch);
      var query = new Parse.Query(Menu);

      query.select(day);
      query.find().then(function(results){

        for (var i =0; i<results.length; i++){
          var object=results[i];
          var food_item = object.get(day);
          var color = "#444444";

          if(food_item.indexOf('(V)') != -1){
            color = "#008000";
          }
          if(food_item.indexOf('(VEG)') != -1){
            color = "#ffcc00";
          }
          
          $('#food_list_parkside_breakfast').append("<h2 style=\"color:" + color + ";\">" + food_item + '</h2>');
          //$('h2').css('color', color);

        }
          //alert(object.id + ' - ' + object.get('Sunday'));
          
        });

      }

//For Cafe84

      if($('body').has('#food_list_cafe84')){

      var week_to_fetch = "Dinner_Cafe84_Week" + week.toString();

      var Menu = Parse.Object.extend(week_to_fetch);
      var query = new Parse.Query(Menu);

      query.select(day);
      query.find().then(function(results){

        for (var i =0; i<results.length; i++){
          var object=results[i];
          var food_item = object.get(day);
          var color = "#444444";

          if(food_item.indexOf('(V)') != -1){
            color = "#008000";
          }
          if(food_item.indexOf('(VEG)') != -1){
            color = "#ffcc00";
          }
          
          $('#food_list_cafe84_dinner').append("<h2 style=\"color:" + color + ";\">" + food_item + '</h2>');
          //$('h2').css('color', color);

        }


          


          //alert(object.id + ' - ' + object.get('Sunday'));
          
        });

      var week_to_fetch = "Lunch_Cafe84_Week" + week.toString();

      var Menu = Parse.Object.extend(week_to_fetch);
      var query = new Parse.Query(Menu);

      query.select(day);
      query.find().then(function(results){

        for (var i =0; i<results.length; i++){
          var object=results[i];
          var food_item = object.get(day);
          var color = "#444444";

          if(food_item.indexOf('(V)') != -1){
            color = "#008000";
          }
          if(food_item.indexOf('(VEG)') != -1){
            color = "#ffcc00";
          }
          
          $('#food_list_cafe84_lunch').append("<h2 style=\"color:" + color + ";\">" + food_item + '</h2>');
          //$('h2').css('color', color);

        }

          //alert(object.id + ' - ' + object.get('Sunday'));
          
        });

      var week_to_fetch = "Breakfast_Cafe84_Week" + week.toString();

      var Menu = Parse.Object.extend(week_to_fetch);
      var query = new Parse.Query(Menu);

      query.select(day);
      query.find().then(function(results){

        for (var i =0; i<results.length; i++){
          var object=results[i];
          var food_item = object.get(day);
          var color = "#444444";

          if(food_item.indexOf('(V)') != -1){
            color = "#008000";
          }
          if(food_item.indexOf('(VEG)') != -1){
            color = "#ffcc00";
          }
          
          $('#food_list_cafe84_breakfast').append("<h2 style=\"color:" + color + ";\">" + food_item + '</h2>');
          //$('h2').css('color', color);

        }
          //alert(object.id + ' - ' + object.get('Sunday'));
          
        });

      }

//For EVK

      if($('body').has('#food_list_evk')){

      var week_to_fetch = "Dinner_EVK_Week" + week.toString();

      var Menu = Parse.Object.extend(week_to_fetch);
      var query = new Parse.Query(Menu);

      query.select(day);
      query.find().then(function(results){

        for (var i =0; i<results.length; i++){
          var object=results[i];
          var food_item = object.get(day);
          var color = "#444444";

          if(food_item.indexOf('(V)') != -1){
            color = "#008000";
          }
          if(food_item.indexOf('(VEG)') != -1){
            color = "#ffcc00";
          }
          
          $('#food_list_evk_dinner').append("<h2 style=\"color:" + color + ";\">" + food_item + '</h2>');
          //$('h2').css('color', color);

        }


          


          //alert(object.id + ' - ' + object.get('Sunday'));
          
        });

      var week_to_fetch = "Lunch_EVK_Week" + week.toString();

      var Menu = Parse.Object.extend(week_to_fetch);
      var query = new Parse.Query(Menu);

      query.select(day);
      query.find().then(function(results){

        for (var i =0; i<results.length; i++){
          var object=results[i];
          var food_item = object.get(day);
          var color = "#444444";

          if(food_item.indexOf('(V)') != -1){
            color = "#008000";
          }
          if(food_item.indexOf('(VEG)') != -1){
            color = "#ffcc00";
          }
          
          $('#food_list_evk_lunch').append("<h2 style=\"color:" + color + ";\">" + food_item + '</h2>');
          //$('h2').css('color', color);

        }

          //alert(object.id + ' - ' + object.get('Sunday'));
          
        });

      var week_to_fetch = "Breakfast_EVK_Week" + week.toString();

      var Menu = Parse.Object.extend(week_to_fetch);
      var query = new Parse.Query(Menu);

      query.select(day);
      query.find().then(function(results){

        for (var i =0; i<results.length; i++){
          var object=results[i];
          var food_item = object.get(day);
          var color = "#444444";

          if(food_item.indexOf('(V)') != -1){
            color = "#008000";
          }
          if(food_item.indexOf('(VEG)') != -1){
            color = "#ffcc00";
          }
          
          $('#food_list_evk_breakfast').append("<h2 style=\"color:" + color + ";\">" + food_item + '</h2>');
          //$('h2').css('color', color);

        }
          //alert(object.id + ' - ' + object.get('Sunday'));
          
        });

      }